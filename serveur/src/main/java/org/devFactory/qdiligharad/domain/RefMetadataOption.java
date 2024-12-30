package org.devFactory.qdiligharad.domain;

import javax.persistence.*;

@Entity
public class RefMetadataOption extends AbstractModel<RefMetadataOption> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ref_metadata_id")
    private RefMetadata metadata;

    private String optionValue;
    private String optionLabel;
}
