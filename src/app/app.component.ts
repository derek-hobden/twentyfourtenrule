import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  monthlySalary = 0;
  monthlyPayments = 0;
  monthlyPetrol = 0;
  monthlyTollFees = 0;
  annualServices = 0;
  annualInsurance = 0;

  onSalaryKeyup(e) {
    this.monthlySalary = parseInt(e.target.value, 10) || 0;
  }

  onMonthlyPaymentKeyup(e) {
    this.monthlyPayments = parseInt(e.target.value, 10) || 0;
  }

  onMonthlyPetrolKeyup(e) {
    this.monthlyPetrol = parseInt(e.target.value, 10) || 0;
  }

  onMonthlyTollFeesKeyup(e) {
    this.monthlyTollFees = parseInt(e.target.value, 10) || 0;
  }

  onAnnualServicesKeyup(e) {
    this.annualServices = parseInt(e.target.value, 10) || 0;
  }

  onAnnualInsuranceKeyup(e) {
    this.annualInsurance = parseInt(e.target.value, 10) || 0;
  }

  get limit(): number {
    return Math.round(this.monthlySalary / 10);
  }

  get totalMonthlyFees(): number {
    return Math.round(
      this.monthlyPayments +
      this.monthlyPetrol +
      this.monthlyTollFees +
      (this.annualServices / 12) +
      (this.annualInsurance / 12)
    );
  }
}
