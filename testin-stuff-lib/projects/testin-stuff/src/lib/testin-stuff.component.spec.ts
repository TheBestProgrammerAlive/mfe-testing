import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinStuffComponent } from './testin-stuff.component';

describe('TestinStuffComponent', () => {
  let component: TestinStuffComponent;
  let fixture: ComponentFixture<TestinStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestinStuffComponent]
    });
    fixture = TestBed.createComponent(TestinStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
