import { Directive, ElementRef,HostListener,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[myColor]'
})

export class MyColorDirective {

  constructor(private el:ElementRef) {
    console.log("this is mycolor directive");
   }

   @Input('myColor')
   colorVal:string

   @Input()
   abc:string

   ngOnInit(){
     console.log(this.el);
     this.el.nativeElement.style.color= this.colorVal || "blue";
   }

   @HostBinding('class.my-color')
   myColorClass:boolean = true;

   @HostListener('mouseenter')
   onmouseenter(){
    this.el.nativeElement.style.color="red";
    this.myColorClass= false;
   }


   @HostListener('mouseleave')
   onmouseLeave(){
    this.el.nativeElement.style.color=this.colorVal || "blue";
    this.myColorClass= true;
   }


}
