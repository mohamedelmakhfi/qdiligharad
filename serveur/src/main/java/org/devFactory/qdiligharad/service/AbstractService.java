package org.devFactory.qdiligharad.service;


import org.devFactory.qdiligharad.commons.SearchRequest;
import org.devFactory.qdiligharad.domain.AbstractModel;
import org.devFactory.qdiligharad.dto.AbstractModelDto;
import org.devFactory.qdiligharad.dto.search.AbstarctSearchDto;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ReflectionUtils;

import javax.persistence.criteria.*;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class AbstractService<T extends AbstractModel<T>, D extends AbstractModelDto<D>, C extends AbstarctSearchDto<C>> {
    protected Specification<T> buildCriteria(SearchRequest<C> dto) {
        return (root, query, criteriaBuilder) -> {
            query.distinct(true);

            // Handle sorting
            if (dto.getSortField() != null && dto.getDirection() != null) {
                Order order = dto.getDirection().isAscending()
                        ? criteriaBuilder.asc(root.get(dto.getSortField()))
                        : criteriaBuilder.desc(root.get(dto.getSortField()));
                query.orderBy(order);
            }

            // Handle filtering
            List<Predicate> predicates = buildPredicates(root, query, criteriaBuilder, dto.getCriteria());
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }


    protected List<Predicate> buildPredicates(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, C dto) {
        List<Predicate> predicates = new ArrayList<>();

        if (dto != null) {
            Field[] fields = dto.getClass().getDeclaredFields();
            for (Field field : fields) {
                try {
                    ReflectionUtils.makeAccessible(field);
                    Object value = field.get(dto);
                    if (value != null) {
                        // Add predicate for each field with non-null value
                        predicates.add(criteriaBuilder.equal(root.get(field.getName()), value));
                    }
                } catch (IllegalAccessException e) {
                    throw new RuntimeException("Error accessing field: " + field.getName(), e);
                }
            }
        }

        return predicates;
    }

}
