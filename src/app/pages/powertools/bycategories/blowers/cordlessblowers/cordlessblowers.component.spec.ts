import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlessblowersComponent } from './cordlessblowers.component';

describe('CordlessblowersComponent', () => {
  let component: CordlessblowersComponent;
  let fixture: ComponentFixture<CordlessblowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlessblowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlessblowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
