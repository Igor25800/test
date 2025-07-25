import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { EbayListing, ProductLocation, SameProduct } from '../../interfaces/product-location.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './card.component.scss'
})
export class CardComponent {
  imgPatch = input<string>();
  text = input<string>();
  data = input<string | number | ProductLocation[] | EbayListing[] | SameProduct[] | undefined>();
  fontSize = input<number>();
}
