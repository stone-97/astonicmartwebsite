import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerextensionandreelsComponent } from './powerextensionandreels.component';

describe('PowerextensionandreelsComponent', () => {
  let component: PowerextensionandreelsComponent;
  let fixture: ComponentFixture<PowerextensionandreelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerextensionandreelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerextensionandreelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
