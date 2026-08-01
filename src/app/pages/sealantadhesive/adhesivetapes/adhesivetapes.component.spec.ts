import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesivetapesComponent } from './adhesivetapes.component';

describe('AdhesivetapesComponent', () => {
  let component: AdhesivetapesComponent;
  let fixture: ComponentFixture<AdhesivetapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdhesivetapesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhesivetapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
