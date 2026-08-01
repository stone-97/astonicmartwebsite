import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingrammersComponent } from './jumpingrammers.component';

describe('JumpingrammersComponent', () => {
  let component: JumpingrammersComponent;
  let fixture: ComponentFixture<JumpingrammersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JumpingrammersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JumpingrammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
