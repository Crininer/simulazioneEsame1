import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigListElementComponent } from './big-list-element.component';

describe('BigListElementComponent', () => {
  let component: BigListElementComponent;
  let fixture: ComponentFixture<BigListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
