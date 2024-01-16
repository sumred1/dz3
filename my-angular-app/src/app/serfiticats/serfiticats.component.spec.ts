import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerfiticatsComponent } from './serfiticats.component';

describe('SerfiticatsComponent', () => {
  let component: SerfiticatsComponent;
  let fixture: ComponentFixture<SerfiticatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerfiticatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerfiticatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
