import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerhosesComponent } from './pokerhoses.component';

describe('PokerhosesComponent', () => {
  let component: PokerhosesComponent;
  let fixture: ComponentFixture<PokerhosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokerhosesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokerhosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
