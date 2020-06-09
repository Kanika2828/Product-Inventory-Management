import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartComponent } from './piechart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartComponent ],
      imports: [ChartsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getAllProduct method', () => {
    expect(component.getAllProduct).toBeTruthy();
  });

  it('should have onChartClick method', () => {
    expect(component.onChartClick).toBeTruthy();
  })
});
