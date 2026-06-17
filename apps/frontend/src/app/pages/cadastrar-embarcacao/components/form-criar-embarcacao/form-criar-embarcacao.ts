import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button';
import { InputComponent } from '@components/input';
import { LabelComponent } from '@components/label';
import { SelectComponent, SelectOption } from '@components/select';
import { FUEL_TYPES, FUEL_TYPES_NAMES, VESSEL_TYPES } from '@shared/ships/constants';
import { LucideAngularModule, Save, Ship } from 'lucide-angular';

@Component({
  selector: 'app-form-criar-embarcacao',
  templateUrl: './form-criar-embarcacao.html',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    LabelComponent,
    SelectComponent,
    ButtonComponent,
    LucideAngularModule,
  ],
})
export class FormCriarEmbarcacao {
  public vesselTypeOptions: SelectOption[] = VESSEL_TYPES.map((vesselType) => ({
    value: vesselType,
    label: vesselType,
  }));
  public vesselFuelTypesOptions: SelectOption[] = FUEL_TYPES_NAMES.map((fuelName, index) => ({
    label: fuelName,
    value: FUEL_TYPES[index],
  }));
  public readonly SaveIcon = Save;
  public readonly ShipIcon = Ship;
  constructor(private readonly formBuilder: FormBuilder) {}
}
