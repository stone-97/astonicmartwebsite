import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPeComponent } from './ppe.component';

describe('PPeComponent', () => {
  let component: PPeComponent;
  let fixture: ComponentFixture<PPeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PPeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
