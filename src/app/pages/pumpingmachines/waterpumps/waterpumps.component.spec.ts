import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterpumpsComponent } from './waterpumps.component';

describe('WaterpumpsComponent', () => {
  let component: WaterpumpsComponent;
  let fixture: ComponentFixture<WaterpumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterpumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterpumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
