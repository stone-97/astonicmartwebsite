import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodgluesComponent } from './glues.component';

describe('WoodgluesComponent', () => {
  let component: WoodgluesComponent;
  let fixture: ComponentFixture<WoodgluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WoodgluesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WoodgluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
