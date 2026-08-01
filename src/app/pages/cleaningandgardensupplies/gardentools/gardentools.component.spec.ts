import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardentoolsComponent } from './gardentools.component';

describe('GardentoolsComponent', () => {
  let component: GardentoolsComponent;
  let fixture: ComponentFixture<GardentoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardentoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardentoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
