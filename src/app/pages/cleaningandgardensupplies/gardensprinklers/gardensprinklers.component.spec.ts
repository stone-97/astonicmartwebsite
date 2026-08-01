import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardensprinklersComponent } from './gardensprinklers.component';

describe('GardensprinklersComponent', () => {
  let component: GardensprinklersComponent;
  let fixture: ComponentFixture<GardensprinklersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardensprinklersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardensprinklersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
