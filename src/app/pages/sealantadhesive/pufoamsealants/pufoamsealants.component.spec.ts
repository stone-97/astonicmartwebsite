import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PufoamsealantsComponent } from './pufoamsealants.component';

describe('PufoamsealantsComponent', () => {
  let component: PufoamsealantsComponent;
  let fixture: ComponentFixture<PufoamsealantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PufoamsealantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PufoamsealantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
