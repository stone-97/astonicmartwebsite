import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityknivesandbladesComponent } from './utilityknivesandblades.component';

describe('UtilityknivesandbladesComponent', () => {
  let component: UtilityknivesandbladesComponent;
  let fixture: ComponentFixture<UtilityknivesandbladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilityknivesandbladesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UtilityknivesandbladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
