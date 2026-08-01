import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DippingpasteComponent } from './dippingtape.component';

describe('DippingpasteComponent', () => {
  let component: DippingpasteComponent;
  let fixture: ComponentFixture<DippingpasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DippingpasteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DippingpasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
