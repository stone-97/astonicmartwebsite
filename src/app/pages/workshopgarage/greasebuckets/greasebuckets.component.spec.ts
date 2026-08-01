import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreasebucketsComponent } from './greasebuckets.component';

describe('GreasebucketsComponent', () => {
  let component: GreasebucketsComponent;
  let fixture: ComponentFixture<GreasebucketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreasebucketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreasebucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
