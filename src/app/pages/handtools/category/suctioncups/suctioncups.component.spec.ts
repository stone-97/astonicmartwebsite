import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuctioncupsComponent } from './suctioncups.component';

describe('SuctioncupsComponent', () => {
  let component: SuctioncupsComponent;
  let fixture: ComponentFixture<SuctioncupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuctioncupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuctioncupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
