import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthaugersComponent } from './earthaugers.component';

describe('EarthaugersComponent', () => {
  let component: EarthaugersComponent;
  let fixture: ComponentFixture<EarthaugersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarthaugersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarthaugersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
