import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablepullersandfishtapesComponent } from './cablepullersandfishtapes.component';

describe('CablepullersandfishtapesComponent', () => {
  let component: CablepullersandfishtapesComponent;
  let fixture: ComponentFixture<CablepullersandfishtapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CablepullersandfishtapesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablepullersandfishtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
