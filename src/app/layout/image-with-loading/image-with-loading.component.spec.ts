import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithLoadingComponent } from './image-with-loading.component';

describe('ImageWithLoadingComponent', () => {
  let component: ImageWithLoadingComponent;
  let fixture: ComponentFixture<ImageWithLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWithLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWithLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
