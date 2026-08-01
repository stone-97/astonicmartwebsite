import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowertrowelsComponent } from './powertrowels.component';

describe('PowertrowelsComponent', () => {
  let component: PowertrowelsComponent;
  let fixture: ComponentFixture<PowertrowelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowertrowelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowertrowelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
