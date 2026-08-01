import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactorsComponent } from './compactors.component';

describe('CompactorsComponent', () => {
  let component: CompactorsComponent;
  let fixture: ComponentFixture<CompactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompactorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
