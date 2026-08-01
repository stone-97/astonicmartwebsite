import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirechangesComponent } from './tirechanges.component';

describe('TirechangesComponent', () => {
  let component: TirechangesComponent;
  let fixture: ComponentFixture<TirechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TirechangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TirechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
