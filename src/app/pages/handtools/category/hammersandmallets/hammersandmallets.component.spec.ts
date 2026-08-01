import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HammersandmalletsComponent } from './hammersandmallets.component';

describe('HammersandmalletsComponent', () => {
  let component: HammersandmalletsComponent;
  let fixture: ComponentFixture<HammersandmalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HammersandmalletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HammersandmalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
