import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainblocksandhoistsComponent } from './chainblocksandhoists.component';

describe('ChainblocksandhoistsComponent', () => {
  let component: ChainblocksandhoistsComponent;
  let fixture: ComponentFixture<ChainblocksandhoistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainblocksandhoistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainblocksandhoistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
