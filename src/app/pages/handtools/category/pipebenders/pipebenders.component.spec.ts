import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipebendersComponent } from './pipebenders.component';

describe('PipebendersComponent', () => {
  let component: PipebendersComponent;
  let fixture: ComponentFixture<PipebendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipebendersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipebendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
