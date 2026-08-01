import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoredrillsComponent } from './coredrills.component';

describe('CoredrillsComponent', () => {
  let component: CoredrillsComponent;
  let fixture: ComponentFixture<CoredrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoredrillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoredrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
