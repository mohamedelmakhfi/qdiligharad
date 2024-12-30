package org.devFactory.qdiligharad.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.devFactory.qdiligharad.commons.SearchRequest;
import org.devFactory.qdiligharad.commons.ToolsOperation;
import org.devFactory.qdiligharad.domain.Example;
import org.devFactory.qdiligharad.domain.view.ExampleView;
import org.devFactory.qdiligharad.dto.ExampleDto;
import org.devFactory.qdiligharad.dto.search.ExampleSearchDto;
import org.devFactory.qdiligharad.mapper.ExampleMapper;
import org.devFactory.qdiligharad.repository.ExampleRepository;
import org.devFactory.qdiligharad.repository.ExampleSearchRepository;
import org.devFactory.qdiligharad.utils.Authorities;
import org.devFactory.qdiligharad.utils.Constantes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
public class ExampleServeur {

    private final ExampleMapper mapper;
    private final ExampleRepository repository;
//    private final IUserService userService;
    private final ExampleSearchService searchService;
    private final ExampleSearchRepository searchRepository;
    private final ToolsOperation toolsOperation;
    private final Authorities authorities;

    public ExampleDto create(ExampleDto dto) {
//       dto.setCreateBy(userService.getConnectedUser().getId());
        dto.setCreateOn(new Date());
        Example example = mapper.toEntity(dto);
        example = repository.save(example);
        return mapper.toDto(example);
    }

  public Object search(SearchRequest<ExampleSearchDto> dto) {
      int page = dto.getPage() != 0 ? dto.getPage() - 1 : 0;
      int size = dto.getSize() != 0 ? dto.getSize() : Constantes.DEFAULT_PAGE_SIZE;
      PageRequest pageRequest = PageRequest.of(page, size);
        Specification<ExampleView> spec = searchService.buildCriteria(dto);
        Page entities = searchRepository.findAll(spec, pageRequest);
      return mapper.toDtosWithPagination(entities);
  }
}
