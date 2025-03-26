import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SscCglMainsComponent } from './ssc-cgl-mains.component';

describe('SscCglMainsComponent', () => {
  let component: SscCglMainsComponent;
  let fixture: ComponentFixture<SscCglMainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SscCglMainsComponent]
    });
    fixture = TestBed.createComponent(SscCglMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
