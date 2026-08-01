import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackandliftsComponent } from './jackandlifts.component';

describe('JackandliftsComponent', () => {
  let component: JackandliftsComponent;
  let fixture: ComponentFixture<JackandliftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JackandliftsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JackandliftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
