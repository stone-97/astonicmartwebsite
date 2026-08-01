import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutoffsawsComponent } from './cutoffsaws.component';

describe('CutoffsawsComponent', () => {
  let component: CutoffsawsComponent;
  let fixture: ComponentFixture<CutoffsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CutoffsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CutoffsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
