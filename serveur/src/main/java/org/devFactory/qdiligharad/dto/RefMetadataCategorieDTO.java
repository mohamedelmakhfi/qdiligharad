package org.devFactory.qdiligharad.dto;

import lombok.Data;

@Data
public class RefMetadataCategorieDTO extends AbstractModelDto<RefMetadataCategorieDTO> {
    private Long id;
    private Long categoryId;
    private Long metadataId;
}