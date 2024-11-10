package tn.esprit.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Lesson;
import tn.esprit.entities.Timeslot;

public interface TimeslotRepository extends JpaRepository<Timeslot,Long> {
}
