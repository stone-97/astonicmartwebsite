import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraredthermometersComponent } from './infraredthermometers.component';

describe('InfraredthermometersComponent', () => {
  let component: InfraredthermometersComponent;
  let fixture: ComponentFixture<InfraredthermometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfraredthermometersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfraredthermometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
