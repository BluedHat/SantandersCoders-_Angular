export class Book{
    id:string = '';
    title:string = '';
    author:string = '';
    genre:string = '';    
    price:number = 0;
    quantity:number = 0;
    urlImg = '';
    resume:string = '';
constructor(id:string, title:string,author:string,genre:string,price:number,quantity:number,urlImg:any,resume:string,){
this.id = id;
this.title = title;
this.author= author;
this.genre = genre;
this.price = price;
this.quantity= quantity;
this.urlImg = urlImg;
this.resume= resume;
}
}