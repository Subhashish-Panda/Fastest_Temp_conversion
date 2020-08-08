import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  c:number;
  f:number;
  k:number;
 ngOnInit(){
 }
 update1(){
   if(this.c!=null){
   this.f=((this.c*9)/5)+32;
   this.f=Math.round(this.f*100)/100;
   this.k=273.15+this.c;
   }
   else{
     this.f=undefined;
     this.k=undefined;
   }

 }
 update2(){
   if(this.f!=null){
   this.c=((this.f-32)*5)/9;
   this.c=Math.round(this.c*100)/100;
   this.k=273.15+this.c;
 }
 else{
   this.c=undefined;
   this.k=undefined;
 }
}
update3(){
  if(this.k!=null){
  this.c=(this.k-273.15);
  this.c=Math.round(this.c*100)/100;
  this.f=((this.c*9)/5)+32;
  this.f=Math.round(this.f*100)/100;
  }
  else{
     this.f=undefined;
     this.c=undefined;  
  }
}

}