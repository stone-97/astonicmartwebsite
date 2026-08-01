import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaulingandpufoamgunsComponent } from './caulkingandpufoamguns.component';

describe('CaulkingandpufoamgunsComponent', () => {
  let component: CaulkingandpufoamgunsComponent;
  let fixture: ComponentFixture<CaulkingandpufoamgunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaulkingandpufoamgunsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CaulkingandpufoamgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
