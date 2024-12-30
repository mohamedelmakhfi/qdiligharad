package org.devFactory.qdiligharad.dto;

import lombok.Data;
import org.devFactory.qdiligharad.domain.ServiceMetadata;

import java.util.ArrayList;
import java.util.List;

@Data
public class ServicesDTO extends AbstractModelDto<ServicesDTO> {
    private Long id;
    private String name;
    private Long categoryId;
    private Long agentId;
    private List<ServiceMetadata> metadata = new ArrayList<>();
//  private List<ServiceMetadataDTO> metadata = new ArrayList<>();

}
