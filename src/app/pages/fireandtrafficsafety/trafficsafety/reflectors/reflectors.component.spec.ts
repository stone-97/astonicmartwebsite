import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectorsComponent } from './reflectors.component';

describe('ReflectorsComponent', () => {
  let component: ReflectorsComponent;
  let fixture: ComponentFixture<ReflectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReflectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReflectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
