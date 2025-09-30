package com.ideduc.service;

import com.ideduc.model.Grade;
import com.ideduc.repository.GradeRepository;
import java.util.List;

public class GradeService {
    private final GradeRepository gradeRepository;

    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    public List<Grade> getAllGrades() {
        return this.gradeRepository.findAll();
    }
}
