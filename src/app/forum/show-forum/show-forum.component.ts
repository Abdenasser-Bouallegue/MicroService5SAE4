import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { Forum } from '../models/forum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-forum',
  templateUrl: './show-forum.component.html',
  styleUrls: ['./show-forum.component.css']
})
export class ShowForumComponent implements OnInit {
  forum: Forum;

  constructor(private forumService: ForumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const forumId = +params.get('id');
      
      if (!isNaN(forumId)) {
        this.getForum(forumId);
      } else {
        console.error('Invalid forum ID:', forumId);
       
      }
    });
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
  likeForum(forum: Forum): void {
    this.forumService.likeForum(forum.idForum).subscribe(
      response => {
        console.log('Post liked successfully', response);
        forum.likes++;
      },
      error => {
        console.error('Error liking post', error);
      }
    );
  }

  dislikeForum(forum:Forum): void {
    this.forumService.dislikeForum(forum.idForum).subscribe(
      response => {
        console.log('Post liked successfully', response);
        forum.dislikes++;

      },
      error => {
        console.error('Error liking post', error);
      }
    );
  }
}
