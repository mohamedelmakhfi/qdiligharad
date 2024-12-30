package org.devFactory.qdiligharad.dto;

import lombok.Data;

@Data
public class RefMetadataOptionDTO extends AbstractModelDto<RefMetadataOptionDTO> {
    private Long id;
    private String optionValue;
    private String optionLabel;
}
