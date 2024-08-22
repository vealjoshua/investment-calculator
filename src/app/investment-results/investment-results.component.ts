import { Component, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor, CurrencyPipe, NgIf],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResultsService = inject(InvestmentResultsService);

  get annualData() {
    return this.investmentResultsService.getAnnualData();
  }
}
