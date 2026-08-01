import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleaccessoriesComponent } from './scaleaccessories.component';

describe('ScaleaccessoriesComponent', () => {
  let component: ScaleaccessoriesComponent;
  let fixture: ComponentFixture<ScaleaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScaleaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaleaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
