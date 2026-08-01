import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketscalesComponent } from './pocketscales.component';

describe('PocketscalesComponent', () => {
  let component: PocketscalesComponent;
  let fixture: ComponentFixture<PocketscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocketscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocketscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
