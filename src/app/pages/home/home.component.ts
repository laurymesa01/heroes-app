import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('sidebar') sidebar!: ElementRef;

  isOpen: boolean = false;

  // sideBar = document.getElementById("mobile-nav");
  // openSidebar = document.getElementById("openSideBar");
  // closeSidebar = document.getElementById("closeSideBar");
  // this.sidebar.style.transform = "translateX(-260px)";

  // sidebarHandler(flag: any) {
  //   if (flag) {
  //     this.sideBar.style.transform = "translateX(0px)";
  //     this.openSidebar.classList.add("hidden");
  //     closeSidebar.classList.remove("hidden");
  //   } else {
  //       sideBar.style.transform = "translateX(-260px)";
  //       closeSidebar.classList.add("hidden");
  //       openSidebar.classList.remove("hidden");
  //   }
  // }

  constructor(private renderer: Renderer2) { }

  ngOnInit(){}

  openSidebar(){
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      console.log('Holaaaa');
      this.renderer.removeClass(this.sidebar.nativeElement, "overflow-hidden");
      this.renderer.addClass(this.sidebar.nativeElement, "translate-x-0");
    }
    else{
      console.log('Adioooooos');
      this.renderer.addClass(this.sidebar.nativeElement, "overflow-hidden");
      this.renderer.removeClass(this.sidebar.nativeElement, "translate-x-0");

    }
  }

  // closeSidebar(){
  //   this.isOpen = !this.isOpen;

  //   if (this.isOpen) {}
  // }

}
