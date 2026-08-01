import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyharnessandlanyardsComponent } from './safetyharnessandlanyards.component';

describe('SafetyharnessandlanyardsComponent', () => {
  let component: SafetyharnessandlanyardsComponent;
  let fixture: ComponentFixture<SafetyharnessandlanyardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyharnessandlanyardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyharnessandlanyardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
