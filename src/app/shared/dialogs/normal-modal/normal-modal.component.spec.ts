import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalModalComponent } from './normal-modal.component';

describe('NormalModalComponent', () => {
  let component: NormalModalComponent;
  let fixture: ComponentFixture<NormalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
