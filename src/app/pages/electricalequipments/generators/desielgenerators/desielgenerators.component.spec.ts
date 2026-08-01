import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesielgeneratorsComponent } from './desielgenerators.component';

describe('DesielgeneratorsComponent', () => {
  let component: DesielgeneratorsComponent;
  let fixture: ComponentFixture<DesielgeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesielgeneratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesielgeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
