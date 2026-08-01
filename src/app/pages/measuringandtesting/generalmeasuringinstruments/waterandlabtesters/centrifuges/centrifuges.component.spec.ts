import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrifugesComponent } from './centrifuges.component';

describe('CentrifugesComponent', () => {
  let component: CentrifugesComponent;
  let fixture: ComponentFixture<CentrifugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentrifugesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentrifugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
