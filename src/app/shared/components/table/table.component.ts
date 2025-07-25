import { ChangeDetectionStrategy, Component, Input, input, OnInit, signal } from '@angular/core';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { ColumnStyleWidthDirective } from '../../directives/columnStyleWidthDirective';

export interface header {
  name: string;
  size: number;
}

@Component({
  selector: 'app-table',
  imports: [
    ColumnStyleWidthDirective,
    TitleCasePipe,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  header = input<header[]>();
  data = input<any[]>();
  transformedData = signal<string[]>([]);

  ngOnInit(): void {
    const data = this.data();
    if (data?.length) {
      const allKeys = data.flatMap((obj) => Object.keys(obj));
      this.transformedData.set(Array.from(new Set(allKeys)));
    }
  }
}
