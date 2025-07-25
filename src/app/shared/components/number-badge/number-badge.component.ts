import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-number-badge',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './number-badge.component.html',
  styleUrl: './number-badge.component.scss'
})
export class NumberBadgeComponent {
  count = input<number>();
}
