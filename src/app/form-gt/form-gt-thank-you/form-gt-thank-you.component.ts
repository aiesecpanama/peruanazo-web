import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gt-thank-you',
  templateUrl: './form-gt-thank-you.component.html',
  styleUrls: ['./form-gt-thank-you.component.scss']
})
export class FormGtThankYouComponent implements OnInit {
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
    window.open("https://aiesec.pe/blog/", "_blank");
  }

  goToGtBrasil(){
    window.open("https://aiesec.org/search?home_mcs=1606&type=2", "_blank");
  }

  goToGtIndia(){
    window.open("https://aiesec.org/search?home_mcs=1585&type=2", "_blank");
  }

  goToGtPanama(){
    window.open("https://aiesec.org/search?home_mcs=1582&type=2", "_blank");
  }
}
