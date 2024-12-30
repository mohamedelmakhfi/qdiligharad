package org.devFactory.qdiligharad.service;

import org.devFactory.qdiligharad.domain.User;
import org.devFactory.qdiligharad.dto.UserDto;

public interface UserService {

    UserDto findUserProfileByJwt(String jwt) throws Exception;

    UserDto findUserByEmail(String email) throws Exception;

    UserDto findUserById(Long userId) throws Exception;

}
