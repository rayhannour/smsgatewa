package com.cgpr.penaleservice.mappers;

import com.cgpr.penaleservice.dto.BornRequestDTO;
import com.cgpr.penaleservice.dto.BornResponseDTO;
import com.cgpr.penaleservice.entities.Born;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface BornMapper {
    BornResponseDTO bornToBornResponseDTO(Born born);
    Born bornRequestDTOToBorn(BornRequestDTO bornRequestDTO);
}
