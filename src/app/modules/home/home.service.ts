import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {ApiService} from 'app/core/services/api.service';
import {Customer} from './model/customer';


@Injectable()
export class HomeService {

  private apiPath = 'customers';

  /**
   * @param {ApiService} api
   */
  constructor(private api: ApiService) {
  }

  /**
   *
   * @returns {Observable<any>}
   */
  public getCustomers(): Observable<any> {
    return Observable.create(observer => {
      this.api.get(this.apiPath).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }

  public getCustomerById(customer: Customer) {

    return Observable.create(observer => {
      this.api.get(this.apiPath + '/' + customer.id).subscribe(result => {
        console.log(result);
        observer.next(result);
      }, err => observer.error(err));
    });
  }


  public incrementPage(page: number) {
    return ++page;
  }

  public saveCustomer(customer: Customer) {

    return Observable.create(observer => {
      this.api.post(this.apiPath, customer).subscribe(
        data => {
          observer.next(data);
        }, err => observer.error(err));
    });
  }

  public editCustomer(customer: Customer) {

    return Observable.create(observer => {
      this.api.put(this.apiPath + '/' + customer.id, customer).subscribe(
        data => {
          observer.next(data);
        }, err => observer.error(err));
    });
  }

  public deleteCustomer(customerId: number) {

    const path = this.apiPath + '/' + customerId;

    return Observable.create(observer => {
      this.api.delete(path).subscribe(data => {
          observer.next(data);
        }, err => observer.error(err));
    });
  }


  /**
   *
   * @param {number} page
   * @param {number} count
   * @returns {Observable<any>}
   */
  public getCustomersByPageAndCount(page: number, count: number): Observable<any> {

    return Observable.create(observer => {
      this.api.get(this.apiPath + '?page=' + this.incrementPage(page) + '&count=' + count).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }
}
