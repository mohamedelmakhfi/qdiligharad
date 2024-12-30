package org.devFactory.qdiligharad.repository;

import org.devFactory.qdiligharad.domain.ServiceMetadata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ServiceMetadataRepository extends AbstractRepository<ServiceMetadata, Long> {
    @Modifying
    @Transactional
    @Query("DELETE FROM ServiceMetadata sm WHERE sm.service.id = :serviceId")
    void deleteByServiceId(@Param("serviceId") Long serviceId);

}
