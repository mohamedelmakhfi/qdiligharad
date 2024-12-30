package org.devFactory.qdiligharad.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.devFactory.qdiligharad.domain.view.ExampleView;
import org.devFactory.qdiligharad.dto.ExampleDto;
import org.devFactory.qdiligharad.dto.search.ExampleSearchDto;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ExampleSearchService extends AbstractService<ExampleView, ExampleDto, ExampleSearchDto> {

    @Override
    protected List<Predicate> buildPredicates(Root<ExampleView> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, ExampleSearchDto dto) {
        List<Predicate> predicates = new ArrayList<>();
        log.info("buildPredicates : {}", dto);
        if (StringUtils.isNotBlank(dto.getName())) {
            predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" +dto.getName().toLowerCase()+ "%"));
        }
        return predicates;
    }


}
