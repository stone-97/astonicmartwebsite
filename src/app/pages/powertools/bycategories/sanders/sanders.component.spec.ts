import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandersComponent } from './sanders.component';

describe('SandersComponent', () => {
  let component: SandersComponent;
  let fixture: ComponentFixture<SandersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SandersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
