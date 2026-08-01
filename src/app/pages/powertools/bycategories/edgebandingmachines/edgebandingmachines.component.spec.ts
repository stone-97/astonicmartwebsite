import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgebandingmachinesComponent } from './edgebandingmachines.component';

describe('EdgebandingmachinesComponent', () => {
  let component: EdgebandingmachinesComponent;
  let fixture: ComponentFixture<EdgebandingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdgebandingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdgebandingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
