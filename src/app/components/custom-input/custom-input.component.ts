import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Optional, Output, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent implements ControlValueAccessor, OnChanges {

  @Input() placeholder: string = '';
  @Input() disabled = true;
  @Input() type: string = 'text';

  onChange = (value: string) => {};
  onTouch = () => {};

  @Input() value: any = '';
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    if(ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['disabled']) {
      this.disabled = changes['disabled'].currentValue || this.disabled
        ? true
        : false;
    }
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  onDisabledChange(isDisabled: boolean): void {
    this.setDisabledState(isDisabled);
  }

  writeValue(value: string): void {
    this.valueChange.emit(value);
    this.onChange(value);
    this.value = value;
  }

}

