import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomscalesComponent } from './bathroomscales.component';

describe('BathroomscalesComponent', () => {
  let component: BathroomscalesComponent;
  let fixture: ComponentFixture<BathroomscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BathroomscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BathroomscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
