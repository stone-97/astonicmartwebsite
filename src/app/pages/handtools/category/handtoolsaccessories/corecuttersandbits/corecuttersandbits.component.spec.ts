import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorecuttersandbitsComponent } from './corecuttersandbits.component';

describe('CorecuttersandbitsComponent', () => {
  let component: CorecuttersandbitsComponent;
  let fixture: ComponentFixture<CorecuttersandbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorecuttersandbitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorecuttersandbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
