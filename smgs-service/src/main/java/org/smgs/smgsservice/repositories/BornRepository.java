package org.smgs.smgsservice.repositories;




import org.smgs.smgsservice.entities.Born;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BornRepository extends JpaRepository<Born,Long>{ // Long: Type of Employee ID
}