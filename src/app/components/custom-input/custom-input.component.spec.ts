import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomInputComponent } from './custom-input.component';
import { first } from 'rxjs';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  let inputElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputElement = fixture.debugElement.query(By.css('[data-testid="custom-input-component"]')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders default values', () => {
    expect(inputElement.placeholder).toBe('');
    expect(inputElement.disabled).toBeTruthy();
  });

  it('renders disabled input', () => {
    component.disabled = true;
    fixture.detectChanges();

    expect(inputElement.disabled).toBeTruthy();
  });

  it('should type  numberand not accept text', () => {
    component.type = 'number';
    fixture.detectChanges();

    inputElement.value = "Testing string value";
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputElement.value).toBe("");
  });

  it('should type number and accept numbers', () => {
    component.type = 'number';
    fixture.detectChanges();

    inputElement.value = 1550;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.value).toBe("1550");
  });

  it('renders correctly with default value', () => {
    component.value = 'Testing value';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(inputElement.value).toBe('Testing value');
    });
  });

  it('should emit a change event', () => {
    let valueEmitted: any | undefined;

    component.valueChange.pipe(first()).subscribe((value: string) => {
      valueEmitted = value;
    });

    inputElement.value = 'Testing value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(valueEmitted).toBe('Testing value');
  });

});