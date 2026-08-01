import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnuematicimpactwrenchesComponent } from './pnuematicimpactwrenches.component';

describe('PnuematicComponent', () => {
  let component: PnuematicimpactwrenchesComponent;
  let fixture: ComponentFixture<PnuematicimpactwrenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PnuematicimpactwrenchesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PnuematicimpactwrenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
