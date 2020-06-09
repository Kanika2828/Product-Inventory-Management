import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports: [ HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as Features and more details', () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const app= fixture.componentInstance;
    expect(app.title).toEqual('Features and more details');
  })

  it('should render title in h4 tag', () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Features and more details');
  });

  it('should have addToCart method', () => {
    expect(component.addToCart).toBeTruthy();
  })

  it('should have getAllProduct method', () => {
    expect(component.getAllProduct).toBeTruthy();
  })

  it('should have loadProductDetails method', () => {
    expect(component.loadProductDetails).toBeTruthy();
  })
});
