package io.absence.service.Impl;


import io.absence.entity.Absence;
import io.absence.repository.AbsenceRepository;
import io.absence.service.AbsenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AbsenceServiceImpl implements AbsenceService {
    private final AbsenceRepository absenceRepository;
    @Autowired
    private WebClient.Builder webClientBuilder;

    @Override
    public List<Absence> findall() {
        return absenceRepository.findAll() ;
    }

    @Override
    public Absence addAbsence(Absence absence) {

            return absenceRepository.save(absence);

    }

}

