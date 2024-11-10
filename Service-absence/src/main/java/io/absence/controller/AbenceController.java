package io.absence.controller;


import io.absence.entity.Absence;
import io.absence.service.AbsenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/absence")
@RequiredArgsConstructor
public class AbenceController {

    private final AbsenceService absenceService;
    @PostMapping("/add")
    public Absence addFeedback(@RequestBody Absence a) {
        return absenceService.addAbsence(a);

    }

    @GetMapping("/all")
    public List<Absence> getAll() {
        return absenceService.findall();
    }
    @DeleteMapping("/remove/{id}")
    public void remove(@PathVariable("id") Integer id) {
        absenceService.removeAbsence(id);
    }
}
