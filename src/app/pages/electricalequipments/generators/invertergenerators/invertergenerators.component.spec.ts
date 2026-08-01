import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertergeneratorsComponent } from './invertergenerators.component';

describe('InvertergeneratorsComponent', () => {
  let component: InvertergeneratorsComponent;
  let fixture: ComponentFixture<InvertergeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvertergeneratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvertergeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
