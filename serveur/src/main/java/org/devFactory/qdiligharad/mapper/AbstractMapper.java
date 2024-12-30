package org.devFactory.qdiligharad.mapper;

import org.devFactory.qdiligharad.commons.Pager;
import org.devFactory.qdiligharad.domain.AbstractModel;
import org.devFactory.qdiligharad.dto.AbstractModelDto;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;

public class AbstractMapper<M extends AbstractModel<M>, D extends AbstractModelDto<D>> {
    ModelMapper mapper = new ModelMapper();

    public AbstractMapper() {
    }

    public Type parametrizeType(int index) {
        Type sooper = this.getClass().getGenericSuperclass();
        return ((ParameterizedType)sooper).getActualTypeArguments()[index];
    }

    public M toEntity(D dto) {
        return (M)this.mapper.map(dto, this.parametrizeType(0));
    }

    public D toDto(M entity) {
        return (D)this.mapper.map(entity, this.parametrizeType(1));
    }

    public List<D> toDtos(List entities) {
        return (List)entities.stream().map((row) -> {
            return this.toDto((M)row);
        }).collect(Collectors.toList());
    }

    public Pager<D> toDtosWithPagination(Page entities) {
        Pager<D> pager = new Pager();
        pager.setContent(this.toDtos(entities.getContent()));
        pager.setPageSize(entities.getSize());
        pager.setTotalPages(entities.getTotalPages());
        pager.setTotalElements(entities.getTotalElements());
        pager.setPageNumber(entities.getNumber());
        return pager;
    }
}


