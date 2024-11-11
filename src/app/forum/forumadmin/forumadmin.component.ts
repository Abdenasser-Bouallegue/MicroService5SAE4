import { Component } from '@angular/core';
import { Forum } from '../models/forum';
import { ForumService } from '../services/forum.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forumadmin',
  templateUrl: './forumadmin.component.html',
  styleUrls: ['./forumadmin.component.css']
})
export class ForumadminComponent {
  forums: Forum[] = [];
  forum: Forum;


  constructor(private forumService: ForumService, private router: Router) { }

  
fetchForums(): void {
  this.forumService.getAllForum().subscribe(
    (forums: Forum[]) => {
      this.forums = forums;
    },
    (error) => {
      console.error('Error fetching forums:', error);
    }
  );
  console.log(this.forums)


}
deleteForum(forum: Forum): void {
  this.forumService.deleteForum(forum).subscribe(
    () => {
      console.log('Forum deleted successfully.');
      // Optionally, update the list of forums in your component.
      this.fetchForums();
    },
    (error) => {
      console.error('Error deleting forum:', error);
    }
  );
}
ngOnInit(): void {
  console.log("test")
  this.fetchForums();
}


getForum(idForum: number): void {
  this.forumService.getForumById(idForum).subscribe(
    (forum: Forum) => {
      this.forum = forum;
    },
    (error) => {
      console.error('Error fetching forum:', error);
      
    }
  );
}
}
