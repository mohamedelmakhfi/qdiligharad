package org.devFactory.qdiligharad.dto;

import lombok.Data;

@Data
public class RoleDTO extends AbstractModelDto<RoleDTO> {
    private Long id;
    private String name;
}
