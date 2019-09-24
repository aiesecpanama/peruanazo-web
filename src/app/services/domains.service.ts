import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

	constructor() { }

	getWorkExperienceDomainsGE(){
		return [
			{ id: '0', name: 'No tengo' },
			{ id: '1', name: 'Menos de 3 meses' },
			{ id: '2', name: 'Menos de 6 meses' },
			{ id: '3', name: 'Más de 6 meses' }
		];
	}

	getWorkExperienceDomainsGT(){
		return [
			{ id: '0', name: 'No tengo' },
			{ id: '1', name: 'Más de 6 meses' },
			{ id: '2', name: 'Más de 1 año' },
		];
	}

	getTravelDomains(){
		return [
			{ id: '0', name: 'Lo antes posible' },
			{ id: '1', name: 'Dentro de 3 meses' },
			{ id: '2', name: 'En el próximo semestre' },
			{ id: '3', name: 'Sólo quiero información' }
		];
	}


	getReferralTypes(){
		return [
      { id : 1, value: 'Facebook' },
			{ id : 2, value: 'Instagram' },
			{ id : 3, value: 'Referidos de amigos' },
			{ id : 4, value: 'Stand/Evento en mi Universidad' },
			{ id : 5, value: 'Publicidad Visual en mi Universidad' },
      { id : 6, value: 'Saloneo'}
      { id : 7, value: 'Medios de comunicación'}
      { id : 8, value: 'Mail'}
      { id : 9, value: 'Search Engine'}
      { id : 10, value: 'Twitter'}
      { id : 11, value: 'WeChat'}
			{ id : 12, value: 'Otros' }
		];
	}

	getScholarityDomains(){
		return [
			{ id: '0', name: 'Primaria completa' },
			{ id: '1', name: 'Secundaria completa' },
			{ id: '2', name: 'Estudiante de pregrado' },
			{ id: '3', name: 'Universidad Completa' },
			{ id: '4', name: 'Instituto Técnico Completo' },
			{ id: '5', name: 'Estudiante de Posgrado' }
		];
	}

  getCities(department){
  	return [
			{ name : 'Bocas del Toro', department: 'Bocas del Toro' },
			{ name : 'Chiriquí', department: 'Chiriquí' },
			{ name : 'Coclé', department: 'Coclé' },
			{ name : 'Colón', department: 'Colón' },
			{ name : 'Darién', department: 'Darién' },
			{ name : 'Emberá-Wounaan', department: 'Emberá-Wounaan' },
			{ name : 'Guna Yala', department: 'Guna Yala' },
			{ name : 'Guna de Madugandí', department: 'Guna de Madugandí' },
			{ name : 'Guna de Wargandí', department: 'Guna de Wargandí' },
			{ name : 'Herrera', department: 'Herrera' },
			{ name : 'Los Santos', department: 'Los Santos' },
			{ name : 'Ngäbe-Buglé', department: 'Ngäbe-Buglé' },
			{ name : 'Panamá (ciudad)', department: 'Panamá' },
			{ name : 'Panamá Oeste', department: 'Panamá' },
			{ name : 'Veraguas', department: 'Veraguas' }

  	].filter(city => city.department == department.name);
  }

  getDepartments(){
  	return [
      { name : 'Bocas del Toro' },
			{ name : 'Chiriquí' },
			{ name : 'Coclé' },
			{ name : 'Colón' },
			{ name : 'Darién' },
			{ name : 'Emberá-Wounaan' },
			{ name : 'Guna Yala' },
			{ name : 'Guna de Madugandí' },
			{ name : 'Guna de Wargandí' },
			{ name : 'Herrera' },
			{ name : 'Los Santos' },
			{ name : 'Ngäbe-Buglé' },
			{ name : 'Panamá (ciudad)' },
			{ name : 'Panamá Oeste' },
			{ name : 'Veraguas' }
	  ];
  }

  getReasonsOptionsGV(){
  	return [
  		{
  			value: 'Desarrollo personal y profesional',
  			id: 0
  		},
  		{
  			value: 'Viajar y conocer nuevas culturas',
  			id: 1
  		},
  		{
  			value: 'Impacto social',
  			id: 2
  		},
  		{
  			value: 'Otra',
  			id: 3
  		}
  	];
  };

  getReasonsOptionsGE(){
  	return [
  		{
  			value: 'Mejorar mis oportunidades de empleo',
  			id: 0
  		},
  		{
  			value: 'Viajar y conocer nuevas culturas',
  			id: 1
  		},
  		{
  			value: 'Internacionalizar mis conocimientos',
  			id: 2
  		},
  		{
  			value: 'Otra',
  			id: 3
  		}
  	];
  };

  getReasonsOptionsGT(){
  	return [
  		{
  			value: 'Tener mejores oportunidades de vida',
  			id: 0
  		},
  		{
  			value: 'Ampliar mis horizontes professionales',
  			id: 1
  		},
  		{
  			value: 'Viajar y hacer networking professional',
  			id: 2
  		},
  		{
  			value: 'Otra',
  			id: 3
  		}
  	];
  };
}
