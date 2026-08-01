import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireextinguishersComponent } from './fireextinguishers.component';

describe('FireextinguishersComponent', () => {
  let component: FireextinguishersComponent;
  let fixture: ComponentFixture<FireextinguishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireextinguishersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireextinguishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
