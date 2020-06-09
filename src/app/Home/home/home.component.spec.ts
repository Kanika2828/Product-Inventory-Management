import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../../pipes/search-filter.pipe';
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from '../../../services/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>
  let el: HTMLElement;
  let id: Number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SearchFilterPipe ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have view method', () => {
    expect(component.view).toBeTruthy();
  })
});
