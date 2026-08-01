import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldingladdersComponent } from './foldingladders.component';

describe('FoldingladdersComponent', () => {
  let component: FoldingladdersComponent;
  let fixture: ComponentFixture<FoldingladdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoldingladdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoldingladdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
