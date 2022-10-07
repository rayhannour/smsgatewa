package org.smgs.smgsservice.services;



import org.smgs.smgsservice.dto.BornRequestDTO;
import org.smgs.smgsservice.dto.BornResponseDTO;

import java.util.List;

public interface BornService {
    BornResponseDTO save(BornRequestDTO bornRequestDTO);
    BornResponseDTO getBorn(String idBorn);
    BornResponseDTO update(BornRequestDTO bornRequestDTO);
    List<BornResponseDTO> listBorns();
}
