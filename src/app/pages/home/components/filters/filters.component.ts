import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: `filters.component.html`,
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes', 'clothes', 'accessories'];

  constructor() { }

  ngOnInit(): void {
  }

  onShowCatergory(category: string): void {
    this.showCategory.emit(category);
  }

}


