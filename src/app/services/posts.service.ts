import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/Post.model';


@Injectable()
export class PostsService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPost(){
    this.postSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts').on(
      'value',(data)=>{
              this.posts = data.val() ? data.val() : [] ;
              this.emitPost();
       }
    );
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.savePosts();
    this.emitPost();
  }

  removePost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postElement)=>{
          if(postElement === post){ return true;}
       }
    );
    this.posts.splice(postIndexToRemove,1);
    this.savePosts();
    this.emitPost();
  }

  toIncremente(post: Post){
    post.loveits++;
    this.savePosts();
    this.emitPost();
  }

  toDecremente(post: Post){
    post.loveits--;
    this.savePosts();
    this.emitPost();
  }

  /*onIncremente(i: number)*/
  /*
  onIncrementePost(post: Post){

    const postIndexToIncrement = this.posts.findIndex(
      (postElement)=>{
          if(postElement === post){ return true;}
       }
    );
    console.log("index : " + postIndexToIncrement);
    const postSelected = this.posts[postIndexToIncrement];
    console.log("post : " + postSelected);
    post.toIncremente();

    this.emitPost();

    //this.posts[i].toIncremente();
    //this.emitPost();

  }
*/

  /*onDecremente(i: number)*/
  /*
  onDecremente(post: Post){
    //this.posts[index].toDecremente();
    //this.emitPost();
  }
  */


  /**migration des methodes*/
  /*
  getColor(){
    if(this.loveits > 0){
        return 'green';
      }
      else if(this.loveits < 0){
        return 'red';
      }
      else{
        return 'black';
      }
  }
  */




}
