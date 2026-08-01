import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetysignsComponent } from './safetysigns.component';

describe('SafetysignsComponent', () => {
  let component: SafetysignsComponent;
  let fixture: ComponentFixture<SafetysignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetysignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetysignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
