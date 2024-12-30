package org.devFactory.qdiligharad.domain;

import lombok.*;
import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RefMetadataCategorie extends AbstractModel<RefMetadataCategorie> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ref_category_id")
    private RefCategoryService category;

    @ManyToOne
    @JoinColumn(name = "ref_metadata_id")
    private RefMetadata metadata;
}
