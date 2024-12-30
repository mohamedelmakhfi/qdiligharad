package org.devFactory.qdiligharad.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=false)
@Data
public class ExampleDto extends AbstractModelDto<ExampleDto> {

    private Long id;
    private String name;
}
