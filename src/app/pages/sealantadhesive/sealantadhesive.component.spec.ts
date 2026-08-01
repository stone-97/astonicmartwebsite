import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SealantadhesiveComponent } from './sealantadhesive.component';

describe('SealantadhesiveComponent', () => {
  let component: SealantadhesiveComponent;
  let fixture: ComponentFixture<SealantadhesiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SealantadhesiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SealantadhesiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
