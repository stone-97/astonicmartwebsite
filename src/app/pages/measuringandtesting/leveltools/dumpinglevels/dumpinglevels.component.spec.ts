import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpinglevelsComponent } from './dumpinglevels.component';

describe('DumpinglevelsComponent', () => {
  let component: DumpinglevelsComponent;
  let fixture: ComponentFixture<DumpinglevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumpinglevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumpinglevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
