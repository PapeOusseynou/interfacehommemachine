import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MagasinComponent } from './magasin/magasin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VenteComponent } from './vente/vente.component';
import { CommandeComponent } from './commande/commande.component';
import { StockComponent } from './stock/stock.component';



const route:Routes=[
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'magasin',component:MagasinComponent},
  {path:'vente',component:VenteComponent},
  {path:'commande',component:CommandeComponent},
  {path:'stock',component:StockComponent},

  {path:'',redirectTo:'/magasin',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MagasinComponent,
    VenteComponent,
    CommandeComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot(route), BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
