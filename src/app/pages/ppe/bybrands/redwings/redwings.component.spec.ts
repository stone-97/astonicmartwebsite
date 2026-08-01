import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedwingsComponent } from './redwings.component';

describe('RedwingsComponent', () => {
  let component: RedwingsComponent;
  let fixture: ComponentFixture<RedwingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedwingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedwingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
