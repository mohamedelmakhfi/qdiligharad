package org.devFactory.qdiligharad.repository;

import org.devFactory.qdiligharad.domain.RefMetadataCategorie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RefMetadataCategorieRepository extends AbstractRepository<RefMetadataCategorie, Long> {
    List<RefMetadataCategorie> findByCategoryId(Long categoryId);
}

