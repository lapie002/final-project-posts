import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[])=>{ this.posts =  posts; }
    );
    this.postsService.getPosts();
    this.postsService.emitPost();
  }

  onNewPost(){
    this.router.navigate(['/posts','new']);
  }

  onDelete(post: Post){
    this.postsService.removePost(post);
  }

  /*onIncremente(i: number)*/

  /*onDecremente(i: number)*/

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
