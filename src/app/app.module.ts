import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdisplayComponent,
    MenuComponent,
    PagenotfoundComponent,
    SidebarComponent,
    ProductaddComponent,
    UserdisplayComponent,
    SignupComponent,
    EdituserComponent,
    EditproductComponent,
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    Sidebar2Component,
    CustomerComponent,
    SignupReactiveDemoComponent,
    EdituserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
