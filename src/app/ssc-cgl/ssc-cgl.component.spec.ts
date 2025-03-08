import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SscCglComponent } from './ssc-cgl.component';

describe('SscCglComponent', () => {
  let component: SscCglComponent;
  let fixture: ComponentFixture<SscCglComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SscCglComponent]
    });
    fixture = TestBed.createComponent(SscCglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
