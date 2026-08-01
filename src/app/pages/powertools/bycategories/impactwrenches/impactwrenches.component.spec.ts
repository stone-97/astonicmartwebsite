import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactwrenchesComponent } from './impactwrenches.component';

describe('ImpactwrenchesComponent', () => {
  let component: ImpactwrenchesComponent;
  let fixture: ComponentFixture<ImpactwrenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpactwrenchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpactwrenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
