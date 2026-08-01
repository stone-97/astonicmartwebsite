import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyshoesComponent } from './safetyshoes.component';

describe('SafetyshoesComponent', () => {
  let component: SafetyshoesComponent;
  let fixture: ComponentFixture<SafetyshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyshoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
