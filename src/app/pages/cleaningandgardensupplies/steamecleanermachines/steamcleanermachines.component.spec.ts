import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamecleanermachinesComponent } from './steamcleanermachines.component';

describe('SteamecleanermachinesComponent', () => {
  let component: SteamecleanermachinesComponent;
  let fixture: ComponentFixture<SteamecleanermachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteamecleanermachinesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SteamecleanermachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
