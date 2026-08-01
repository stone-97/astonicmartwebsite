import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircompressoraccessoriesComponent } from './aircompressoraccessories.component';

describe('AircompressoraccessoriesComponent', () => {
  let component: AircompressoraccessoriesComponent;
  let fixture: ComponentFixture<AircompressoraccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircompressoraccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircompressoraccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
