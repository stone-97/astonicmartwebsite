import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallarrestorsComponent } from './fallarrestors.component';

describe('FallarrestorsComponent', () => {
  let component: FallarrestorsComponent;
  let fixture: ComponentFixture<FallarrestorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallarrestorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallarrestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
