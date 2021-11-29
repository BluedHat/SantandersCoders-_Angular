import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/service/bookapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = []
  public totalShopper : any = 0;

  //todo -  Total geral

constructor(private cartApi: CartService, private bookApi:BookapiService) { }

 ngOnInit(): void{
    this.cartApi.getProduct()
    .subscribe(response=>{
      this.products = response;
      this.totalShopper = this.cartApi.getTotalPrice()
    })
  }

  removerItem(item:any){
    this.cartApi.removeCartItem(item);
  }

  emptyCart(){
    this.cartApi.clearCart();
  }


}
