import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuButtonComponent } from './order-menu-button.component';

describe('OrderMenuButtonComponent', () => {
  let component: OrderMenuButtonComponent;
  let fixture: ComponentFixture<OrderMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
