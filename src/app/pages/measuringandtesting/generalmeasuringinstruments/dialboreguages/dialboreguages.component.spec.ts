import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialboreguagesComponent } from './dialboreguages.component';

describe('DialboreguagesComponent', () => {
  let component: DialboreguagesComponent;
  let fixture: ComponentFixture<DialboreguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialboreguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialboreguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
