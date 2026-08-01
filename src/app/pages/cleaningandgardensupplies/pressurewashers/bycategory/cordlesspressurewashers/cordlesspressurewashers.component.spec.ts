import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlesspressurewashersComponent } from './cordlesspressurewashers.component';

describe('CordlesspressurewashersComponent', () => {
  let component: CordlesspressurewashersComponent;
  let fixture: ComponentFixture<CordlesspressurewashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlesspressurewashersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlesspressurewashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
