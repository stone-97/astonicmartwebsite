import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisturetestersComponent } from './moisturetesters.component';

describe('MoisturetestersComponent', () => {
  let component: MoisturetestersComponent;
  let fixture: ComponentFixture<MoisturetestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoisturetestersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoisturetestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
