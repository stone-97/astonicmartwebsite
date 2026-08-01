import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarmuffsComponent } from './earmuffs.component';

describe('EarmuffsComponent', () => {
  let component: EarmuffsComponent;
  let fixture: ComponentFixture<EarmuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarmuffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarmuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
