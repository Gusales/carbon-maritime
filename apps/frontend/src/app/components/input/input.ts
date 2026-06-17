import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.html',
    imports: [ReactiveFormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        }
    ]
})
export class InputComponent implements ControlValueAccessor {
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type: 'text' | 'number' = 'text';

    public value: string | number = '';
    public isDisabled: boolean = false;

    private onChange = (_: any) => { };
    private onTouched = () => { };

    onInput(event: Event): void {
        const val = (event.target as HTMLInputElement).value;
        this.value = this.type === 'number' ? Number(val) : val;
        this.onChange(this.value);
    }

    onBlur(): void {
        this.onTouched();
    }

    writeValue(val: any): void {
        this.value = val ?? '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}