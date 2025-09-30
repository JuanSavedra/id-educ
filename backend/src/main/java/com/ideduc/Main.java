package com.ideduc;

import com.ideduc.controller.GradeController;
import com.ideduc.controller.OccurrenceController;
import com.ideduc.repository.GradeRepository;
import com.ideduc.repository.OccurrenceRepository;
import com.ideduc.service.GradeService;
import com.ideduc.service.OccurrenceService;
import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;

public class Main {
    public static void main(String[] args) {
        var gradeRepository = new GradeRepository();
        var gradeService = new GradeService(gradeRepository);
        var gradeController = new GradeController(gradeService);

        var occurrenceRepository = new OccurrenceRepository();
        var occurrenceService = new OccurrenceService(occurrenceRepository);
        var occurrenceController = new OccurrenceController(occurrenceService);

        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(CorsPluginConfig.CorsRule::anyHost);
            });
        });

        app.get("/", ctx -> ctx.result("Hello World"));
        gradeController.registerRoutes(app);
        occurrenceController.registerRoutes(app);

        app.start(7070);
        System.out.println("Servidor Java rodando em http://localhost:7070");
    }
}
