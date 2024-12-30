package org.devFactory.qdiligharad.service;

import org.devFactory.qdiligharad.domain.*;
import org.devFactory.qdiligharad.dto.*;
import org.devFactory.qdiligharad.mapper.*;
import org.devFactory.qdiligharad.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.devFactory.qdiligharad.domain.Services;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceMetadataRepository serviceMetadataRepository;
    @Autowired
    private RefCategoryServiceRepository categoryRepository;

    @Autowired
    private RefMetadataRepository metadataRepository;
    @Autowired
    private ServicesMapper servicesMapper;

    @Autowired
    private RefMetadataRepository refMetadataRepository;


    @Autowired
    private RefMetadataCategorieRepository metadataCategorieRepository;

    @Autowired
    private ServiceMetadataMapper serviceMetadataMapper;

    @Autowired
    private RefMetadataMapper refMetadataMapper;

    @Autowired
    private RefCategoryServiceMapper refCategoryServiceMapper;


    @Transactional
    public ServicesDTO updateService(Long serviceId, ServicesDTO serviceDto) {

        Services service = servicesMapper.toEntity(serviceDto);

        Services existingService = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new EntityNotFoundException("Service not found"));

        existingService.setName(service.getName());
        existingService.setCategory(service.getCategory());
        existingService.setAgent(service.getAgent());

        List<ServiceMetadata> updatedMetadata = new ArrayList<>();
        for (ServiceMetadata metadataDto : serviceDto.getMetadata()) {
            RefMetadata metadata = refMetadataRepository.findById(metadataDto.getMetadata().getId())
                    .orElseThrow(() -> new EntityNotFoundException("Metadata not found"));

            ServiceMetadata serviceMetadata = new ServiceMetadata();
            serviceMetadata.setMetadata(metadata);
            serviceMetadata.setValue(metadataDto.getValue());
            serviceMetadata.setService(existingService);
            updatedMetadata.add(serviceMetadata);
        }

        serviceMetadataRepository.deleteByServiceId(serviceId);

        serviceMetadataRepository.saveAll(updatedMetadata);

        Services updatedService = serviceRepository.save(existingService);

        return servicesMapper.toDto(updatedService);
    }

    @Transactional
    public ServicesDTO getServiceById(Long serviceId) {
        Services service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new EntityNotFoundException("Service not found"));
        return servicesMapper.toDto(service);
    }
    @Transactional
    public List<ServicesDTO> getServicesByAgent(Long agentId) {
        List<Services> services = serviceRepository.findByAgentId(agentId);
        return servicesMapper.toDtos(services);
    }


    @Transactional
    public boolean deleteServiceByAgent(Long serviceId, Long agentId) {
        Services service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + serviceId));
        if (!service.getAgent().getId().equals(agentId)) {
            throw new RuntimeException("You are not authorized to delete this service.");
        }
        serviceRepository.delete(service);
        return true;
    }

    @Transactional
    public List<RefCategoryServiceDTO> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(refCategoryServiceMapper::toDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<RefMetadataDTO> getMetadataByCategory(Long categoryId) {
        return metadataCategorieRepository.findByCategoryId(categoryId).stream()
                .map(RefMetadataCategorie::getMetadata)
                .map(refMetadataMapper::toDto)
                .collect(Collectors.toList());
    }


    @Transactional
    public ServicesDTO createService(ServicesDTO serviceDTO) {
        Services service = servicesMapper.toEntity(serviceDTO);

        service = serviceRepository.save(service);

        Services finalService = service;
        serviceDTO.getMetadata().forEach(metadataDto -> {
            ServiceMetadata metadata = serviceMetadataMapper.toEntity(serviceMetadataMapper.toDto(metadataDto));

            RefMetadata refMetadata = metadataRepository.findById(metadataDto.getMetadata().getId())
                    .orElseThrow(() -> new RuntimeException("Metadata not found with id: " + metadataDto.getMetadata().getId()));
            metadata.setMetadata(refMetadata);
            metadata.setService(finalService);
            serviceMetadataRepository.save(metadata);
        });
        return servicesMapper.toDto(service);
    }


}
