package org.devFactory.qdiligharad.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractRepository<T, D> extends JpaRepository<T, Long> {
}
