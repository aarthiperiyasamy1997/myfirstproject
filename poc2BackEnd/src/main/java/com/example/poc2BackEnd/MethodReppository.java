package com.example.poc2BackEnd;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MethodReppository extends CrudRepository<Method , Integer>
{

}
