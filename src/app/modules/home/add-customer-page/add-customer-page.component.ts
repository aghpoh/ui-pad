import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html'
})
export class AddCustomerPageComponent implements OnInit {

  customer: Customer;
  editStatus = false;

  constructor(private homeService: HomeService, private route: Router, private router: ActivatedRoute) {
    this.customer = new Customer();

    this.router.params.subscribe(params => {
      this.customer.id = params['id'];
    });


    if (this.customer.id != null) {
      this.editStatus = true;
      this.homeService.getCustomerById(this.customer).subscribe(
        result => {
          this.customer = result;
        }
      );
    }
  }

  ngOnInit() {
  }

  onSave(customer: Customer) {
    this.homeService.saveCustomer(customer).subscribe(result => {
        this.route.navigateByUrl('/');
      }
    );
  }

  onEdit(customer: Customer) {
    this.homeService.editCustomer(customer).subscribe(result => {
        this.route.navigateByUrl('/');
      }
    );
  }
}

