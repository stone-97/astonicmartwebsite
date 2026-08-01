import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverallsComponent } from './coveralls.component';

describe('CoverallsComponent', () => {
  let component: CoverallsComponent;
  let fixture: ComponentFixture<CoverallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoverallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoverallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
