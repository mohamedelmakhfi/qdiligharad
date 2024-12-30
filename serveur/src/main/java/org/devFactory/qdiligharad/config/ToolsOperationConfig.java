package org.devFactory.qdiligharad.config;

import org.devFactory.qdiligharad.commons.ToolsOperation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ToolsOperationConfig {
    @Bean
    public ToolsOperation toolsOperation() {
        return new ToolsOperation();
    }
}
