import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsawsComponent } from './bandsaws.component';

describe('BandsawsComponent', () => {
  let component: BandsawsComponent;
  let fixture: ComponentFixture<BandsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
