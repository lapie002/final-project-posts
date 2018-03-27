import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service'
import { Post } from '../../models/Post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  init(){
    this.postForm = this.formBuilder.group(
      {
        title:     ['',Validators.required],
        content:   ['',Validators.required],
      }
    );
  }

  onSavePost(){

      const title = this.postForm.get('title').value;
      const contenu = this.postForm.get('contenu').value;
      const loveits = 0;
      const create_at = new Date();

      const newPost = new Post(title,contenu,loveits,create_at);

      this.postsService.createNewPost(newPost);

      this.router.navigate(['/posts']);

  }

}
