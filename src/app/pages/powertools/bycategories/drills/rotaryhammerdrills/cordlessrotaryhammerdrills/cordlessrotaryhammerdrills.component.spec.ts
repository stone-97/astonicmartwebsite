import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlessrotaryhammerdrillsComponent } from './cordlessrotaryhammerdrills.component';

describe('CordlessrotaryhammerdrillsComponent', () => {
  let component: CordlessrotaryhammerdrillsComponent;
  let fixture: ComponentFixture<CordlessrotaryhammerdrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlessrotaryhammerdrillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlessrotaryhammerdrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
