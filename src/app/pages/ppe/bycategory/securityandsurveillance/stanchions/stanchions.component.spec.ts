import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanchionsComponent } from './stanchions.component';

describe('StanchionsComponent', () => {
  let component: StanchionsComponent;
  let fixture: ComponentFixture<StanchionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StanchionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StanchionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
