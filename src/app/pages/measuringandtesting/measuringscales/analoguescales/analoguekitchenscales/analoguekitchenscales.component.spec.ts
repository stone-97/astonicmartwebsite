import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaloguekitchenscalesComponent } from './analoguekitchenscales.component';

describe('AnaloguekitchenscalesComponent', () => {
  let component: AnaloguekitchenscalesComponent;
  let fixture: ComponentFixture<AnaloguekitchenscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnaloguekitchenscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnaloguekitchenscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
