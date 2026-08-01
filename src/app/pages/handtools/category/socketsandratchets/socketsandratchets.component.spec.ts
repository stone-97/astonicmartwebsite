import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketsandratchetsComponent } from './socketsandratchets.component';

describe('SocketsandratchetsComponent', () => {
  let component: SocketsandratchetsComponent;
  let fixture: ComponentFixture<SocketsandratchetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocketsandratchetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocketsandratchetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
