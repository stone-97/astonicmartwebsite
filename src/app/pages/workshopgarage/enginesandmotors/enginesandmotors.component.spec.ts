import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginesandmotorsComponent } from './enginesandmotors.component';

describe('EnginesandmotorsComponent', () => {
  let component: EnginesandmotorsComponent;
  let fixture: ComponentFixture<EnginesandmotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnginesandmotorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnginesandmotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
