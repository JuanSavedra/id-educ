package com.ideduc.repository;

import com.ideduc.model.Occurrence;
import java.util.List;
import java.util.UUID;

public class OccurrenceRepository {
    private final List<Occurrence> occurrences;

    public OccurrenceRepository() {
        this.occurrences = List.of(
                new Occurrence(UUID.randomUUID().toString(), "Médico", "2024-07-22T00:00:00Z"),
                new Occurrence(UUID.randomUUID().toString(), "Atraso",  "2024-07-22T00:00:00Z"),
                new Occurrence(UUID.randomUUID().toString(), "Advertência",  "2024-12-15T00:00:00Z"),
                new Occurrence(UUID.randomUUID().toString(), "Suspensão", "2024-12-15T00:00:00Z")
        );
    }

    public List<Occurrence> findAll() {
        return this.occurrences;
    }
}
