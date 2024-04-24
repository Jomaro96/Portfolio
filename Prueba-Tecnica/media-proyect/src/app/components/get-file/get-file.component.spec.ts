import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFileComponent } from './get-file.component';

describe('GetFileComponent', () => {
  let component: GetFileComponent;
  let fixture: ComponentFixture<GetFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
