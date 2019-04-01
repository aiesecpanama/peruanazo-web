import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import 'hammerjs';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
})
export class LandingFooterComponent implements OnInit {

  partners: any;
  sliderPosition: number = 0;
  timer: any;
  window: any = window;

  navTo(partnerPage) {
    window.open(partnerPage, '_blank');
  }

  constructor(private router: Router) {
    this.partners = [];
    this.window.Modernizr && this.window.Modernizr.on('webp', (result) => {
      let webpSupport = false;

      if (result) {
        webpSupport = result.lossless;
      }

      this.partners = [
        {
          title: 'ADEX',
          img: webpSupport ? '../../assets/images/partners/adex.webp' : '../../assets/images/partners/adex.jpg',
          site: 'http://www.adexperu.org.pe/',
        },
        {
          title: 'CISCO',
          img: webpSupport ? '../../assets/images/partners/cisco.webp' : '../../assets/images/partners/cisco.jpg',
          site: 'https://www.cisco.com/',
        },
        {
          title: 'COCA-COLA',
          img: webpSupport ? '../../assets/images/partners/cocacola.webp' : '../../assets/images/partners/cocacola.jpg',
          site: 'http://www.cocacolalatinamerica.com/es/pe/home/',
        },
        {
          title: 'DIRECTV',
          img: webpSupport ? '../../assets/images/partners/directv.webp' : '../../assets/images/partners/directv.jpg',
          site: 'https://www.directv.com.pe/',
        },
        {
          title: 'FALA-BEM',
          img: webpSupport ? '../../assets/images/partners/falabem.webp' : '../../assets/images/partners/falabem.jpg',
          site: 'https://www.facebook.com/falabemperu/',

        },
        {
          title: 'G4S',
          img: webpSupport ? '../../assets/images/partners/g4s.webp' : '../../assets/images/partners/g4s.jpg',
          site: 'http://www.g4s.com.pe/',
        },
        {
          title: 'Instituto Peruano Chino',
          img: webpSupport ? '../../assets/images/partners/ipch.webp' : '../../assets/images/partners/ipch.jpg',
          site: 'https://institutoperuanochino.com/',

        },
        {
          title: 'Junior Achievement',
          img: webpSupport ? '../../assets/images/partners/japeru.webp' : '../../assets/images/partners/japeru.jpg',
          site: 'http://jawperu.org/', 

        },
        {
          title: 'Universidad La Salle',
          img: webpSupport ? '../../assets/images/partners/lasalle.webp' : '../../assets/images/partners/lasalle.jpg',
          site: 'https://www.ulasalle.edu.pe/',

        },
        {
          title: 'Universidad de Ciencias y Artes de América Latina',
          img: webpSupport ? '../../assets/images/partners/ucal.webp' : '../../assets/images/partners/ucal.jpg',
          site: 'https://www.ucal.edu.pe/',
        },
        {
          title: 'Universidad Católica Santo Toribio de Mogrovejo',
          img: webpSupport ? '../../assets/images/partners/usat.webp' : '../../assets/images/partners/usat.jpg',
          site: 'www.usat.edu.pe/',

        },
        {
          title: 'MEXICHEM',
          img: webpSupport ? '../../assets/images/partners/mexichem.webp' : '../../assets/images/partners/mexichem.jpg',
          site: 'http://www.mexichem.com/',

        },
        {
          title: 'Municipalidad de Lima',
          img: webpSupport ? '../../assets/images/partners/muni.webp' : '../../assets/images/partners/muni.jpg',
          site: 'https://munibecas.org/',

        },
        {
          title: 'NESTLE',
          img: webpSupport ? '../../assets/images/partners/nestle.webp' : '../../assets/images/partners/nestle.jpg',
          site: 'https://www.nestle.com.pe/',
        },
        {
          title: 'Instituto Neumann',
          img: webpSupport ? '../../assets/images/partners/neumann.webp' : '../../assets/images/partners/neumann.jpg',
          site: 'https://www.neumann.edu.pe/',
        },
        {
          title: 'TASA',
          img: webpSupport ? '../../assets/images/partners/tasa.webp' : '../../assets/images/partners/tasa.jpg',
          site: 'https://www.tasa.com.pe/',
        },
        {
          title: 'Instituto Toulouse Lautrec',
          img: webpSupport ? '../../assets/images/partners/tls.webp' : '../../assets/images/partners/tls.jpg',
          site: 'http://www.tls.edu.pe/',
        },
        {
          title: 'TUENTI',
          img: webpSupport ? '../../assets/images/partners/tuenti.webp' : '../../assets/images/partners/tuenti.jpg',
          site: 'https://www.tuenti.pe/',
        },
        {
          title: 'Universidad Andina Néstor Cáceres Velasquez',
          img: webpSupport ? '../../assets/images/partners/uancv.webp' : '../../assets/images/partners/uancv.jpg',
          site: 'https://uancv.edu.pe/',
        },
        {
          title: 'Universidad Alas Peruanas',
          img: webpSupport ? '../../assets/images/partners/uap.webp' : '../../assets/images/partners/uap.jpg',
          site: 'https://uap.edu.pe/',
        },
        {
          title: 'Universidad Nacional Hermilio Valdizán',
          img: webpSupport ? '../../assets/images/partners/unheval.webp' : '../../assets/images/partners/unheval.jpg',
          site: 'https://www.unheval.edu.pe/portal/',
        },
        {
          title: 'Universidad Femenina del Sagrado Corazón',
          img: webpSupport ? '../../assets/images/partners/unife.webp' : '../../assets/images/partners/unife.jpg',
          site: 'www.unife.edu.pe/',
        },
        {
          title: 'Universidad Tecnológica del Perú',
          img: webpSupport ? '../../assets/images/partners/unitec.webp' : '../../assets/images/partners/unitec.jpg',
          site: 'https://www.utp.edu.pe/arequipa/',
        },
        {
          title: 'Universidad Científica del Sur',
          img: webpSupport ? '../../assets/images/partners/cientifica.webp' : '../../assets/images/partners/cientifica.jpg',
          site: 'https://www.cientifica.edu.pe/',
        },
        {
          title: 'Universidad Continental',
          img: webpSupport ? '../../assets/images/partners/continental.webp' : '../../assets/images/partners/continental.jpg',
          site: 'https://ucontinental.edu.pe/',
        },
        {
          title: 'Universidad Privada César Vallejo',
          img: webpSupport ? '../../assets/images/partners/cesarvallejo.webp' : '../../assets/images/partners/cesarvallejo.jpg',
          site: 'https://www.ucv.edu.pe/',
        },
        {
          title: 'Universidad Nacional San Luis Gonzaga',
          img: webpSupport ? '../../assets/images/partners/sanluisica.webp' : '../../assets/images/partners/sanluisica.jpg',
          site: 'http://www.unica.edu.pe/',
        },
        {
          title: 'Universidad Nacional Mayor San Marcos',
          img: webpSupport ? '../../assets/images/partners/unmsm.webp' : '../../assets/images/partners/unmsm.jpg',
          site: 'http://www.unmsm.edu.pe',
        },
        {
          title: 'Universidad Privada Antenor Orrego',
          img: webpSupport ? '../../assets/images/partners/upao.webp' : '../../assets/images/partners/upao.jpg',
          site: 'http://www.upao.edu.pe/',
        },
        {
          title: 'Universidad Privada del Norte',
          img: webpSupport ? '../../assets/images/partners/upn.webp' : '../../assets/images/partners/upn.jpg',
          site: 'https://www.upn.edu.pe/es',
        },
        {
          title: 'Universidad San Ignacio de Loyola',
          img: webpSupport ? '../../assets/images/partners/usil.webp' : '../../assets/images/partners/usil.jpg',
          site: 'https://www.usil.edu.pe/',
        },
        {
          title: 'Universidad Privada de Tacna',
          img: webpSupport ? '../../assets/images/partners/tacna.webp' : '../../assets/images/partners/tacna.jpg',
          site: 'www.upt.edu.pe/',
        }
      ];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.sliderAnimation();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  swipe(side: string) {
    side == 'left' ? this.moveRight() : this.moveLeft();
  }

  moveLeft() {
    if ((this.sliderPosition - 100) < 0 && (window.innerWidth >= 990)) {
      this.sliderPosition = 300;
    }
    else if ((this.sliderPosition - 100) < 0 && (window.innerWidth < 990)) {
      this.sliderPosition = 500;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
    this.sliderAnimation();
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 300 && (window.innerWidth >= 990)) {
      this.sliderPosition = 0; 
    }
    else if ((this.sliderPosition + 100) > 500 && (window.innerWidth < 990)) {
      this.sliderPosition = 0;
    }
    else {
      this.sliderPosition += 100
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
    this.sliderAnimation()
  }

  sliderAnimation() {
    this.stopAnimation();
    this.timer = setInterval(() => {
      this.moveRight()
    }, 10000);
  }

  stopAnimation() {
    clearInterval(this.timer)
  }

  openUrl(site) {
    window.open(site);
  }

  goToGv() {
    this.router.navigate(['/voluntario-global']);
  }

  goToGe() {
    this.router.navigate(['/emprendedor-global']);
  }

  goToGt() {
    this.router.navigate(['/talento-global']);
  }
}
