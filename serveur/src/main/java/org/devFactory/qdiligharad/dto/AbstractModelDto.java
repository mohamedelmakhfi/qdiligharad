package org.devFactory.qdiligharad.dto;

import lombok.Data;

import java.util.Date;

@Data
public class AbstractModelDto<D> {
    private Long id;
    private Date createOn;
    private Long createBy;
    private Date editedOn;
    private Long editedBy;
}
