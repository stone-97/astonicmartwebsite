import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxmechComponent } from './maxmech.component';

describe('MaxmechComponent', () => {
  let component: MaxmechComponent;
  let fixture: ComponentFixture<MaxmechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxmechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxmechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
