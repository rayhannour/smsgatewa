package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.dto.BornRequestDTO;
import com.cgpr.penaleservice.dto.BornResponseDTO;
import com.cgpr.penaleservice.entities.Born;
import com.cgpr.penaleservice.mappers.BornMapper;
import com.cgpr.penaleservice.repositories.BornRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BornServiceImpl implements BornService {

    private BornMapper bornMapper;
    private BornRepository bornRipository;
    public BornServiceImpl(BornRepository bornRipository, BornMapper bornMapper ) {
        this.bornMapper = bornMapper;
        this.bornRipository = bornRipository;
    }

    @Override
    public BornResponseDTO save(BornRequestDTO bornRequestDTO) {
        Born born=bornMapper.bornRequestDTOToBorn(bornRequestDTO);
        Born bornSave=this.bornRipository.save(born);
        BornResponseDTO bornResponseDTO=bornMapper.bornToBornResponseDTO(bornSave);
        return bornResponseDTO;
    }

    @Override
    public BornResponseDTO getBorn(String idBorn) {
        return null;
    }

    @Override
    public BornResponseDTO update(BornRequestDTO bornRequestDTO) {
        return null;
    }

    @Override
    public List<BornResponseDTO> listBorns() {
        return null;
    }
}
