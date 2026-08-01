import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkietalkiesComponent } from './walkietalkies.component';

describe('WalkietalkiesComponent', () => {
  let component: WalkietalkiesComponent;
  let fixture: ComponentFixture<WalkietalkiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalkietalkiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkietalkiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
