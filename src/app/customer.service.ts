import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiurl = "https://customer20220721213153.azurewebsites.net";
  constructor(private http: HttpClient) { }

  getCustomer(minAmount: number, minDate: Date, maxDate: Date) {
    return this.http.get<Customer[]>(`${this.apiurl}/customer/${minAmount}/${minDate}/${maxDate}`);
  }
}
