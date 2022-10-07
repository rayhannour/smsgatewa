package com.cgpr.penaleservice.repositories;

import com.cgpr.penaleservice.entities.Statispr;
import org.springframework.data.repository.CrudRepository;


import java.util.Date;

public interface StatisprRepository extends CrudRepository<Statispr, Date> {
}
