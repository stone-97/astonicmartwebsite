import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceshieldsComponent } from './faceshields.component';

describe('FaceshieldsComponent', () => {
  let component: FaceshieldsComponent;
  let fixture: ComponentFixture<FaceshieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceshieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceshieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
