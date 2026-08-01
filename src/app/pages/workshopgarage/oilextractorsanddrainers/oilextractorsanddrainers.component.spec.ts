import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilextractorsanddrainersComponent } from './oilextractorsanddrainers.component';

describe('OilextractorsanddrainersComponent', () => {
  let component: OilextractorsanddrainersComponent;
  let fixture: ComponentFixture<OilextractorsanddrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OilextractorsanddrainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OilextractorsanddrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
