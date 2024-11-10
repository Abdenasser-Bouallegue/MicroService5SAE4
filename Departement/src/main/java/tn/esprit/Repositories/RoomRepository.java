package tn.esprit.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Lesson;
import tn.esprit.entities.Room;

public interface RoomRepository extends JpaRepository<Room,Long> {
}