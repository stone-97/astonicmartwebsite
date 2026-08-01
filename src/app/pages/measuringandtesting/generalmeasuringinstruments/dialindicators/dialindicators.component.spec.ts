import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialindicatorsComponent } from './dialindicators.component';

describe('DialindicatorsComponent', () => {
  let component: DialindicatorsComponent;
  let fixture: ComponentFixture<DialindicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialindicatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialindicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
