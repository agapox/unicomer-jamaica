import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { countriesData, countriesCities } from './country-data';
import { professions } from './professions';

@Component({
  selector: 'app-new-costumer-form',
  templateUrl: './new-costumer-form.component.html',
  styleUrls: ['./new-costumer-form.component.scss']
})
export class NewCostumerFormComponent implements OnInit {

  registeredUsers: any = [];

  phoneValidations: Validators = [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.min(10000),
    Validators.maxLength(999999999),
  ]

  newCostumerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
    country: ['', Validators.required],
    cellphone: ['', this.phoneValidations],
    telephone: ['', this.phoneValidations],
    city: [''],
    address: ['', Validators.required],
    address2: [''],
    profession: ['', Validators.required],
    income: ['', Validators.required],
  })

  incomeRange: {
    value: number,
    text: string
  }[] = [
    { value: 0, text: 'less than $10.000' },
    { value: 1, text: 'from $10.000 to $25.000' },
    { value: 2, text: 'from $25.000 to $50.000' },
    { value: 3, text: 'from $50.000 to $75.000' },
    { value: 4, text: 'more than $75.000' },
  ]

  professions = professions;

  genders: string[] = [
    'Male',
    'Female',
    'Other'
  ]

  countries: {
    code: string,
    name: string,
    cities: string[] | null
  }[] = [];

  selectedCountry: {
    code: string,
    name: string
    cities: string[] | null
  } | null = null

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCountriesData();
  }

  getCountriesData() {
    for (let country of countriesData) {
      this.countries.push({
        name: country.name,
        code: country.code,
        cities: countriesCities[country.name]
      })
    }
  }

  onSelectChange(event: any) {
    this.selectedCountry = event.value
  }

  onSubmit() {
    this.registeredUsers.push(this.newCostumerForm.value)
    console.log(this.registeredUsers)
    this.newCostumerForm.reset();
  }

}
