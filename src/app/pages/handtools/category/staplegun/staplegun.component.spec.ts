import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaplegunComponent } from './staplegun.component';

describe('StaplegunComponent', () => {
  let component: StaplegunComponent;
  let fixture: ComponentFixture<StaplegunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaplegunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaplegunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
