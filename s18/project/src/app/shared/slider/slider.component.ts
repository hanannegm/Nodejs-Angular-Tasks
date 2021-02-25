import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliders = [
    {img:"assets/1.jpg",title:"First slide label",content:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"assets/2.jpg",title:"Second slide label",content:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"assets/3.jpg",title:"Third slide label",content:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"assets/4.jpg",title:"Fourth slide label",content:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
