import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolineblowersComponent } from './gasolineblowers.component';

describe('GasolineblowersComponent', () => {
  let component: GasolineblowersComponent;
  let fixture: ComponentFixture<GasolineblowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasolineblowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasolineblowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
