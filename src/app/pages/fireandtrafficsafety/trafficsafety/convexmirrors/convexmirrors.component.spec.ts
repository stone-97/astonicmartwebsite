import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvexmirrorsComponent } from './convexmirrors.component';

describe('ConvexmirrorsComponent', () => {
  let component: ConvexmirrorsComponent;
  let fixture: ComponentFixture<ConvexmirrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvexmirrorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvexmirrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
