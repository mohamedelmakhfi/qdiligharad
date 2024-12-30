package org.devFactory.qdiligharad.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.devFactory.qdiligharad.commons.ApiResponse;
import org.devFactory.qdiligharad.commons.Pager;
import org.devFactory.qdiligharad.commons.ResourceUtil;
import org.devFactory.qdiligharad.commons.SearchRequest;
import org.devFactory.qdiligharad.dto.ExampleDto;
import org.devFactory.qdiligharad.dto.search.ExampleSearchDto;
import org.devFactory.qdiligharad.exception.BadRequestException;
import org.devFactory.qdiligharad.exception.GeneralException;
import org.devFactory.qdiligharad.service.ExampleServeur;
import org.devFactory.qdiligharad.utils.Constantes;
import org.hibernate.TransientPropertyValueException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("api/example/")
public class ExampleController {
    private final ExampleServeur serveur;

    @PostMapping({"create"})
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse create(@RequestBody @Valid ExampleDto dto, BindingResult result) {
        log.info("Start calling ExampleController.create with creteria : {}", dto);
        if (result.hasErrors()) {
            log.error(ResourceUtil.getMessage("Invalid request"));
            throw new BadRequestException(result, ResourceUtil.getMessage("Invalid request"));
        } else {
            try{
                return ApiResponse.ok(HttpStatus.CREATED, serveur.create(dto), "Example Ajoute avec succes");
            } catch (DataIntegrityViolationException | TransientPropertyValueException e) {
                log.error("exception a executer create dans ExampleController: " + e.getMessage());
                //String message = sqlException.readMessage(e.getMessage());
                return ApiResponse.ko(HttpStatus.BAD_REQUEST, null, e.getMessage());
            } catch (GeneralException e) {
                log.error("exception a executer create dans document: " + e.getMessage());
                throw new GeneralException("Erreur lors de la creation : " + e.getMessage());
            }
            catch (Exception e) {
                log.error("exception a executer create dans document: " + e.getMessage());
                throw new BadRequestException("Erreur lors de la creation : " + e.getMessage());
            }
        }
    }

//    @PostMapping("search")
//    public ApiResponse<Pager<ExampleDto>> search(@RequestBody SearchRequest<ExampleSearchDto> dto) {
//        log.info("Start calling DocumentController.search with creteria : {}", dto.toString());
//
//        if (dto.getSize() == 0) {
//            dto.setSize(Constantes.DEFAULT_PAGE_SIZE);
//        }
//
//        return ApiResponse.ok(serveur.search(dto));
//    }
}
