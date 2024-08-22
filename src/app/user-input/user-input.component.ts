import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private investmentResultsService = inject(InvestmentResultsService);
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 14.51;
  duration = 10;

  onSubmit() {
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: Number(this.annualInvestment),
      expectedReturn: Number(this.expectedReturn),
      duration: Number(this.duration),
    });
  }
}
