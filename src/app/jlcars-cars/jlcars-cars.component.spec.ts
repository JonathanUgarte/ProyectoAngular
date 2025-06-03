import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlcarsCarsComponent } from './jlcars-cars.component';

describe('JlcarsCarsComponent', () => {
  let component: JlcarsCarsComponent;
  let fixture: ComponentFixture<JlcarsCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JlcarsCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JlcarsCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
