import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowertoolsComponent } from './powertools.component';

describe('PowertoolsComponent', () => {
  let component: PowertoolsComponent;
  let fixture: ComponentFixture<PowertoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowertoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowertoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
