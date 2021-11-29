import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public bookList = new BehaviorSubject<any>([]);
  public shopperSearch = new BehaviorSubject<string>("");

  constructor() { }

  getProduct(){
    return this.bookList.asObservable();
  }

  setProduct(livro:any){
    this.cartItemList.push(...livro);
    this.bookList.next(livro)
  }

  addToCart(livro:any){
    this.cartItemList.push(livro);
    this.bookList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(){
    let total = 0;
    this.cartItemList.map((a:any)=>{
        total += a.total;
        console.log(total)
    })
  }

  removeCartItem(item:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(item.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.bookList.next(this.cartItemList)
  }

  clearCart(){
    this.cartItemList = [];
    this.bookList.next(this.cartItemList)
  }

}
