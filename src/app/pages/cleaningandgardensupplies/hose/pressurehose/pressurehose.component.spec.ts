import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressurehoseComponent } from './pressurehose.component';

describe('PressurehoseComponent', () => {
  let component: PressurehoseComponent;
  let fixture: ComponentFixture<PressurehoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressurehoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressurehoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
