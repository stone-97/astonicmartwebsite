import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DickiesComponent } from './dickies.component';

describe('DickiesComponent', () => {
  let component: DickiesComponent;
  let fixture: ComponentFixture<DickiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DickiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DickiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
