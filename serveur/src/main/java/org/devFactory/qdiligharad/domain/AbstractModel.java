package org.devFactory.qdiligharad.domain;



import lombok.Data;

;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;
import java.util.Objects;

@Data
@MappedSuperclass
public class AbstractModel<M> {

    @Column(name = "create__on")
    private Date createOn;

    @Column(name = "create__By")
    private Long createBy;

    @Column(name = "edited__on")
    private Date editedOn;

    @Column(name = "edited__by")
    private Long editedBy;
}
