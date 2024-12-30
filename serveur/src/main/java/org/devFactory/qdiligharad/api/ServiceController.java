package org.devFactory.qdiligharad.api;

import org.devFactory.qdiligharad.domain.*;
import org.devFactory.qdiligharad.dto.RefCategoryServiceDTO;
import org.devFactory.qdiligharad.dto.RefMetadataDTO;
import org.devFactory.qdiligharad.dto.ServicesDTO;
import org.devFactory.qdiligharad.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @PutMapping("/update/{serviceId}")
    public ResponseEntity<ServicesDTO> updateService(
            @PathVariable Long serviceId,
            @RequestBody ServicesDTO serviceDto) {

        ServicesDTO updatedService = serviceService.updateService(serviceId, serviceDto);
        return ResponseEntity.ok(updatedService);
    }

    @GetMapping("/details/{serviceId}")
    public ResponseEntity<ServicesDTO> getServiceById(@PathVariable Long serviceId) {
        ServicesDTO serviceDto = serviceService.getServiceById(serviceId);
        return ResponseEntity.ok(serviceDto);
    }

    @GetMapping("/agent/services/{agentId}")
    public ResponseEntity<List<ServicesDTO>> getServicesByAgent(@PathVariable Long agentId) {
        List<ServicesDTO> services = serviceService.getServicesByAgent(agentId);
        return ResponseEntity.ok(services);
    }

    @DeleteMapping("/agent/services/{agentId}/{serviceId}")
    public ResponseEntity<String> deleteServiceByAgent(@PathVariable Long agentId, @PathVariable Long serviceId) {
        boolean isDeleted = serviceService.deleteServiceByAgent(serviceId, agentId);
        if (isDeleted) {
            return ResponseEntity.ok("Service successfully deleted.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Service could not be deleted.");
        }
    }



    @GetMapping("/categories")
    public ResponseEntity<List<RefCategoryServiceDTO>> getAllCategories() {
        return ResponseEntity.ok(serviceService.getAllCategories());
    }

    @GetMapping("/metadata/{categoryId}")
    public ResponseEntity<List<RefMetadataDTO>> getMetadataByCategory(@PathVariable Long categoryId) {
        return ResponseEntity.ok(serviceService.getMetadataByCategory(categoryId));
    }

    @PostMapping("/create")
    public ResponseEntity<ServicesDTO> createService(@RequestBody ServicesDTO serviceDTO) {
        return ResponseEntity.ok(serviceService.createService(serviceDTO));
    }

}
