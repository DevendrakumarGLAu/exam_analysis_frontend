import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrbConstableComponent } from './rrb-constable.component';

describe('RrbConstableComponent', () => {
  let component: RrbConstableComponent;
  let fixture: ComponentFixture<RrbConstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrbConstableComponent]
    });
    fixture = TestBed.createComponent(RrbConstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
