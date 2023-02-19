import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowButtonComponent } from './shadow-button.component';

describe('ShadowButtonComponent', () => {
  let component: ShadowButtonComponent;
  let fixture: ComponentFixture<ShadowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
