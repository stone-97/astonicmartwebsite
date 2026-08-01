import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerniercalipersComponent } from './verniercalipers.component';

describe('VerniercalipersComponent', () => {
  let component: VerniercalipersComponent;
  let fixture: ComponentFixture<VerniercalipersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerniercalipersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerniercalipersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
