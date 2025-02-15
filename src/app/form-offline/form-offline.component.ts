import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-offline',
  templateUrl: './form-offline.component.html',
  styleUrls: ['./form-offline.component.scss']
})
export class FormOfflineComponent implements OnInit {

	user = {
    fullname: '',
    cellphone: '',
    email: '',
    birthdate: '',
    password: '',
    repassword: '',
    local_committee_id: '',
    university_id: '',
    college_course_id: '',
    cellphone_contactable: '',
    scholarity: '',
    program: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    accepted_terms: false
  }

  msgs: Message[] = [];

  placeholderBirthdate: string;

  personalData: boolean = true;
  studyData: boolean = false;
  showGVStep: boolean = false;
  showGTStep: boolean = false;
  showGEStep: boolean = false;

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  matchDate: boolean = true;
  loading: boolean = false;
  step1Form: FormGroup;
  step2Form: FormGroup;
  submittedPersonal: boolean = false;
  submittedStudy: boolean = false;
  completedSignup: boolean = false;

  embeddedForm: boolean = false;

  formToggle : boolean = false;
  universities: any;
  courses: any;
  places: any;

  cellphoneDefaultMask: string = '000 000 0000';
  cellphoneLargerMask: string = '0 000 000 0000';
  cellphoneMask: any;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public urlScrapper: ActivatedRoute,
    public router: Router
  ) {
    this.step1Form = new FormGroup({
      fullname: new FormControl(this.user.fullname, [
        Validators.required
      ]),
      cellphone: new FormControl(this.user.cellphone, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(/^(([^*?<>().,;:\s@]+(\.[^*?<>().,;:\s@]+)*))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      birthdate: new FormControl(this.user.birthdate, [
        Validators.required
      ]),
      program: new FormControl(this.user.program, [
      	Validators.required
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, []),
      accepted_terms: new FormControl(this.user.accepted_terms, []),
    });
    this.step2Form = new FormGroup({
      university_id: new FormControl(this.user.university_id, [
        Validators.required
      ]),
      college_course_id: new FormControl(this.user.college_course_id, [
        Validators.required
      ]),
      local_committee_id: new FormControl(this.user.local_committee_id, [
        Validators.required
      ]),
      scholarity: new FormControl(this.user.scholarity, [
        Validators.required
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.pattern('^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')
      ]),
      repassword: new FormControl(this.user.repassword, [
        Validators.required,
        Validators.pattern('^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')
      ])
    });
    window.innerWidth > 600 ? this.placeholderBirthdate = "Los programas de AIESEC son para personas de 18 a 30 años" : this.placeholderBirthdate = "Fecha de nacimiento";
  }

  ngOnInit() {

    this.urlScrapper.queryParams.subscribe((param: any) => {
      if (param['utm_source']) {
        localStorage.setItem('utm_source', param['utm_source'])
      }

      if (param['utm_medium']) {
        localStorage.setItem('utm_medium', param['utm_medium'])
      }

      if (param['utm_campaign']) {
        localStorage.setItem('utm_campaign', param['utm_campaign'])
      }

      if (param['utm_term']) {
        localStorage.setItem('utm_term', param['utm_term'])
      }

      if (param['utm_content']) {
        localStorage.setItem('utm_content', param['utm_content'])
      }

      if (param['embedded']) {
        this.embeddedForm = true;
      }
    });

    this.fillUniversitySelect();
    this.fillCourseSelect();
    this.fillPlacesSelect();
    this.cellphoneMask = this.cellphoneDefaultMask;
  }

  onResize(event){
    (event.target.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Fecha de nacimiento");
  }

  cancelSignUp(){
    this.router.navigate(['/']);
  }


  accessAiesec(){
    window.open("https://aiesec.org/", "_blank");
  }

  isValidPersonal(field) {
    return !this.step1Form.controls[field].valid && (this.step1Form.controls[field].dirty || this.submittedPersonal)
  }

  isValidStudy(field) {
    return !this.step2Form.controls[field].valid && (this.step2Form.controls[field].dirty || this.submittedStudy)
  }

  fillUniversitySelect() {
    this.signupService.getUniversities().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'],['asc']);
      let other = _.remove(orderedList, item => item.name === 'OUTRA');
      this.universities = _.union(orderedList, other);
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das faculdades disponíveis.' });
    })
  }

  fillCourseSelect() {
    this.signupService.getCourses().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'], ['asc']);
      let other = _.remove(orderedList, item => item.name === 'Outro');
      this.courses = _.union(orderedList, other);
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados dos cursos disponíveis.' });
    })
  }

  fillPlacesSelect() {
    this.signupService.getLocalCommittees().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'], ['asc']);
      this.places = orderedList;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das AIESEC disponíveis.' });
    })
  }

  /*changeProgram(program) {
  	this.user.program = program;
  }*/

  unableToSubmit(){
    return this.emptyFields() || this.emptyUniversity() ||  this.emptyCourse();
  }

  emptyFields(){
    return !this.user.scholarity || !this.user.local_committee_id
  }

  emptyUniversity(){
    if (+this.user.scholarity >= 3 && +this.user.scholarity <= 5) {
      return !this.user.university_id
    }
    else {
      return false;
    }
  }

  emptyCourse(){
    if (+this.user.scholarity >= 3 && +this.user.scholarity <= 5) {
      return !this.user.college_course_id
    }
    else {
      return false;
    }
  }

  checkDate() {
    let date = moment(this.user.birthdate, 'DDMMYYYY').format('DD/MM/YYYY').split('/');
    if ((+date[0] > 0 && +date[0] <= 31) && (+date[1] > 0 && +date[1] <= 12) && (+date[2] > 1900 && +date[2] < moment().year())) {
      this.invalidDate = false;
      let date = moment(this.user.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD');
      let age = moment().diff(date, 'years', false);
      (age >= 18 && age <= 30) ? this.matchDate = true : this.matchDate = false
    }
    else {
      this.invalidDate = true;
    }
  }

  checkMaskCellphone(event) {
    if (+event.key >= 0 && +event.key <= 9 || event.key == "Backspace") {
      if (this.user.cellphone.replace(/[()_+-\s]/g, '').length < 10) {
        this.cellphoneMask = this.cellphoneDefaultMask;
      }
      else {
        this.cellphoneMask = this.cellphoneLargerMask;
      }
    }
  }

  checkPhone() {
    let cellphone = this.user.cellphone.replace(/[(+)_-\s]/g, '');
    if (cellphone.length <= 9) {
      this.invalidPhone = true;
      return;
    }
    else {
      this.invalidPhone = false;
    }
  }

  nextStep() {

    this.submittedPersonal = true;
    if (this.user.fullname && this.user.cellphone && this.user.email && this.user.birthdate && !this.invalidPhone && this.matchDate) {
      /*this.personalData = false;
      this.studyData = true;*/
      if(this.user.program == '0'){
        this.showGVStep = true;
      }
      if(this.user.program == '1'){
        this.showGTStep = true;
      }
      if(this.user.program == '2'){
        this.showGEStep = true;
      }
    }
  }

  hideGVStep() {
    this.showGVStep = false;
  }
  hideGTStep() {
    this.showGTStep = false;
  }
  hideGEStep() {
    this.showGEStep = false;
  }

  toggleFormGv() {
    this.formToggle ? this.formToggle = false : this.formToggle = true;
  }
  submit() {
    this.submittedStudy = true;

    let user = {
      gv_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[(+)_-\s]/g, ''),
        email: this.user.email,
        password: this.user.password,
        birthdate: this.user.birthdate,
        local_committee_id: +this.user.local_committee_id,
        university_id: (this.user.university_id == null ? null : +this.user.university_id),
        college_course_id: (this.user.college_course_id == null ? null : +this.user.college_course_id),
        cellphone_contactable: (this.user.cellphone_contactable ? true : false),
        scholarity: 1, //+this.user.scholarity,
        utm_source: (localStorage.getItem('utm_source') ? localStorage.getItem('utm_source') : null),
        utm_medium: (localStorage.getItem('utm_medium') ? localStorage.getItem('utm_medium') : null),
        utm_campaign: (localStorage.getItem('utm_campaign') ? localStorage.getItem('utm_campaign') : null),
        utm_term: (localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : null),
        utm_content: (localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : null)
      }
    };
    this.loading = true;
    this.signupService.addGvParticipant(user)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }
        else {
          this.completedSignup = true;
          localStorage.removeItem('utm_source');
          localStorage.removeItem('utm_medium');
          localStorage.removeItem('utm_campaign');
          localStorage.removeItem('utm_term');
          localStorage.removeItem('utm_content');
        }
      },
        (err) => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
          this.loading = false;
        }
      )
  }

  checkEmail() {
    this.signupService.checkValidEmail(this.user.email)
      .then((res: any) => {
        res.email_exists ? this.invalidEmail = true : this.invalidEmail = false;
      }, (err) => {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar dados deste email.' });
      })
  }

}
