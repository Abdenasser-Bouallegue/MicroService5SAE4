package tn.esprit.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Timeslot {


    @Id @GeneratedValue
    private Long idTimeslot;

    private DayOfWeek dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;




}
