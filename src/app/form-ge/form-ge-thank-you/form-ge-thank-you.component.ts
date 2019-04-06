
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-ge-thank-you',
  templateUrl: './form-ge-thank-you.component.html',
  styleUrls: ['./form-ge-thank-you.component.scss']
})
export class FormGeThankYouComponent implements OnInit {
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
    window.open("https://aiesec.pe/", "_blank");
  }

  goToBlog() {
    window.open("https://blog.aiesec.pe/", "_blank");
  }

  goToGeArgentina() {
    window.open("https://aiesec.org/search?home_mcs=1535&type=5", "_blank");
  }

  goToGeEgipto() {
    window.open("https://aiesec.org/search?home_mcs=1609&type=5", "_blank");
  }

  goToGeBrasil() {
    window.open("https://aiesec.org/search?home_mcs=1606&type=5", "_blank");
  }

}
