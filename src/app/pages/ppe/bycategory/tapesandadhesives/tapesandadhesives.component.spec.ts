import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapesandadhesivesComponent } from './tapesandadhesives.component';

describe('TapesandadhesivesComponent', () => {
  let component: TapesandadhesivesComponent;
  let fixture: ComponentFixture<TapesandadhesivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TapesandadhesivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TapesandadhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
