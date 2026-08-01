import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectivevestsComponent } from './reflectivevests.component';

describe('ReflectivevestsComponent', () => {
  let component: ReflectivevestsComponent;
  let fixture: ComponentFixture<ReflectivevestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReflectivevestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReflectivevestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
