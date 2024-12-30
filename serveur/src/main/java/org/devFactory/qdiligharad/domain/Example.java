package org.devFactory.qdiligharad.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;


@EqualsAndHashCode(callSuper=false)
@Data
@Entity
@Table(name = "example")
public class Example extends AbstractModel<Example> {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 120)
    private String name;
}
