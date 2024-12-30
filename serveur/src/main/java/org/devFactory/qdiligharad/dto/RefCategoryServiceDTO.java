package org.devFactory.qdiligharad.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class RefCategoryServiceDTO extends AbstractModelDto<RefCategoryServiceDTO> {
    private Long id;
    private String name;
    private String description;
    private Long serviceId ;
    private List<RefMetadataCategorieDTO> metadataCategories = new ArrayList<>();
}
