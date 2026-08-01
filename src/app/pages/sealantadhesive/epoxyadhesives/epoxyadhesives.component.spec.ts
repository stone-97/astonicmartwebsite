import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpoxyadhesivesComponent } from './epoxyadhesives.component';

describe('EpoxyadhesivesComponent', () => {
  let component: EpoxyadhesivesComponent;
  let fixture: ComponentFixture<EpoxyadhesivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpoxyadhesivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpoxyadhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
