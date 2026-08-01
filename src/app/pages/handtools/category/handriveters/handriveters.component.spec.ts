import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandrivetersComponent } from './handriveters.component';

describe('HandrivetersComponent', () => {
  let component: HandrivetersComponent;
  let fixture: ComponentFixture<HandrivetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandrivetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandrivetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
