import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepladdersComponent } from './stepladders.component';

describe('StepladdersComponent', () => {
  let component: StepladdersComponent;
  let fixture: ComponentFixture<StepladdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepladdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepladdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
