import { Component , OnInit } from '@angular/core';
import { Forum } from '../models/forum';
import { ForumService } from '../services/forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forums: Forum[] = [];
  searchTitle: string;

  forumToUpdate: Forum = {
    idForum: 0, 
    title: '',
    body: '',
    image: null,
    likes:0,
    dislikes:0,
    createDate: new Date(), 
  };
  openPopup(): void {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'block';
    }
}
openPopupUpdate(f: Forum): void {
  console.log(this.forumToUpdate);
  const popup = document.getElementById('popupUpdate');
  this.forumToUpdate = f;
  console.log(this.forumToUpdate);

  if (popup) {
      popup.style.display = 'block';
  }
}
openPopupDelete(): void {
  const popup = document.getElementById('popupDelete');
  if (popup) {
      popup.style.display = 'block';
  }
}

closePopup(): void {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
    }
}
closePopupUpdate(): void {
  const popup = document.getElementById('popupUpdate');
  if (popup) {
      popup.style.display = 'none';
  }
}
closePopupDelete(): void {
  const popup = document.getElementById('popupDelete');
  if (popup) {
      popup.style.display = 'none';
  }
}
ngOnInit(): void {
  console.log("test")
  this.fetchForums();
}

newForum: Forum = {
  idForum:null,
  title: "",
  body: "",
  image: null,
  createDate:null,
  likes:null,
  dislikes:null,
};

constructor(private forumService: ForumService, private router: Router) { }

addForum(): void {
  const formData = new FormData();
  formData.append('title', this.newForum.title);
  formData.append('body', this.newForum.body);
  formData.append('image', this.newForum.image);

  if (this.newForum.image) {
    formData.append('image', this.newForum.image);
  }

  this.forumService.addForum(formData).subscribe(
    (createdForum: Forum) => {
      console.log('Added successfully:', createdForum);
      this.resetForm(); // Reset the form after successful submission
      this.closePopup();
    },
    (error) => {
      console.error('Error adding forum:', error);
    }
  );
}


onFileSelected(event: any): void {
  // Handle file selection and update the 'image' property
  const file = event.target.files[0];
  if (file) {
    this.newForum.image = file;
  }
}

onSubmit(): void {
  // Optionally handle additional form submission logic here
  console.log('Post submitted:', this.newForum);
  this.addForum(); // Call addForum() when the form is submitted
    window.location.reload();
}

resetForm(): void {
  // Clear the form fields
  this.newForum = {
    idForum:null,
    title: "",
    body: "",
    image: null,
    createDate:null,
    likes:null,
    dislikes:null,
    
  };
}

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
updateForum(): void {
  console.log(this.forumToUpdate);
  
  // Call the service method to update the forum
  this.forumService.updateForum(this.forumToUpdate).subscribe(
    (updatedForum: Forum) => {
      console.log('Forum updated successfully:', updatedForum);
      this.closePopupUpdate();

      // Perform any additional actions if needed
    },
    (error) => {
      console.error('Error updating forum:', error);
    }
  );
}

getPostsByTitle(title: string): void {
  this.forumService.getPostsByTitle(title).subscribe(
    (forums: Forum[]) => {
      this.forums = forums;
      console.log('Fetched posts:', forums);
    },
    (error) => {
      console.error('Error fetching posts by title:', error);
    }
  );
}

onSearchInput(): void {
  console.log('Input changed:', this.searchTitle);
}


}
