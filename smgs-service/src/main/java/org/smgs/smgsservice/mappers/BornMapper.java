package org.smgs.smgsservice.mappers;

import org.smgs.smgsservice.dto.BornRequestDTO;
import org.smgs.smgsservice.dto.BornResponseDTO;
import org.smgs.smgsservice.entities.Born;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface BornMapper {
    BornResponseDTO bornToBornResponseDTO(Born born);
    Born bornRequestDTOToBorn(BornRequestDTO bornRequestDTO);
}
