import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpraygunsComponent } from './sprayguns.component';

describe('SpraygunsComponent', () => {
  let component: SpraygunsComponent;
  let fixture: ComponentFixture<SpraygunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpraygunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpraygunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
