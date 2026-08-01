import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumperstatersComponent } from './jumperstarters.component';

describe('JumperstatersComponent', () => {
  let component: JumperstatersComponent;
  let fixture: ComponentFixture<JumperstatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JumperstatersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JumperstatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
