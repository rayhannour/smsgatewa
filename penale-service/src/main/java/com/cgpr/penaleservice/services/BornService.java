package com.cgpr.penaleservice.services;



import com.cgpr.penaleservice.dto.BornRequestDTO;
import com.cgpr.penaleservice.dto.BornResponseDTO;

import java.util.List;

public interface BornService {
    BornResponseDTO save(BornRequestDTO bornRequestDTO);
    BornResponseDTO getBorn(String idBorn);
    BornResponseDTO update(BornRequestDTO bornRequestDTO);
    List<BornResponseDTO> listBorns();
}
