package org.smgs.smgsservice.services;

import org.smgs.smgsservice.dto.BornRequestDTO;
import org.smgs.smgsservice.dto.BornResponseDTO;
import org.smgs.smgsservice.entities.Born;
import org.smgs.smgsservice.mappers.BornMapper;
import org.smgs.smgsservice.repositories.BornRepository;
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
