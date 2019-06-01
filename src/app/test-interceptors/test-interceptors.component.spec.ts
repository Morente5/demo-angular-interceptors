import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInterceptorsComponent } from './test-interceptors.component';

describe('TestInterceptorsComponent', () => {
  let component: TestInterceptorsComponent;
  let fixture: ComponentFixture<TestInterceptorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInterceptorsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInterceptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
