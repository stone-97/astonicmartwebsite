import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretemixersComponent } from './concretemixers.component';

describe('ConcretemixersComponent', () => {
  let component: ConcretemixersComponent;
  let fixture: ComponentFixture<ConcretemixersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretemixersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcretemixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
