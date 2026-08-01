import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformscalesComponent } from './platformscales.component';

describe('PlatformscalesComponent', () => {
  let component: PlatformscalesComponent;
  let fixture: ComponentFixture<PlatformscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
