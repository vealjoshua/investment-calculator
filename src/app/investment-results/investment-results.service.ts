import { Injectable } from '@angular/core';
import { AnnualData, InvestmentInput } from './investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  // private initialInvestment: number
  // private annualInvestment: number
  // private expectedReturn: number
  // private duration: number
  private annualData: AnnualData[] = [];

  calculateInvestmentResults(investmentInput: InvestmentInput) {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      investmentInput;
    this.annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

  getAnnualData() {
    return this.annualData;
  }
}
