package org.devFactory.qdiligharad.repository;

import org.devFactory.qdiligharad.domain.User;

public interface UserRepository extends AbstractRepository<User, Long> {
    User findByEmail(String email);

}
