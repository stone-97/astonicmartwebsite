import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadprotectionsComponent } from './headprotections.component';

describe('HeadprotectionsComponent', () => {
  let component: HeadprotectionsComponent;
  let fixture: ComponentFixture<HeadprotectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadprotectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadprotectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
