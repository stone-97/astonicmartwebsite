import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincegardenComponent } from './princegarden.component';

describe('PrincegardenComponent', () => {
  let component: PrincegardenComponent;
  let fixture: ComponentFixture<PrincegardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincegardenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincegardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
