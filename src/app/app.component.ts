import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from './customer-model';
import { CustomerService } from './customer.service';
import {  ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';
  public customers!: Observable<Customer[]>;
  form: FormGroup = new FormGroup({
    minsales: new FormControl(0, [Validators.required]),
    mindate: new FormControl( new Date(), [Validators.required]),
    maxdate: new FormControl( new Date(), [Validators.required]),
  }); 

  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'firstName'},
    { field: 'middleName' },
    { field: 'lastName' },
    { field: 'orderDate' },
    { field: 'orderAmount' },

  ];
  
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    flex: 1,

  };

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   minsales: [null, [Validators.required]],
    //   mindate: [null, [Validators.required]],
    //   maxdate: [null, [Validators.required]]
    // });
  }
  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {
  }
  onSubmit() {
    const data = this.form.value;
    this.customers = this.customerService.getCustomer(data.minsales, data.mindate, data.maxdate);
  }
}
