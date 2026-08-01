import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnapsacksprayersComponent } from './knapsacksprayers.component';

describe('KnapsacksprayersComponent', () => {
  let component: KnapsacksprayersComponent;
  let fixture: ComponentFixture<KnapsacksprayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnapsacksprayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnapsacksprayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
