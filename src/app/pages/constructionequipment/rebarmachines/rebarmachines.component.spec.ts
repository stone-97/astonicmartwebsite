import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodbendersComponent } from './rebarmachines.component';

describe('RodbendersComponent', () => {
  let component: RodbendersComponent;
  let fixture: ComponentFixture<RodbendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RodbendersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RodbendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
