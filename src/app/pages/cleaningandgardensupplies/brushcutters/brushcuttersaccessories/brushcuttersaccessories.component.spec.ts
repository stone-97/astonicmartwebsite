import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushcuttersaccessoriesComponent } from './brushcuttersaccessoriescomponent';

describe('AccessoriesComponent', () => {
  let component: BrushcuttersaccessoriesComponent;
  let fixture: ComponentFixture<BrushcuttersaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrushcuttersaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrushcuttersaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
