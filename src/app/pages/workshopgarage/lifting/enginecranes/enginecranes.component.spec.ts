import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginecranesComponent } from './enginecranes.component';

describe('EnginecranesComponent', () => {
  let component: EnginecranesComponent;
  let fixture: ComponentFixture<EnginecranesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnginecranesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnginecranesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
