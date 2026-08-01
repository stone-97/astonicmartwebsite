import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewdriverbitsComponent } from './screwdriverbits.component';

describe('ScrewdriverbitsComponent', () => {
  let component: ScrewdriverbitsComponent;
  let fixture: ComponentFixture<ScrewdriverbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrewdriverbitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrewdriverbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
