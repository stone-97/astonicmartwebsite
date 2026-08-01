import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolinejackhammersComponent } from './gasolinejackhammers.component';

describe('GasolinejackhammersComponent', () => {
  let component: GasolinejackhammersComponent;
  let fixture: ComponentFixture<GasolinejackhammersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasolinejackhammersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasolinejackhammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
