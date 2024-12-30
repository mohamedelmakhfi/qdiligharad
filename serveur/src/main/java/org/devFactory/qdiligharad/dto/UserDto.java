package org.devFactory.qdiligharad.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.devFactory.qdiligharad.domain.Role;

import java.util.List;
import java.util.Set;

@EqualsAndHashCode(callSuper=false)
@Data
public class UserDto extends AbstractModelDto<UserDto> {
    private Long id;
    private String fullName;
    private String email;
    private List<Role> roles;
}
