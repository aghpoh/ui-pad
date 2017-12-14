import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {HomeService} from '../home.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.scss'],
  providers: [HomeService]
})
export class HomePageComponent implements AfterViewInit {

  displayedColumns = ['id', 'name', 'idnp', 'type', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  customers: any;
  dataSource = new MatTableDataSource<Element>(this.customers);

  constructor(private router: Router, private homeService: HomeService, private http: HttpClient) {
    this.customers = this.homeService.getCustomers().subscribe(
      data => {
        this.customers = data;
        this.dataSource.data = this.customers;
      });
  }

  ngAfterViewInit(): void {

    console.log(this.customers);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onEditNavigate(id: number) {
    this.router.navigateByUrl('/add/' + id);
  }

  onDelete(id: number) {
    this.homeService.deleteCustomer(id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  addNew() {
    this.router.navigateByUrl('/add');
  }
}

export interface Element {
  id: number;
  name: string;
  idnp: string;
  type: string;
  accounts: any;
}
