import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletricpipebendersComponent } from './electricpipebenders.component';

describe('EletricpipebendersComponent', () => {
  let component: EletricpipebendersComponent;
  let fixture: ComponentFixture<EletricpipebendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EletricpipebendersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EletricpipebendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
