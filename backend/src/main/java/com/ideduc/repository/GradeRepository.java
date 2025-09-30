package com.ideduc.repository;

import com.ideduc.model.Grade;
import java.util.List;
import java.util.UUID;

public class GradeRepository {
    private final List<Grade> grades;

    public GradeRepository() {
        this.grades = List.of(
            new Grade(UUID.randomUUID().toString(), "Matemática Discreta", 8.5, "2024.1", "2024-07-22T00:00:00Z"),
            new Grade(UUID.randomUUID().toString(), "Cálculo I", 9.0, "2024.1", "2024-07-22T00:00:00Z"),
            new Grade(UUID.randomUUID().toString(), "Programação Orientada a Objetos", 7.8, "2024.2", "2024-12-15T00:00:00Z"),
            new Grade(UUID.randomUUID().toString(), "Estrutura de Dados", 9.5, "2024.2", "2024-12-15T00:00:00Z")
        );
    }

    public List<Grade> findAll() {
        return this.grades;
    }
}
