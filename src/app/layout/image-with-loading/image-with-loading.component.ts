import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-loading',
  templateUrl: './image-with-loading.component.html',
  styleUrls: ['./image-with-loading.component.css']
})
export class ImageWithLoadingComponent {
  isLoading: boolean;
  @Input() image: string;
  @Input() class: string;
  @Input() loadClass: string;
  @Input() error: string;

  constructor() {
    this.isLoading = true;
    this.image = "";
    this.class = "";
    this.loadClass = "";
    this.error = "";
  }

  hideLoader() {
    this.isLoading = false;
  }
  onImgError(event: any) {
    event.target.src = this.error
  }
}