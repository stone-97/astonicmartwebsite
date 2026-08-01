import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimpingtoolsComponent } from './crimpingtools.component';

describe('CrimpingtoolsComponent', () => {
  let component: CrimpingtoolsComponent;
  let fixture: ComponentFixture<CrimpingtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrimpingtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrimpingtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
