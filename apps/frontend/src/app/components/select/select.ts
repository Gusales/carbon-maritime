import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
    value: string;
    label: string;
}

@Component({
    selector: 'app-select',
    templateUrl: './select.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        }
    ]
})
export class SelectComponent implements ControlValueAccessor {
    @Input() placeholder: string = 'Selecione uma opção';
    @Input() options: SelectOption[] = [];

    public value: string = '';
    public isDisabled: boolean = false;

    private onChange = (_: any) => { };
    private onTouched = () => { };

    onSelect(event: Event): void {
        this.value = (event.target as HTMLSelectElement).value;
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