import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs-compat/operator/filter';
import Swal from 'sweetalert2';
import { UserAuthService } from '../../ui-features/service/user-auth.service';
import { fruits } from './fruits-list';
@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  userlist = fruits;
  users1: any;
  constructor(private userserv: UserAuthService) { }
  _id: any;
  data = '';
  uers1:any
  astatus: any;
  c = 0;
  users: any;
  toggledata: any;
  role=[];
  filterString = ''
  selecteduser: any;
  myForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
  contactNumber:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]),
 
  // pincode:new FormControl('', [Validators.required])
  // otp:new FormControl('',[Validators.required,Validators.pattern('[0-9]{ ,6}')]),
})
  ngOnInit()
  {
    this.userserv.Getalluser().subscribe((res: any) => {
      this.selecteduser = res
    })
    this.userserv.getuserRole().subscribe((res: any) => {
      console.log(res)
     res.forEach((element)=> {
        this.role.push(element.name)
        
      });
   })
  
  }
  

cat: any;
  toggleStatus(userid:any,value: any) {
    this.toggledata = { userid, value }
    console.log(this.toggledata)
    this.userserv.toggleStatus(this.toggledata).subscribe((res: any) => {
      if (res.err == 0
      ) {
        Swal.fire(`${res.msg}`, `${value}`, 'success')
        this.userserv.Getalluser().subscribe((res: any) => {
          this.selecteduser = res
        })
      }
   })
  }
  getuserdata(id: any) {
    console.log(id)
    this.userserv.getuserByid(id).subscribe((res: any) => {
      this.users= res;
  })
    
  }

  get fdata(){
  return this.myForm.controls;
}
  editdata(id:any) {
    console.log(id)
    this._id = id;
    this.userserv.getuserByid(id).subscribe((res: any) => {
      this.users1 = res;
    })
  }
  postData() {
    let formdata = this.myForm.getRawValue();
    let id = this._id
    
    console.log(formdata)
  }
}