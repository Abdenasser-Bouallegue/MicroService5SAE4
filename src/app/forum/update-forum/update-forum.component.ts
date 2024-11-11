import { Component } from '@angular/core';

@Component({
  selector: 'app-update-forum',
  templateUrl: './update-forum.component.html',
  styleUrls: ['./update-forum.component.css']
})
export class UpdateForumComponent {
  post = {
    title: '',
    description: '' , 
    image:null ,
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Post submitted:', this.post);
    // You can send this.post data to your backend for further processing
  }
  onFileSelected(event: any) {
    // Handle file selection and update the 'image' property
    const file = event.target.files[0];
    if (file) {
      this.post.image = file;
    }
  }
}
