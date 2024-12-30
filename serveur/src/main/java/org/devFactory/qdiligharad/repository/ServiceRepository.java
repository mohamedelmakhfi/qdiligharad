package org.devFactory.qdiligharad.repository;

import org.devFactory.qdiligharad.domain.Services;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends AbstractRepository<Services, Long> {
    List<Services> findByAgentId(Long agentId);
}
