import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholtestersComponent } from './alcoholtesters.component';

describe('AlcoholtestersComponent', () => {
  let component: AlcoholtestersComponent;
  let fixture: ComponentFixture<AlcoholtestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlcoholtestersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlcoholtestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
