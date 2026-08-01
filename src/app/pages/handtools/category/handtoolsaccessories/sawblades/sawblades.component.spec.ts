import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawbladesComponent } from './sawblades.component';

describe('SawbladesComponent', () => {
  let component: SawbladesComponent;
  let fixture: ComponentFixture<SawbladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SawbladesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SawbladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
