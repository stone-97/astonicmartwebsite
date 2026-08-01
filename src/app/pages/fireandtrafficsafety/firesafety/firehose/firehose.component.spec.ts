import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirehoseComponent } from './firehose.component';

describe('FirehoseComponent', () => {
  let component: FirehoseComponent;
  let fixture: ComponentFixture<FirehoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirehoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirehoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
