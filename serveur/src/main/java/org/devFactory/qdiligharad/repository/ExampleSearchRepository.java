package org.devFactory.qdiligharad.repository;

import org.devFactory.qdiligharad.domain.view.ExampleView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public interface ExampleSearchRepository extends AbstractRepository<ExampleView, Long> {
    Page findAll(Specification<ExampleView> buildCriteria, Pageable pageable);

}
