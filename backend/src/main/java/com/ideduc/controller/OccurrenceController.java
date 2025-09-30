package com.ideduc.controller;

import com.ideduc.service.GradeService;
import com.ideduc.service.OccurrenceService;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class OccurrenceController {
    private final OccurrenceService occurrenceService;

    public OccurrenceController(OccurrenceService occurrenceService) {
        this.occurrenceService = occurrenceService;
    }

    public void getAll(Context ctx) {
        var grades = this.occurrenceService.getAllOccurrences();
        ctx.json(grades);
    }

    public void registerRoutes(Javalin app) {
        app.get("/api/occurrences", this::getAll);
    }
}
