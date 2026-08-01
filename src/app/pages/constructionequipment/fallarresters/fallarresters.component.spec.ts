import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallarrestersComponent } from './fallarresters.component';

describe('FallarrestorsComponent', () => {
  let component: FallarrestersComponent;
  let fixture: ComponentFixture<FallarrestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallarrestersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallarrestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
