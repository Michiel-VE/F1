import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  readonly usernameControlName = 'username';
  readonly passwordControlName = 'password';
  username = '';
  password = '';
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit(): void {
   this.form = this.formBuilder.group({
     [this.usernameControlName] : ['', [Validators.required]],
     [this.passwordControlName] : ['', [Validators.required]],
   });
  }

  onSubmit(): void{
    this.loginService.login(this.form.get(this.usernameControlName)?.value, this.form.get(this.passwordControlName)?.value);
  }

}
