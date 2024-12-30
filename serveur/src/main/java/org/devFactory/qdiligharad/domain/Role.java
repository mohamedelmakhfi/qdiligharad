package org.devFactory.qdiligharad.domain;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class Role extends AbstractModel<Role> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;
}
