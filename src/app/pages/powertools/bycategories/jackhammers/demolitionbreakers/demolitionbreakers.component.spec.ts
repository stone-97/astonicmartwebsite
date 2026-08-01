import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolitionbreakersComponent } from './demolitionbreakers.component';

describe('DemolitionbreakersComponent', () => {
  let component: DemolitionbreakersComponent;
  let fixture: ComponentFixture<DemolitionbreakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemolitionbreakersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemolitionbreakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
