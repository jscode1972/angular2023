import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2uiDialogComponent } from './w2ui-dialog.component';

describe('W2uiDialogComponent', () => {
  let component: W2uiDialogComponent;
  let fixture: ComponentFixture<W2uiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2uiDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W2uiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
