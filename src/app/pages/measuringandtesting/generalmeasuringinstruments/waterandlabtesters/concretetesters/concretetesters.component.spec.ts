import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretetestersComponent } from './concretetesters.component';

describe('ConcretemetersComponent', () => {
  let component: ConcretetestersComponent;
  let fixture: ComponentFixture<ConcretetestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretetestersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConcretetestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
