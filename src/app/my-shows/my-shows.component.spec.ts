import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShowsComponent } from './my-shows.component';

describe('MyShowsComponent', () => {
  let component: MyShowsComponent;
  let fixture: ComponentFixture<MyShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
