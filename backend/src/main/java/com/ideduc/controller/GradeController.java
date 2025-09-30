package com.ideduc.controller;

import com.ideduc.service.GradeService;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class GradeController {
    private final GradeService gradeService;

    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    public void getAll(Context ctx) {
        var grades = this.gradeService.getAllGrades();
        ctx.json(grades);
    }

    public void registerRoutes(Javalin app) {
        app.get("/api/grades", this::getAll);
    }
}
