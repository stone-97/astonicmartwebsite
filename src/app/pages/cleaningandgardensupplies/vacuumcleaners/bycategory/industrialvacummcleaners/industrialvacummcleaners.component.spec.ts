import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialvacummcleanersComponent } from './industrialvacummcleaners.component';

describe('CommercialvacummcleanersComponent', () => {
  let component: CommercialvacummcleanersComponent;
  let fixture: ComponentFixture<CommercialvacummcleanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommercialvacummcleanersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CommercialvacummcleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
