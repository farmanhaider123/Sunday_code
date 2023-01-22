import { Component } from '@angular/core';
import { UserAuthService } from '../ui-features/service/user-auth.service';

@Component({
  selector: 'ngx-components',
  template: `
  <ngx-list *ngIf="islogedin && isadmin"></ngx-list>
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {
  // constructor(privae ){}
  islogedin!:boolean
isadmin!:boolean
  
  constructor( private userServ:UserAuthService){}
  ngOnInit(){
  this.islogedin = this.userServ.isLogedIn();
  console.log(this.islogedin)
  this.isadmin=this.userServ.isAdmin()
  console.log("isadmin is aaa" + this.isadmin)
  
}
}
