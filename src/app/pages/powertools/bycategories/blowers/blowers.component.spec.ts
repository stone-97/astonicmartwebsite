import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlowersComponent } from './blowers.component';

describe('BlowersComponent', () => {
  let component: BlowersComponent;
  let fixture: ComponentFixture<BlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
