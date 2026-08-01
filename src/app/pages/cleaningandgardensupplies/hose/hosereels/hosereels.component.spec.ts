import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosereelsComponent } from './hosereels.component';

describe('HosereelsComponent', () => {
  let component: HosereelsComponent;
  let fixture: ComponentFixture<HosereelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HosereelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HosereelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
