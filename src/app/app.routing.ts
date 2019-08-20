import { Routes, RouterModule } from '@angular/router';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import {LoginComponent} from './login/login.component';
import { UserGuardService } from './userguard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';

const arr: Routes = [
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',canActivate:[UserGuardService],component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'users',component:UserdisplayComponent},
  {path:'signup',component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
   {path:'addtask',component:AddtaskComponent},
   {path:'task',component:TaskdisplayComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'customer', component:CustomerComponent},
  {path:'signup2', component:SignupReactiveDemoComponent},
  {path:'editreactive/:user_email',component:EdituserreactiveComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/pagenotfound'},

];

export const routing = RouterModule.forRoot(arr);
