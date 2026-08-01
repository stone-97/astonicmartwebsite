import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposablesComponent } from './disposables.component';

describe('DisposablesComponent', () => {
  let component: DisposablesComponent;
  let fixture: ComponentFixture<DisposablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisposablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisposablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
