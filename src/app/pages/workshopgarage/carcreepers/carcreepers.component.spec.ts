import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcreepersComponent } from './carcreepers.component';

describe('CarcreepersComponent', () => {
  let component: CarcreepersComponent;
  let fixture: ComponentFixture<CarcreepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarcreepersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarcreepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
