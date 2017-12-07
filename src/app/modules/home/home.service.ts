import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {ApiService} from 'app/core/services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


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
      this.api.get('customers').subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }

  /**
   *
   * @param {number} id
   * @returns {any}
   */
  public getCustomerById(id: number) {
    return Observable.create(observer => {
      this.api.get(this.apiPath + '/' + id).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });
  }

  public incrementPage(page: number) {
    return ++page;
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


  /**
   * @param {number} id
   *
   * @returns {Observable<any>}
   */
  public deleteCustomer(id: number): Observable<any> {

    return Observable.create(observer => {
      this.api.delete(this.apiPath + '/' + id).subscribe(result => {
        observer.next(result);
      }, err => observer.error(err));
    });

  }
}
