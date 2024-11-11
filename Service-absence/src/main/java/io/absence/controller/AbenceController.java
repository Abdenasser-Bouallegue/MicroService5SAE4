package io.absence.controller;


import io.absence.entity.Absence;
import io.absence.service.AbsenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/absence")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AbenceController {
   @Autowired
     AbsenceService absenceService;
    @PostMapping("/add")
    public Absence addFeedback(@RequestBody Absence a) {
        return absenceService.addAbsence(a);

    }

    @GetMapping("/all")
    public List<Absence> getAll() {
        return absenceService.findall();
    }

    @DeleteMapping("/deleteAbsence/{idAbsence}")
    public void deleteAbsence(@PathVariable Long idAbsence) {
        absenceService.deleteAbsence(idAbsence);
    }

    @GetMapping("/getAbsence/{idAbsence}")
    public Absence getAbsenceById(@PathVariable Long idAbsence) {
        return absenceService.getAbsenceById(idAbsence);
    }

    @PutMapping("/updateAbsence")
    public Absence update( @RequestBody Absence absence ){
        return absenceService.updateAbsence(absence);
    }

}
