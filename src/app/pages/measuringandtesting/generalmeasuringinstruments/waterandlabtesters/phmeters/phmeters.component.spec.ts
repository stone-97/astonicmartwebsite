import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhmetersComponent } from './phmeters.component';

describe('PhmetersComponent', () => {
  let component: PhmetersComponent;
  let fixture: ComponentFixture<PhmetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhmetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhmetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
