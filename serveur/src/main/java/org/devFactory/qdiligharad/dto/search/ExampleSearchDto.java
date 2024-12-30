package org.devFactory.qdiligharad.dto.search;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class ExampleSearchDto extends AbstarctSearchDto<ExampleSearchDto> {
    private String name;
}
