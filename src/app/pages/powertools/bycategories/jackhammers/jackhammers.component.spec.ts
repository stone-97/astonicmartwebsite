import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackhammersComponent } from './jackhammers.component';

describe('JackhammersComponent', () => {
  let component: JackhammersComponent;
  let fixture: ComponentFixture<JackhammersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JackhammersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JackhammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
