package org.devFactory.qdiligharad.repository;

import org.devFactory.qdiligharad.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends AbstractRepository<Role, Long> {
    Role findByName(String name);
}

