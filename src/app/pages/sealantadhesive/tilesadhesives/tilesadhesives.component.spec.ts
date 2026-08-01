import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesadhesivesComponent } from './tilesadhesives.component';

describe('TilesadhesivesComponent', () => {
  let component: TilesadhesivesComponent;
  let fixture: ComponentFixture<TilesadhesivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TilesadhesivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TilesadhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
