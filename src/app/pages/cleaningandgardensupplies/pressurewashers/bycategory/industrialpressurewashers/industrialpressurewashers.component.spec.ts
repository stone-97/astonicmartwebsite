import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialpressurewashersComponent } from './industrialpressurewashers.component';

describe('IndustrialpressurewashersComponent', () => {
  let component: IndustrialpressurewashersComponent;
  let fixture: ComponentFixture<IndustrialpressurewashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustrialpressurewashersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustrialpressurewashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
