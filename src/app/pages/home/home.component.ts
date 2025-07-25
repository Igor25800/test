import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { header, TableComponent } from '../../shared/components/table/table.component';
import { ProductDetailsService } from '../../shared/services/product-details/product-details.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { NumberBadgeComponent } from '../../shared/components/number-badge/number-badge.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../shared/interfaces/product-location.interface';
import { headerEbayListings, headerLocation, headerSameProducts } from '../../shared/until/table';
import { leftCards, rightCards } from '../../shared/until/card';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NgOptimizedImage } from '@angular/common';

export type CardConfig = {
  text: string;
  key: keyof Product;
  imgPatch?: string;
  fontSize?: number;
};

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TableComponent,
    CardComponent,
    NumberBadgeComponent,
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private productServ = inject(ProductDetailsService);
  readonly productSignal = toSignal<Product>(this.productServ.getProduct());

  headerLocation = signal<header[]>(headerLocation);
  headerEbayListings = signal<header[]>(headerEbayListings);
  headerSameProducts = signal<header[]>(headerSameProducts);

  leftCards = signal<CardConfig[]>(leftCards)
  rightCards = signal<CardConfig[]>(rightCards)
}
