export class Post{

  constructor(public title, public content, public loveits, public create_at){}

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

  toIncremente(){
    this.loveits++;
  }

  toDecremente(){
    this.loveits--;
  }

}
