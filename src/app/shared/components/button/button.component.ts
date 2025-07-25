import { Component, input } from '@angular/core';
import { NgClass, NgOptimizedImage } from "@angular/common";

type color = 'purple' | 'white'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  img = input<string>();
  color = input<color>();
  text = input<string>();
}
