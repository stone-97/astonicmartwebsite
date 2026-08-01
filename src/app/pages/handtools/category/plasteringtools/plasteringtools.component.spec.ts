import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasteringtoolsComponent } from './plasteringtools.component';

describe('PlasteringtoolsComponent', () => {
  let component: PlasteringtoolsComponent;
  let fixture: ComponentFixture<PlasteringtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlasteringtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlasteringtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
