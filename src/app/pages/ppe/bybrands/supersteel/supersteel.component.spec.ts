import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersteelComponent } from './supersteel.component';

describe('SupersteelComponent', () => {
  let component: SupersteelComponent;
  let fixture: ComponentFixture<SupersteelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupersteelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupersteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
