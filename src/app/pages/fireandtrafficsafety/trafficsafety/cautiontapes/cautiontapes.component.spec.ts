import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautiontapesComponent } from './cautiontapes.component';

describe('CautiontapesComponent', () => {
  let component: CautiontapesComponent;
  let fixture: ComponentFixture<CautiontapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CautiontapesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CautiontapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
