import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gv-thank-you',
  templateUrl: './form-gv-thank-you.component.html',
  styleUrls: ['./form-gv-thank-you.component.scss']
})
export class FormGvThankYouComponent implements OnInit {
  window: any = window;
  constructor(
    public router: Router
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAiesec() {
    window.open("https://aiesec.org.pa/", "_blank");
  }

  goToBlog() {
    window.open("https://blog.aiesec.org.pa/", "_blank");
  }

  goToGvBrasil(){
    window.open("https://aiesec.org/search?type=1&home_mcs=1606", "_blank");
  }

  goToGvColombia(){
    window.open("https://aiesec.org/search?type=1&home_mcs=1551", "_blank");
  }

  goToGvMexico(){
    window.open("https://aiesec.org/search?type=1&home_mcs=1589", "_blank");
  }
}
