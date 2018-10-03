import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGetParamComponent } from './show-get-param.component';

describe('ShowGetParamComponent', () => {
  let component: ShowGetParamComponent;
  let fixture: ComponentFixture<ShowGetParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGetParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGetParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
