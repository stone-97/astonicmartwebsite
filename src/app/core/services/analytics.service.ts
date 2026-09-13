import { Injectable } from '@angular/core';

declare function gtag(...args: any[]): void;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  event(eventName: string, eventParams: any = {}): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams);
    }
  }

  purchase(
    transactionId: string,
    value: number,
    items: any[]
  ): void {
    this.event('purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'NGN',
      items: items
    });
  }

  generateLead(value?: number): void {
    this.event('generate_lead', {
      currency: 'NGN',
      ...(value !== undefined ? { value } : {})
    });
  }
}