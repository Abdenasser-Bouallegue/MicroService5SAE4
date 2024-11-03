package io.absence.service;


import io.absence.entity.Absence;

import java.util.List;

public interface AbsenceService {
List<Absence>findall();
Absence addAbsence(Absence absence);


}
