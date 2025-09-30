package com.ideduc.service;

import com.ideduc.model.Grade;
import com.ideduc.model.Occurrence;
import com.ideduc.repository.OccurrenceRepository;

import java.util.List;

public class OccurrenceService {
    private final OccurrenceRepository occurrenceRepository;

    public OccurrenceService(OccurrenceRepository occurrenceRepository) {
        this.occurrenceRepository = occurrenceRepository;
    }

    public List<Occurrence> getAllOccurrences() {
        return this.occurrenceRepository.findAll();
    }
}
