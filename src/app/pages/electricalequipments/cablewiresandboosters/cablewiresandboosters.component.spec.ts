import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablewiresandboostersComponent } from './cablewiresandboosters.component';

describe('CablewiresandboostersComponent', () => {
  let component: CablewiresandboostersComponent;
  let fixture: ComponentFixture<CablewiresandboostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CablewiresandboostersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablewiresandboostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
