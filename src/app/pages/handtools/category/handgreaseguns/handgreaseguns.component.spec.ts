import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandgreasegunsComponent } from './handgreaseguns.component';

describe('HandgreasegunsComponent', () => {
  let component: HandgreasegunsComponent;
  let fixture: ComponentFixture<HandgreasegunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandgreasegunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandgreasegunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
