import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricimpactwrenchesComponent } from './electricimpactwrenches.component';

describe('ElectricimpactwrenchesComponent', () => {
  let component: ElectricimpactwrenchesComponent;
  let fixture: ComponentFixture<ElectricimpactwrenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricimpactwrenchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricimpactwrenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
