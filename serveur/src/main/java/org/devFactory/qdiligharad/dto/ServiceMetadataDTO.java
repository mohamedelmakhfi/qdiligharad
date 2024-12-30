package org.devFactory.qdiligharad.dto;

import lombok.Data;

@Data
public class ServiceMetadataDTO extends AbstractModelDto<ServiceMetadataDTO> {
    private Long id;
    private Long metadataId;
    private String value;
    private Long serviceId;
}