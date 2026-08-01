import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallchasersComponent } from './wallchasers.component';

describe('WallchasersComponent', () => {
  let component: WallchasersComponent;
  let fixture: ComponentFixture<WallchasersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WallchasersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WallchasersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
