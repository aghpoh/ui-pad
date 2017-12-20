import {Injectable} from '@angular/core';
import {Response, Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService {

  /**
   * @type {string}
   */
  private apiEndpoint = 'http://localhost:8765/api';

  /**
   *
   * @param {} http
   * @param {Router} router
   */
  constructor(private http: HttpClient, private router: Router) {
  }

  /**
   * @param {string} path
   *
   * @returns {Observable<any>}
   */
  public get(path: string): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;
    console.log(endpoint);
    return this.http
      .get(`${endpoint}`)
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public post(path: string, body: any): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;

    return this.http
      .post(`${endpoint}`, body)
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public put(path: string, body: any): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;
    return this.http
      .put(`${endpoint}`, body)
      .catch(this.handleError.bind(this));
  }

  public delete(path: string): Observable<any> {

    console.log('ON DELETE SERVICE API ' + path);

    const endpoint = `${this.apiEndpoint}/${path}`;
    return this.http
      .delete(`${endpoint}`)
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public patch(path: string, body: any): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;

    return this.http
      .patch(`${endpoint}`, body)
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {Response} error
   *
   * @returns {ErrorObservable}
   */
  private handleError(error: any) {
    // const err = error.json();
    //
    // if (error.status === 401) {
    //
    //   localStorage.clear();
    //   this.router.navigate(['login']);
    //
    //   return Observable.throw({
    //     error: 'Credentials are incorrect'
    //   });
    //
    // } else if (error.status === 400) {

    return Observable.throw({
      'error': 'erere'
    });
  }


}
