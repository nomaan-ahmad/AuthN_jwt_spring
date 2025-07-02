package com.nomaan.AuthN_JWT_Spring.repository;

import com.nomaan.AuthN_JWT_Spring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, String> {
    User findUserByUsername(String username);
}