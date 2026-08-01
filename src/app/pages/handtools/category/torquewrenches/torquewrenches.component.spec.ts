import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorquewrenchesComponent } from './torquewrenches.component';

describe('TorquewrenchesComponent', () => {
  let component: TorquewrenchesComponent;
  let fixture: ComponentFixture<TorquewrenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TorquewrenchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorquewrenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
