package org.devFactory.qdiligharad.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class RefMetadataDTO extends AbstractModelDto<RefMetadataDTO> {
    private Long id;
    private String name;
    private String description;
    private String defaultValue;
    private String order;
    private String mandatory;
    private String type;
//    private List<RefMetadataOptionDTO> options = new ArrayList<>();
    private List<RefMetadataCategorieDTO> categories = new ArrayList<>();
}
