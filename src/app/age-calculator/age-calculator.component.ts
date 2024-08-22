import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.css'
})
export class AgeCalculatorComponent {
  day: number | null = null;
  month: number | null = null;
  year: number | null = null;
  age: number | null = null;
  months: number = 0;
  days: number = 0;

  calculateAge() {
    if (!this.day || !this.month || !this.year) {
      return;
    }

    const today = new Date();
    const birthDate = new Date(this.year, this.month - 1, this.day);

    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += prevMonth;
    }

    if (months < 0) {
      age -= 1;
      months += 12;
    }

    this.age = age;
    this.months = months;
    this.days = days;
  }
}