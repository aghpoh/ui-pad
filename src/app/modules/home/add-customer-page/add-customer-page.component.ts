import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {BaseRequestOptions, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html'
})
export class AddCustomerPageComponent implements OnInit {

  customer: Customer;

  constructor(private http: HttpClient, private router: Router) {
    this.customer = new Customer();
  }

  ngOnInit() {
  }

  onSave(customer: Customer) {
    console.log(customer);
    this.http.post('http://localhost:8765/api/customers', customer).subscribe(
      data => {
        this.router.navigateByUrl('/');
      }
    );
  }
}

export class Customer {
  public id: number;
  public name: string;
  public idnp: string;
  public type: string;

  constructor() {
  }
}
