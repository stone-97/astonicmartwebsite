import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // ✅ ADD THIS

import { ElectricpressurewashersComponent } from './electricpressurewashers.component';

describe('ElectricpressurewashersComponent', () => {
  let component: ElectricpressurewashersComponent;
  let fixture: ComponentFixture<ElectricpressurewashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricpressurewashersComponent],
      imports: [RouterTestingModule] // ✅ ADD THIS
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElectricpressurewashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});