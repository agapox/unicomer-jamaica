import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { countriesData, countriesCities } from './country-data';
import { professions } from './professions';

@Component({
  selector: 'app-new-costumer-form',
  templateUrl: './new-costumer-form.component.html',
  styleUrls: ['./new-costumer-form.component.scss']
})
export class NewCostumerFormComponent implements OnInit {

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

  constructor() { }

  getCountriesData() {
    for (let country of countriesData) {
      this.countries.push({
        name: country.name,
        code: country.code,
        cities: countriesCities[country.name]
      })
    }
  }

  ngOnInit(): void {
    this.getCountriesData();
    console.log(this.countries[1])
  }

  onSelectChange(event: any) {
    this.selectedCountry = event.value
  }

}
