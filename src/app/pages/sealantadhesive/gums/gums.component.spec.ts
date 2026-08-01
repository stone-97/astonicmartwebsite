import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GumsComponent } from './gums.component';

describe('GumsComponent', () => {
  let component: GumsComponent;
  let fixture: ComponentFixture<GumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
