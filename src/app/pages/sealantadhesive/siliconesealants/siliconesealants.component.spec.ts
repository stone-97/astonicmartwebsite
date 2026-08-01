import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiliconesealantsComponent } from './siliconesealants.component';

describe('SiliconesealantsComponent', () => {
  let component: SiliconesealantsComponent;
  let fixture: ComponentFixture<SiliconesealantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiliconesealantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiliconesealantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
