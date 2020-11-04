import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiveComponent } from './productive.component';

describe('ProductiveComponent', () => {
  let component: ProductiveComponent;
  let fixture: ComponentFixture<ProductiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
