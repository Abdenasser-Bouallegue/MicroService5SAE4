package tn.esprit.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Lesson {


    @Id
    @GeneratedValue
    private Long idLesson;
    private String subject;
    private String teacher;
    private String studentGroup;


    @ManyToOne(cascade = CascadeType.ALL)
    private Timeslot timeslot;


    @ManyToOne(cascade = CascadeType.ALL)
    private Room room;

}