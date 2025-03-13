import { Component } from '@angular/core';
// import { LoaderService } from '../../services/loader.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-overlay" *ngIf="isLoading$ | async">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}
}
