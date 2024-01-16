import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageForPersonalInfoComponent } from './image-for-personal-info.component';

describe('ImageForPersonalInfoComponent', () => {
  let component: ImageForPersonalInfoComponent;
  let fixture: ComponentFixture<ImageForPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageForPersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageForPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
