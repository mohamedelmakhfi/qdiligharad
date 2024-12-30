package org.devFactory.qdiligharad.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ServiceMetadata extends AbstractModel<ServiceMetadata> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "metadata_id")
    private RefMetadata metadata;

    private String value;

    @ManyToOne
    @JoinColumn(name = "service_id")
    @JsonIgnore
    private Services service;

}

