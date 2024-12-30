package org.devFactory.qdiligharad.domain.view;

import lombok.Data;
import org.devFactory.qdiligharad.domain.AbstractModel;

import javax.persistence.*;

@Data
@Entity
@Table(name = "v_example")
public class ExampleView extends AbstractModel<ExampleView> {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Column(name = "name", nullable = false, length = 120)
    private String name;
}
