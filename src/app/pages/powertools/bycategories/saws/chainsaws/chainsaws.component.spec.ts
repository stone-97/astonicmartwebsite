import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainsawsComponent } from './chainsaws.component';

describe('ChainsawsComponent', () => {
  let component: ChainsawsComponent;
  let fixture: ComponentFixture<ChainsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
