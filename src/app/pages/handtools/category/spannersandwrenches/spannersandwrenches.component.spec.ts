import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpannersandwrenchesComponent } from './spannersandwrenches.component';

describe('SpannersandwrenchesComponent', () => {
  let component: SpannersandwrenchesComponent;
  let fixture: ComponentFixture<SpannersandwrenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpannersandwrenchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpannersandwrenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
