package com.cgpr.penaleservice.repositories;




import com.cgpr.penaleservice.entities.Born;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BornRepository extends JpaRepository<Born,Long>{ // Long: Type of Employee ID
}