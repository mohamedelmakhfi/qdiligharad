package org.devFactory.qdiligharad.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RefMetadata extends AbstractModel<RefMetadata> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String defaultValue;
    @Column(name = "metadata_order")
    private String order;
    private String mandatory;
    private String type;

//    @OneToMany(mappedBy = "metadata", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<RefMetadataOption> options = new ArrayList<>();

    @OneToMany(mappedBy = "metadata", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<RefMetadataCategorie> categories = new ArrayList<>();
}

