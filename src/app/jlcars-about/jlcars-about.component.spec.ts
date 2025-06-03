import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlcarsAboutComponent } from './jlcars-about.component';

describe('JlcarsAboutComponent', () => {
  let component: JlcarsAboutComponent;
  let fixture: ComponentFixture<JlcarsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JlcarsAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JlcarsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
