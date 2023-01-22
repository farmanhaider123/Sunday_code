import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UserAuthService } from '../../ui-features/service/user-auth.service'
;

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit{

  cat:''
  data:''
  data1:any
res:any={ firstname:'',lastName:'',role:'',email:'',phone:'',contactNumber:'',password:''}
  userDetails:any
  id:any
role=["user","executiveUser","fieldExecutiveUser"]
myForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
  password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]),
  contactNumber:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]),
  role:new FormControl('',[Validators.required])
  // otp:new FormControl('',[Validators.required,Validators.pattern('[0-9]{ ,6}')]),
})

constructor (private userServ:UserAuthService,private router:ActivatedRoute){}
ngOnInit(): void {
  //id se data leke obj mai store karna 
this.id= this.router.snapshot.paramMap.get('id')
console.log(this.id)
this.userServ.getuserByemail(this.id).subscribe((res1:any)=>{

this.data1 = res1
console.log(this.data1.lastName)

 this.res={
  firstname:this.data1.firstName,
  lastName:this.data1.lastName,
  role:this.data1.role,
  email:this.data1.email,

  contactNumber:this.data1.contactNumber,
  password:this.data1.password


 }
 console.log(this.data1.role)
})

// this.email= this.route.snapshot.paramMap.get('id');
}
get fdata(){
  return this.myForm.controls;
}
  updateData()
  {
    let formdata = this.myForm.getRawValue();
    console.log(formdata)
   
   
   
  }

}
