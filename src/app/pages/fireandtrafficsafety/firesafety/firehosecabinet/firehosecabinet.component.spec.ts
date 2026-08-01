import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirehosecabinetComponent } from './firehosecabinet.component';

describe('FirehosecabinetComponent', () => {
  let component: FirehosecabinetComponent;
  let fixture: ComponentFixture<FirehosecabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirehosecabinetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirehosecabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
