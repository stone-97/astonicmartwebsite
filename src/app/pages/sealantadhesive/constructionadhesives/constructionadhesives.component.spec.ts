import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionadhesivesComponent } from './constructionadhesives.component';

describe('ConstructionadhesivesComponent', () => {
  let component: ConstructionadhesivesComponent;
  let fixture: ComponentFixture<ConstructionadhesivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionadhesivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionadhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
