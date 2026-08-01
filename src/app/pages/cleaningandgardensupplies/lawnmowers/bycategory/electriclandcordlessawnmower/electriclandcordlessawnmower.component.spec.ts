import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricandcordlesslawnmowerComponent } from './electriclandcordlessawnmower.component';

describe('ElectricComponent', () => {
  let component: ElectricandcordlesslawnmowerComponent;
  let fixture: ComponentFixture<ElectricandcordlesslawnmowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricandcordlesslawnmowerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElectricandcordlesslawnmowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
