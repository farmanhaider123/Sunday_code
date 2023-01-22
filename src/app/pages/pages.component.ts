import { Component, OnInit } from '@angular/core';

import { FIELDEXECUTIVE, MENU_ITEMS ,EXECUTIVE} from './pages-menu';
import {ADMIN} from './pages-menu'

import { UserAuthService } from './ui-features/service/user-auth.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout >
     <nb-menu *ngIf="!isadmin && islogedin" [items]="menu" ></nb-menu>
     <nb-menu *ngIf="isadmin && islogedin" [items]="ADMIN" ></nb-menu>
     <nb-menu *ngIf="isexecutive && islogedin" [items]="EXECUTIVE" ></nb-menu>
     <nb-menu *ngIf="isfield && islogedin" [items]="FIELDEXECUTIV" ></nb-menu>
    
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
islogedin!:boolean
isadmin!:boolean
isexecutive!:boolean
isfield!:boolean

  menu = MENU_ITEMS;
  ADMIN=ADMIN
  FIELDEXECUTIV=FIELDEXECUTIVE
  EXECUTIVE =EXECUTIVE

  constructor( private userServ:UserAuthService){}
  ngOnInit(){
  this.islogedin = this.userServ.isLogedIn();
  console.log(this.islogedin)
  console.log("isadmin is calle")
  this.isadmin=this.userServ.isAdmin()
  console.log("isadmin is aaa" + this.isadmin)
  //isexecutive ==> 
  this.isexecutive=this.userServ.isexecutive()
  console.log("exec is called")
 this.isfield=this.userServ.isfield()
  
}
}
