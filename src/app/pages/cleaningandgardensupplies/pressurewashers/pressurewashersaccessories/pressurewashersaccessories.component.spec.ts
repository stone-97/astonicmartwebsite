import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressurewashersaccessoriesComponent } from './pressurewashersaccessories.component';

describe('AccessoriesComponent', () => {
  let component: PressurewashersaccessoriesComponent;
  let fixture: ComponentFixture<PressurewashersaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressurewashersaccessoriesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PressurewashersaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
