import { ManagerInterfaceComponent } from './library/manager/manager-interface/manager-interface.component';
import { CartComponent } from './library/cart/cart.component';
import { BookshelfComponent } from './library/bookshelf/bookshelf.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'livros',pathMatch:'full'},
  {path:'livros', component: BookshelfComponent},
  {path: 'cart', component:CartComponent},
  {path: 'manager', component: ManagerInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
