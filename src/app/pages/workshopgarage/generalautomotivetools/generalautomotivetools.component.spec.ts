import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralautomotivetoolsComponent } from './generalautomotivetools.component';

describe('GeneralautomotivetoolsComponent', () => {
  let component: GeneralautomotivetoolsComponent;
  let fixture: ComponentFixture<GeneralautomotivetoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralautomotivetoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralautomotivetoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
