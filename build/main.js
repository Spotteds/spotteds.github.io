webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilPage = (function () {
    function PerfilPage(navCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.usuario = navParams.get('usuario');
        if (navParams.get('usuariosperto') === undefined) { }
        else {
            if (navParams.get('usuariosperto') < 1) {
                this.usuariosperto = (navParams.get('usuariosperto') * 1000).toFixed(0);
                this.usuariosperto += " metros";
            }
            else {
                this.usuariosperto = (navParams.get('usuariosperto')).toFixed(0);
                this.usuariosperto += " km";
            }
        }
        console.log(this.usuariosperto);
        //console.log(this.usuario);
        /*this.person = {name: undefined, company: undefined, birthdate: undefined};
        this.dob = undefined;*/
    }
    PerfilPage.prototype.ionViewWillLeave = function () {
        if (this.menuCtrl.isEnabled('user-menu')) {
            this.menuCtrl.enable(false, 'user-menu');
        }
        else {
            this.menuCtrl.enable(true, 'user-menu');
        }
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(false, 'user-menu');
        /*
          let person = JSON.parse(localStorage.getItem('PERSON'));
          if (person){
            this.person = person;
            this.age = this.getAge(this.person.birthdate);
            this.dob = new Date(this.person.birthdate).toISOString();
          }*/
        //console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\perfil\perfil.html"*/'\n<!--\n  Generated template for the LoginPage page.\n      <ion-title color="white">Perfil</ion-title>\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-navbar transparent>\n      <ion-buttons right>\n          <button ion-button icon-only>\n              <ion-icon  name="more"></ion-icon>\n            </button>\n      </ion-buttons>\n      <h1 item-left style="color:white;">Perfil</h1>\n\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n<user-info [user] = "usuario"></user-info>\n<div class="flex-container">\n<div class="login-form animated fadeInRight">\n  <ion-icon name="person" item-left></ion-icon>\n  <strong>{{usuario.name}}</strong>\n  <br>\n    <ion-icon name="school" item-left></ion-icon>\n    <strong>{{usuario.curso}}</strong>\n    <br>\n    <div  *ngIf="usuariosperto === undefined ; else customLocalization"></div>\n                          <ng-template #customLocalization>\n                            <div><ion-icon name="locate" item-left></ion-icon>\n                              <strong style="font-size:1em;">{{usuariosperto}}</strong></div>\n                              </ng-template>\n    \n    </div>\n  </div>\n\n\n</ion-content>\n<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>\n          {{usuario.name}}\n          </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n    \n    \n    <ion-content padding>\n      \n      \n      <form #formCtrl="ngForm">\n          <div align="center" *ngIf="formCtrl.form.valid">\n              \n            <h1> Profile</h1>\n            <img class="profile-image" src="assets/images/no-photo.jpg">\n              <h4>{{person.name}}, {{person.company}}</h4>\n              <h5>{{age}} years old</h5>\n          </div>\n      <ion-list>\n          <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="person.name" name="name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Company</ion-label>\n            <ion-select [(ngModel)]="person.company" name="company" required>\n              <ion-option value="Maybank">Maybank</ion-option>\n              <ion-option value="CIMB">CIMB</ion-option>\n              <ion-option value="Public Bank">Public Bank</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label >Birth Date</ion-label>\n              <ion-datetime required name="birthdate" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="dob" [ngModelOptions]="{standalone:true}"></ion-datetime>\n          </ion-item>\n          \n      </ion-list>\n      <button color="secondary" [disabled]="!formCtrl.form.valid" ion-button block (click)="save()">Save</button>\n      <button color="danger" ion-button block (click)="reset()">Reset</button>\n    </form>\n    </ion-content>\n  -->'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stories_list_stories_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_photo_story_photo__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clienteLogin_clientelogin__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WelcomePage = (function () {
    function WelcomePage(loadingCtrl, app, userService, fb, navCtrl, navParams, alertCtrl, authService, formBuilder) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.userService = userService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.isLoggedIn = false;
        // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
        // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
        // A programmatically way to make a nice rainbow effect, there you go.
        // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/
        this.colors = new Array([62, 35, 255], [11, 57, 66], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        this.step = 0;
        // color table indices for:
        // [current color left,next color left,current color right,next color right]
        this.colorIndices = [0, 1, 2, 3];
        // transition speed
        this.gradientSpeed = 0.00005;
        this.gradient = '';
        //FACEBOOK MÉTODO DE VERIFICAÇÃO SE O USUÁRIO ESTÁ LOGADO
        fb.getLoginStatus()
            .then(function (res) {
            ////console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
        var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.signinForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].pattern(emailRegex)])]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].minLength(8)]]
        });
    }
    WelcomePage.prototype.loginFace = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 50
        });
        loading.onDidDismiss(function () {
            //      this.fb.login(['user_likes','public_profile', 'user_friends', 'email','user_friends','user_gender','user_posts','user_birthday','user_events'])
            _this.fb.login(['public_profile', 'email'])
                .then(function (res) {
                if (res.status === "connected") {
                    _this.isLoggedIn = true;
                    _this.getUserDetail(res.authResponse.userID);
                }
                else {
                    _this.isLoggedIn = false;
                }
            })
                .catch(function (e) {
                alert(e);
                //console.log('Error logging into Facebook', e)
            });
        });
        loading.present();
    };
    WelcomePage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    WelcomePage.prototype.getUserDetail = function (userid) {
        var _this = this;
        var loading2 = this.loadingCtrl.create({
            duration: 50
        });
        //    this.fb.api("/"+userid+"/?fields=id,email,relationship_status,name,picture.width(320).height(320).as(picture_large),gender",["public_profile"])
        this.fb.api("/" + userid + "/?fields=id,email,name,picture.width(320).height(320).as(picture_large),gender", ["public_profile"])
            .then(function (res) {
            //console.log(res);
            var formUser = res;
            var email = res.email;
            formUser.photo = res.picture_large.data.url;
            formUser.distance = 100;
            formUser.username = res.email;
            formUser.timestampConcordou = Math.floor(Date.now() / 1000);
            delete formUser.picture_large;
            _this.userService.emailExists(email).first().subscribe(function (userExists) {
                if (userExists) {
                    _this.authService.signinWithEmail({ email: res.email, password: res.id }).then(function (isLogged) {
                        if (isLogged) {
                            _this.isLoggedSpottedIn = true;
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                    }).catch(function (e) {
                        _this.isLoggedSpottedIn = false;
                    });
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Confirmar cadastro',
                        message: '<p>Você aceita os termos de uso?</p>',
                        buttons: [
                            {
                                text: 'Sim',
                                handler: function () {
                                    var alert2 = _this.alertCtrl.create({
                                        title: 'Complete o cadastro',
                                        inputs: [
                                            {
                                                name: 'faculdade',
                                                placeholder: 'Digite sua universidade'
                                            },
                                            {
                                                name: 'curso',
                                                placeholder: 'Digite o curso'
                                            }
                                        ],
                                        buttons: [
                                            {
                                                text: 'Enviar',
                                                handler: function (data) {
                                                    formUser.curso = data.curso;
                                                    formUser.faculdade = data.faculdade;
                                                    var loading = _this.showLoading();
                                                    _this.authService.createAuthUser({
                                                        email: formUser.email,
                                                        password: formUser.id
                                                    }).then(function (authState) {
                                                        delete formUser.id;
                                                        var uuid = authState.auth.uid;
                                                        _this.userService.create(formUser, uuid).then(function () {
                                                            //console.log('usuario cadastrado');
                                                            loading.dismiss();
                                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                                        }).catch(function (error) {
                                                            //console.log(error);
                                                            _this.showAlert("Erro no cadastro");
                                                        }).catch(function (error) {
                                                            _this.showAlert("Erro no cadastro");
                                                            //console.log(error);
                                                            //   this.showAlert(error);
                                                        });
                                                    });
                                                }
                                            }
                                        ]
                                    });
                                    alert2.present();
                                }
                            },
                            {
                                text: 'Não',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            }, {
                                text: 'Ver termos',
                                handler: function () {
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__stories_list_stories_list__["a" /* StoriesListPage */]);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            });
            _this.users = res;
        })
            .catch(function (e) {
            //console.log(e);
        });
        loading2.present();
    };
    WelcomePage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        this.authService.signinWithEmail(this.signinForm.value).then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                loading.dismiss();
            }
        }).catch(function (error) {
            loading.dismiss();
            _this.showAlert(error);
        });
    };
    WelcomePage.prototype.onHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]).then(function (hasAccess) {
            //console.log('Autorizado : ', hasAccess);
        }).catch(function (err) {
            //console.log('Não Autorizado : ', err);
        });
    };
    WelcomePage.prototype.onLogout = function () {
        this.authService.logout();
    };
    WelcomePage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    WelcomePage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]).then(function (hasAccess) {
            console.log('Autorizado : ', hasAccess);
        }).catch(function (err) {
            console.log('Não Autorizado : ', err);
        });
    };
    WelcomePage.prototype.updateGradient = function () {
        var _this = this;
        var c00 = this.colors[this.colorIndices[0]];
        var c01 = this.colors[this.colorIndices[1]];
        var c10 = this.colors[this.colorIndices[2]];
        var c11 = this.colors[this.colorIndices[3]];
        var istep = 1 - this.step;
        var r1 = Math.round(istep * c00[0] + this.step * c01[0]);
        var g1 = Math.round(istep * c00[1] + this.step * c01[1]);
        var b1 = Math.round(istep * c00[2] + this.step * c01[2]);
        var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
        var r2 = Math.round(istep * c10[0] + this.step * c11[0]);
        var g2 = Math.round(istep * c10[1] + this.step * c11[1]);
        var b2 = Math.round(istep * c10[2] + this.step * c11[2]);
        var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        this.gradient = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))";
        this.step += this.gradientSpeed;
        if (this.step >= 1) {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3];
            // pick two new target color indices
            // do not pick the same as the current one
            this.colorIndices[1] =
                (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
            this.colorIndices[3] =
                (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
        }
        setInterval(function () { _this.updateGradient(); }, 10);
    };
    WelcomePage.prototype.irCliente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__clienteLogin_clientelogin__["a" /* ClienteLoginPage */]);
    };
    WelcomePage.prototype.irCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.testarPhoto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__story_photo_story_photo__["a" /* StoryPhotoPage */]);
    };
    WelcomePage.prototype.irHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\welcome\welcome.html"*/'<ion-content padding class="transparent-header">\n\n    <ion-header>\n\n      <ion-navbar>\n\n      </ion-navbar>\n\n    </ion-header>\n\n    <img class="logo" src="assets/img/logo/spotted3.png" />\n\n    \n\n    <div padding>\n\n        <form [formGroup]="signinForm" (ngSubmit) = "onSubmit(); $event.preventDefault()">\n\n            <div class="flex-container">\n\n              <div class="login-form animated fadeInRight">\n\n                <ion-item margin-bottom class="input-login">\n\n                  <ion-input  placeholder="Email" type="text" formControlName = "email"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="input-login">\n\n                  <ion-input  placeholder="Senha" type="password" formControlName = "password"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n          \n\n                    <button ion-button block outline class="login-button"  type = "submit" [disabled]="signinForm.invalid"  color="light" class="login-button">Entrar</button>\n\n            </div>\n\n           \n\n          \n\n          \n\n          \n\n          </form>\n\n          \n\n          \n\n      <button ion-button block outline (click)="irHome()" color="light" class="login-button">Página Inicial</button>\n\n\n\n    </div>\n\n    <div class="strike">\n\n      <span>OU</span>\n\n    </div>\n\n    <button ion-button block clear (click)="loginFace()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login com Facebook</button>\n\n\n\n<!--    <div *ngIf="isLoggedIn; else facebookLogin">\n\n      <h2>Hi, {{users.name}} ({{users.email}})</h2>\n\n      <p>\n\n        Gender: {{users.gender}}\n\n      </p>\n\n      <p>\n\n        <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n\n      </p>\n\n      <p>\n\n        <button ion-button icon-right (click)="logout()">\n\n          Logout\n\n        </button>\n\n      </p>\n\n    </div>\n\n    <ng-template #facebookLogin>\n\n      <button ion-button block clear (click)="loginFace()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n\n    </ng-template>\n\n  --> \n\n  \n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar class="footer">\n\n      <div (click)="irCadastro()">\n\n        <span>Ainda não tem conta? <strong>Cadastre-se aqui</strong>.</span>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_story_story_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_canvas_draw_canvas_draw__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_preview__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_native__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_story_model__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StoryPhotoPage = (function () {
    function StoryPhotoPage(storyService, userService, navCtrl, navParams, cameraPreview, platform, alertCtrl) {
        var _this = this;
        this.storyService = storyService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.platform = platform;
        //base64 da foto
        this.srcPhoto = "";
        this.caminhoFoto = "";
        //modo inicial
        this.mode = 'camera';
        this.frontalOuTraseira = true;
        this.useURI = true;
        this.startCamera();
        this.alertCtrl = alertCtrl;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    StoryPhotoPage.prototype.startCamera = function () {
        try {
            this.cameraPreview.stopCamera().then(function () {
                //console.log("camera started")
            }).catch(function (e) {
                //console.log("camera error")
            });
        }
        catch (e) {
        }
        // start camera
        this.cameraPreview.startCamera({ x: 0, y: 0, width: this.platform.width(), height: this.platform.height(), toBack: true, previewDrag: false, tapPhoto: true });
    };
    StoryPhotoPage.prototype.mudaCamera = function () {
        this.frontalOuTraseira = !this.frontalOuTraseira;
    };
    StoryPhotoPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad StoryPhotoPage');
    };
    StoryPhotoPage.prototype.ionViewWillLeave = function () {
        this.cameraPreview.stopCamera();
    };
    /**
     * Switch from back to front cämera
     */
    StoryPhotoPage.prototype.refresh = function () {
        this.cameraPreview.switchCamera();
    };
    /**
     * Back button
     */
    StoryPhotoPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    //inicia modo brush e slide das cores
    StoryPhotoPage.prototype.modeBrush = function () {
        this.mode = 'brush';
        this.availableColours = this.canvas.availableColours;
    };
    //ao salvar vai adicionar ao feed de Story
    StoryPhotoPage.prototype.save = function () {
    };
    //ao finalizar o desenho na foto
    StoryPhotoPage.prototype.done = function () {
        this.mode = 'photo';
    };
    StoryPhotoPage.prototype.takePicture = function () {
        var _this = this;
        var self = this;
        var pictureOpts = {
            quality: 80
        };
        //tira a foto e coloca modo 'photo'
        this.cameraPreview.takePicture(pictureOpts).then(function (base64PictureData) {
            self.srcPhoto = base64PictureData;
            _this.caminhoFoto = "data:image/jpeg;base64," + base64PictureData;
            _this.mode = 'photo';
            self.cameraPreview.hide().then(function () {
            });
        });
    };
    StoryPhotoPage.prototype.upFromGallery = function (sourceType) {
        var _this = this;
        this.mode = 'gallery';
        var cameraDirection;
        if (this.frontalOuTraseira) {
            cameraDirection = 1;
        }
        else {
            cameraDirection = 0;
        }
        var cameraOptions = {
            quality: 80,
            destinationType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            encodingType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].EncodingType.JPEG,
            mediaType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].MediaType.PICTURE,
            correctOrientation: true,
            cameraDirection: cameraDirection,
            sourceType: sourceType
        };
        __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].getPicture(cameraOptions).then(function (caminhoFoto) {
            _this.srcPhoto = caminhoFoto;
            _this.caminhoFoto = "data:image/jpeg;base64," + caminhoFoto;
        }, function (e) {
            //console.log(e);
        });
    };
    StoryPhotoPage.prototype.upload = function () {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage().ref();
        var fileName = Math.floor(Date.now() / 1000);
        var imageRef = storageRef.child("stories/" + this.currentUser.$key + "/" + fileName + ".jpeg");
        imageRef.putString(this.caminhoFoto, __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            var story = new __WEBPACK_IMPORTED_MODULE_8__models_story_model__["a" /* Story */](snapshot.downloadURL, _this.currentUser.$key, _this.currentUser.name, _this.currentUser.photo, fileName);
            _this.storyService.create(story);
            _this.showSuccesfulUploadAlert();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
            //snapshot.downloadURL); 
        });
        this.mode = 'camera';
    };
    StoryPhotoPage.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Enviado',
            subTitle: 'Story enviada com sucesso ',
            buttons: ['OK']
        });
        alert.present();
        this.caminhoFoto = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* ViewChild */])('myCanvasDraw'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */])
    ], StoryPhotoPage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])('useURI'),
        __metadata("design:type", Boolean)
    ], StoryPhotoPage.prototype, "useURI", void 0);
    StoryPhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-story-photo',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\story-photo\story-photo.html"*/'<!-- NO BOUNCE PARA QUE A IMAGEM NÃO FIQUE FLUTUANDO -->\n<ion-content no-bounce>\n\n  <!-- MODO CAMERA -->\n  <div *ngIf="mode == \'camera\'">\n\n\n   \n\n    <ion-fab left top small >\n      <button ion-fab color="danger">\n        <ion-icon name="ios-settings"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-fab left bottom small (click)="upFromGallery(0)">\n      <button ion-fab color="danger" >\n        <ion-icon name="md-image"></ion-icon>\n      </button>\n    </ion-fab>\n    <ion-fab right bottom small (click)="mudaCamera()">\n      <button ion-fab color="danger" >\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-fab>\n\n\n\n    <ion-fab right bottom small >\n      <button (click)="refresh()" ion-fab color="danger">\n        <ion-icon name="fa-refresh"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-fab center bottom large >\n      <button (click)="takePicture()" ion-fab color="dark">\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n\n\n  <!-- MODO PHOTO -->\n  <div *ngIf="mode == \'photo\'">\n    <ion-fab right bottom small>\n      <button ion-fab color="light" (click)="upload()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-fab left bottom small >\n      <button ion-fab color="danger" (click)="back()">\n        <ion-icon name="md-arrow-down"></ion-icon>\n        Save\n      </button>\n    </ion-fab>\n\n    <ion-fab left top small >\n      <button ion-fab color="danger" (click)="back()">\n        <ion-icon name=""></ion-icon>\n        CANCEL\n      </button>\n    </ion-fab>\n\n    <ion-fab right top small >\n      <button ion-fab color="danger" (click)="canvas.initModeBrush(); modeBrush()">\n        <ion-icon name="brush"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n\n  <!-- MODO BRUSH -->\n  <div *ngIf="mode == \'brush\'">\n    <ion-fab left top small >\n      <button ion-fab color="danger" (click)="back()">\n        <ion-icon name=""></ion-icon>\n         Undo\n      </button>\n    </ion-fab>\n\n    <ion-fab right="" top small >\n      <button ion-fab color="danger" (click)="done()" style="font-weight: bold">\n        <ion-icon name=""></ion-icon>\n        Done\n      </button>\n    </ion-fab>\n  </div>\n  <div *ngIf="mode == \'gallery\'">\n      <ion-fab right bottom >\n          <button ion-fab color="danger" (click)="upload()">\n            <ion-icon name="md-cloud-upload"></ion-icon>\n          </button>\n        </ion-fab>\n        <ion-fab center middle large >\n            <img  [src]="srcPhoto" *ngIf="srcPhoto" />\n          </ion-fab>\n</div>\n\n  <!-- SLIDES COM AS CORES -->\n  <ion-slides class="slide-class" loop="false" slidesPerView="10" *ngIf="mode == \'brush\'">\n    <ion-slide *ngFor="let colour of availableColours">\n      <button clear ion-button (click)="canvas.changeColour(colour)">\n        <ion-icon [style.color]="colour" name="ios-cog-outline" class="image-icons"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n\n  <!-- COMPONENTE COM A FOTO-->\n  <canvas-draw *ngIf="srcPhoto"  src="data:image/jpeg;base64,{{srcPhoto}}" #myCanvasDraw>\n  </canvas-draw>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\story-photo\story-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_story_story_service__["a" /* StoryService */], __WEBPACK_IMPORTED_MODULE_1__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_preview__["a" /* CameraPreview */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */]])
    ], StoryPhotoPage);
    return StoryPhotoPage;
}());

//# sourceMappingURL=story-photo.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var StoryService = (function (_super) {
    __extends(StoryService, _super);
    function StoryService(userService, af, http, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.af = af;
        _this.http = http;
        _this.firebaseApp = firebaseApp;
        _this.setStories();
        _this.items = [];
        _this.feeds =
            [
                {
                    id: "elvis",
                    photo: "http://noize.com.br/wp-content/uploads/2015/01/Elvis-Presley-png-version.png",
                    name: "Elvis",
                    link: "https://ramon.codes",
                    lastUpdated: 1492665454,
                    items: [
                        StoryService_1.buildItem("ramon-3", "video", 0, "https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", '', false, 1492665454)
                    ]
                } /*
                ,
                {
                  id: "gorillaz",
                  photo: "https://lh3.googleusercontent.com/xYFz6B9FHMQq7fDOI_MA61gf0sNdzGBbdR7-mZ7i4rEVvE_N-kZEY_A4eP74Imcf8Sq3FYxAgd4eJA=w200",
                  name: "Gorillaz",
                  link: "",
                  lastUpdated: 1492665454,
                  items: [
                    StoryService.buildItem("gorillaz-1", "video", 0, "https://instagram.frao1-1.fna.fbcdn.net/t50.2886-16/17886251_1128605603951544_572796556789415936_n.mp4", "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:small", '', false, 1492665454),
                    StoryService.buildItem("gorillaz-2", "photo", 3, "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:large", "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:small", '', false, 1492665454),
                  ]
                },
                {
                  id: "ladygaga",
                  photo: "https://lh3.googleusercontent.com/VkANYSL1HOzINPSnzBJRM879b302ShsRwLoKD7mLezgTLvlpHPm_dIVop7mkAQfepze6O5N8rw8l4yM=w200",
                  name: "Lady Gaga",
                  link: "",
                  lastUpdated: 1492665454,
                  items: [
                    StoryService.buildItem("ladygaga-1", "photo", 5, "https://pbs.twimg.com/media/C8mtrEMXcAA9KKM.jpg:large", "https://pbs.twimg.com/media/C8mtrEMXcAA9KKM.jpg:small", '', false, 1492665454),
                    StoryService.buildItem("ladygaga-2", "photo", 3, "https://pbs.twimg.com/media/C4t_bxcXAAE3Hwb.jpg:large", "https://pbs.twimg.com/media/C4t_bxcXAAE3Hwb.jpg:small", 'http://ladygaga.com', false, 1492665454),
                  ]
                },
                {
                  id: "starboy",
                  photo: "https://lh3.googleusercontent.com/nMxfllzaAmaCCZJEMiKe2EARjyUNItQ-mdgAq6he-LWXwkIWbiiBIHyC3rGiqDu6fgyVK6NnjcgueA=w200",
                  name: "The Weeknd",
                  link: "",
                  lastUpdated: 1492665454,
                  items: [
                    StoryService.buildItem("starboy-1", "photo", 5, "https://pbs.twimg.com/media/C6f-dTqVQAAiy1K.jpg:large", "https://pbs.twimg.com/media/C6f-dTqVQAAiy1K.jpg:small", '', false, 1492665454)
                  ]
                },
                {
                  id: "qotsa",
                  photo: "https://lh3.googleusercontent.com/nE4grkY8s88P_1mFFA06mGCNshhqtIz4C4y2dV7AZbm0360zopRKDMCYtUHR0uQR2DAfYMRZdA=s180-p-e100-rwu-v1",
                  name: "QOTSA",
                  link: "",
                  lastUpdated: 1492665454,
                  items: [
                    StoryService.buildItem("qotsa-1", "photo", 10, "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:large", "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:small", '', false, 1492665454)
                  ]
                }
        
        
              */
            ];
        var diferencaTempo;
        if (_this.stories === undefined) { }
        else {
            _this.stories.forEach(function (element) {
                element.forEach(function (k) {
                    diferencaTempo = Math.floor((Math.floor(Date.now() / 1000) - k.timestamp) / 60 / 60 / 24);
                    //console.log(diferencaTempo,"dif");
                    if (diferencaTempo > 1) {
                        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref();
                        storageRef.child("stories/" + k.userId + "/" + k.timestamp + ".jpeg").delete();
                        _this.delete(k);
                    }
                    _this.feeds.push({
                        id: k.$key,
                        photo: k.userPhoto,
                        name: k.userNome,
                        link: "",
                        lastUpdated: k.timestamp,
                        items: [
                            StoryService_1.buildItem("" + k.$key, "photo", 10, k.photo, k.photo + ":small", '', false, k.timestamp)
                        ]
                    });
                });
            });
        }
        return _this;
    }
    StoryService_1 = StoryService;
    StoryService.prototype.diferencaTimestamp = function (timestamp1, timestamp2) {
        var difference = timestamp1 - timestamp2;
        var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        return daysDifference;
    };
    StoryService.buildItem = function (id, type, length, src, preview, link, seen, time) {
        return {
            "id": id,
            "type": type,
            "length": length,
            "src": src,
            "preview": preview,
            "link": link,
            "seen": seen,
            "time": time
        };
    };
    StoryService.prototype.delete = function (story) {
        return this.af.database.object("/stories/" + story.$key).remove().catch(this.handlePromiseError);
    };
    StoryService.prototype.getFeed = function () {
        return this.feeds;
    };
    StoryService.prototype.addFeed = function (obj) {
        this.feeds.unshift(obj);
    };
    StoryService.prototype.get = function (userId) {
        return this.af.database.object("/stories/" + userId)
            .catch(this.handleObservableError);
    };
    StoryService.prototype.getAllStories = function () {
        return this.af.database.list("stories/", {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    StoryService.prototype.getStories = function (userId1) {
        return this.af.database.list("/stories/" + userId1, {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    StoryService.prototype.create = function (story) {
        return this.af.database.list("/stories/").push(story).catch(this.handlePromiseError);
    };
    StoryService.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp.storage().ref().child("/stories/" + userId).put(file);
    };
    StoryService.prototype.setStories = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.stories = _this.af.database.list("/stories/", {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (stories) {
                    return stories.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    StoryService = StoryService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0_angularfire2__["f" /* FirebaseApp */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], Object])
    ], StoryService);
    return StoryService;
    var StoryService_1;
}(__WEBPACK_IMPORTED_MODULE_6__base_service__["a" /* BaseService */]));

//# sourceMappingURL=story.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloqueadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BloqueadoService = (function (_super) {
    __extends(BloqueadoService, _super);
    function BloqueadoService(userService, af, http, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.af = af;
        _this.http = http;
        _this.firebaseApp = firebaseApp;
        _this.setBloqueados();
        return _this;
    }
    BloqueadoService.prototype.delete = function (bloqueado) {
        return this.af.database.object("/bloqueados/" + bloqueado.$key).remove().catch(this.handlePromiseError);
    };
    BloqueadoService.prototype.get = function (userId) {
        return this.af.database.object("/bloqueados/" + userId)
            .catch(this.handleObservableError);
    };
    BloqueadoService.prototype.getAllBloqueados = function () {
        return this.af.database.list("bloqueados/", {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    BloqueadoService.prototype.getBloqueados = function (userId1) {
        return this.af.database.list("/bloqueados/" + userId1, {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    BloqueadoService.prototype.create = function (bloqueado) {
        return this.af.database.list("/bloqueados/" + bloqueado.bloqueante).push(bloqueado).catch(this.handlePromiseError);
    };
    BloqueadoService.prototype.setBloqueados = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.bloqueados = _this.af.database.list("/bloqueados/" + authState.auth.uid, {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (bloqueados) {
                    return bloqueados.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    BloqueadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0_angularfire2__["f" /* FirebaseApp */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], Object])
    ], BloqueadoService);
    return BloqueadoService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=bloqueado.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ChatServiceProvider = (function (_super) {
    __extends(ChatServiceProvider, _super);
    function ChatServiceProvider(af, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        //console.log('Hello ChatProvider Provider');
        _this.setChats();
        return _this;
    }
    ChatServiceProvider.prototype.create = function (chat, userId1, userId2) {
        //console.log('olocor');
        //console.log(chat);
        return this.af.database.object("/chats/" + userId1 + "/" + userId2).set(chat).catch(this.handlePromiseError);
    };
    ChatServiceProvider.prototype.getDeepChat = function (userId1, userId2) {
        return this.af.database
            .object("/chats/" + userId1 + "/" + userId2)
            .catch(this.handleObservableError);
    };
    ChatServiceProvider.prototype.setChats = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.chats = _this.af.database.list("/chats/" + authState.auth.uid, {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (chats) {
                    return chats.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    ChatServiceProvider.prototype.updatePhoto = function (chat, chatPhoto, recipientUserPhoto) {
        if (chatPhoto != recipientUserPhoto) {
            return chat.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve(false);
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_notificacao_model__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_message_message_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_message_model__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__perfil_perfil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChatPage = (function () {
    function ChatPage(menuCtrl, alertCtrl, localNotifications, platform, chatService, messageService, userService, authService, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.chatService = chatService;
        this.messageService = messageService;
        this.userService = userService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scrou = 8;
        this.podeir = 1;
        if (navParams.get('usuariosperto') === undefined) { }
        else {
            this.distanciaUser = navParams.get('usuariosperto');
            if (navParams.get('usuariosperto') < 1) {
                this.usuariosperto = (navParams.get('usuariosperto') * 1000).toFixed(0);
                this.usuariosperto += " metros";
            }
            else {
                this.usuariosperto = navParams.get('usuariosperto').toFixed(0);
                this.usuariosperto += " km";
            }
        }
    }
    ChatPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'user-menu');
        __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */].flag = false;
    };
    ChatPage.prototype.openPerfil = function (userId) {
        var _this = this;
        this.menuCtrl.enable(false, 'user-menu');
        this.userService.get(userId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__perfil_perfil__["a" /* PerfilPage */], {
                usuario: user,
                usuariosperto: _this.distanciaUser
            });
        });
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'user-menu');
        __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */].flag = true;
        //   //console.log('ionViewDidLoad ChatPage');
        this.recipient = this.navParams.get('recipientUser');
        this.codigo = this.navParams.get('codigo');
        this.pageTitle = this.recipient.name;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.sender = currentUser;
            _this.chat1 = _this.chatService.getDeepChat(_this.sender.$key, _this.recipient.$key);
            _this.chat2 = _this.chatService.getDeepChat(_this.recipient.$key, _this.sender.$key);
            _this.chat1.first().subscribe(function (chat) {
                _this.chatService.updatePhoto(_this.chat1, chat.photo, _this.recipient.photo);
            });
            var doSubscription = function () {
                _this.messages.subscribe(function (messages) {
                    _this.scrollToBottom();
                });
            };
            _this.messages = _this.messageService.getMessages(_this.sender.$key, _this.recipient.$key);
            _this.notificacoes = _this.messageService.getAllNotificacoes(_this.recipient.$key);
            _this.messages.first().subscribe(function (messages) {
                if (messages.length === 0) {
                    _this.messages = _this.messageService.getMessages(_this.recipient.$key, _this.sender.$key);
                    doSubscription();
                }
                else {
                    doSubscription();
                }
            });
        });
        //    this.scrou = 1;
    };
    ChatPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    ChatPage.prototype.sendMessage = function (newMessage) {
        var _this = this;
        //console.log(newMessage);
        if (newMessage) {
            //console.log(newMessage);
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.database.ServerValue.TIMESTAMP;
            //console.log(this.messages);
            this.messageService.create(new __WEBPACK_IMPORTED_MODULE_8__models_message_model__["a" /* Message */](this.sender.$key, newMessage, currentTimestamp_1), this.messages).
                then(function () {
                _this.chat1.update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
                _this.chat2.update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
                _this.messageService.createNotificacao(new __WEBPACK_IMPORTED_MODULE_1__models_notificacao_model__["a" /* Notificacao */](_this.recipient.$key, _this.sender.name, _this.sender.$key, _this.sender.photo, newMessage, 1, false, currentTimestamp_1), _this.notificacoes);
            });
            //console.log(this.messages);
        }
    };
    ChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content._scroll) {
                _this.content.scrollToBottom(duration || 0);
            }
        }, 50);
    };
    ChatPage.prototype.scrollToTop = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content._scroll) {
                _this.content.scrollToTop(duration || 0);
            }
        }, 50);
    };
    ChatPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll) {
            setTimeout(function () {
                _this.userService.currentUser.first().subscribe(function (currentUser) {
                    _this.sender = currentUser;
                    _this.messageService.loadMoreObjects();
                    _this.messages = _this.messageService.getMessages(_this.sender.$key, _this.recipient.$key);
                    _this.messages.first().subscribe(function (messages) {
                        if (messages.length === 0) {
                            _this.messages = _this.messageService.getMessages(_this.recipient.$key, _this.sender.$key);
                        }
                        else {
                        }
                    });
                });
                infiniteScroll.complete();
            }, 900);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <custom-logged-header (click)="openPerfil(recipient.$key)" [user]="recipient"  [title]="pageTitle"> </custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-infinite-scroll position="top" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n  <ion-list  >\n    <div id="chatMessages">\n        <div ion-item  *ngFor="let m of messages | async" [class]="m.userId == sender.$key ? \'message special\' : \'message\' ">\n          <div class="innerMessage">\n            <h2 [class]="m.userId != sender.$key ? \'h2\' : \'hide\'">{{recipient.name}}</h2>\n            <h2 [class]="m.userId == sender.$key ? \'h2\' : \'hide\'">Você</h2>\n            <p class="message">{{m.text}}</p>\n            <p class="timestamp">{{m.timestamp | date :\'dd/MM/y H:mm\'}}</p>\n\n          </div>\n        </div>\n      </div>\n  </ion-list>\n  \n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-input type="text" placeholder="Mensagem" (keyup.enter)="sendMessage(newMessage); newMessage = \'\'" [(ngModel)]="newMessage"></ion-input>\n      <button ion-button item-right (click)="sendMessage(newMessage); newMessage = \'\'"  >\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\chat\chat.html"*/,
        })
        /*
         <ion-infinite-scroll (ionInfinite) = "doInfinite($event)">
            <ion-infinite-scroll-content>
              </ion-infinite-scroll-content>
          </ion-infinite-scroll>
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat_service__["a" /* ChatServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_message_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpottedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_native__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
* Generated class for the SpottedPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
var SpottedPage = (function () {
    function SpottedPage(loadingCtrl, cd, spottedService, alertCtrl, authService, userService, navCtrl, navParams, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.cd = cd;
        this.spottedService = spottedService;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.caminhoFoto = "";
        this.flagFoto = false;
        this.srcPhoto = '';
        this.flagSolicitacao = false;
        this.useURI = true;
        this.keySolicitacao = navParams.get('keySolicitacao');
        this.materia = navParams.get('materia');
        this.professor = navParams.get('professor');
        //console.log(this.materia,this.professor,this.keySolicitacao);
        if (this.keySolicitacao === undefined) {
            this.spottedForm = this.formBuilder.group({
                materia: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(20)]],
                dificuldadeMateria: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]],
                professor: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(20)]],
                dificuldadeProfessor: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]],
                conteudo: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(10)]]
            });
            this.flagSolicitacao = true;
        }
        else {
            this.spottedForm = this.formBuilder.group({
                dificuldadeMateria: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]],
                dificuldadeProfessor: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]],
                conteudo: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(10)]]
            });
            this.flagSolicitacao = false;
        }
        //console.log(this.flagSolicitacao);
    }
    SpottedPage.prototype.openSpotted = function () {
    };
    SpottedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        ////console.log('ionViewDidLoad SpottedPage');
    };
    SpottedPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        //console.log(this.srcPhoto,"1");
        if (this.flagSolicitacao === true) {
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
            var formSpotted = this.spottedForm.value;
            var materia_1 = formSpotted.materia;
            var professor_1 = formSpotted.professor;
            var dificuldadeMateria_1 = formSpotted.dificuldadeMateria;
            var dificuldadeProfessor_1 = formSpotted.dificuldadeProfessor;
            var conteudo_1 = formSpotted.conteudo;
            if (this.flagFoto) {
                //console.log(this.flagFoto);
                var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage().ref();
                var fileName = Math.floor(Date.now() / 1000);
                var imageRef = storageRef.child("spotteds/" + this.currentUser.$key + "/" + fileName + ".jpeg");
                //console.log(fileName,imageRef);
                imageRef.putString(this.caminhoFoto, __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
                    var spotted = new __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__["a" /* Spotted */](_this.currentUser.faculdade, _this.currentUser.curso, materia_1, professor_1, dificuldadeMateria_1, dificuldadeProfessor_1, conteudo_1, snapshot.downloadURL, _this.currentUser.$key, _this.currentUser.name, _this.currentUser.photo, 0, 0, currentTimestamp_1);
                    //console.log(this.srcPhoto,"2");
                    _this.spottedService.create(spotted).then(function () {
                        //console.log('spotted criado');
                        _this.showSuccesfulUploadAlert(); //snapshot.downloadURL);
                        _this.srcPhoto = '';
                        _this.caminhoFoto = "";
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                        loading.dismiss();
                    }).catch(function (error) {
                        //console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                });
            }
            else {
                this.spotted = new __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__["a" /* Spotted */](this.currentUser.faculdade, this.currentUser.curso, materia_1, professor_1, dificuldadeMateria_1, dificuldadeProfessor_1, conteudo_1, '', this.currentUser.$key, this.currentUser.name, this.currentUser.photo, 0, 0, currentTimestamp_1);
                this.spottedService.create(this.spotted).then(function () {
                    //console.log('spotted criado');
                    _this.showSuccesfulUploadAlert(); //snapshot.downloadURL);
                    _this.srcPhoto = '';
                    _this.caminhoFoto = "";
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                    loading.dismiss();
                }).catch(function (error) {
                    //console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                });
            }
        }
        else {
            this.spottedService.deleteSolicitacao(this.keySolicitacao);
            var materia_2 = this.materia;
            var professor_2 = this.professor;
            var currentTimestamp_2 = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
            var formSpotted = this.spottedForm.value;
            var dificuldadeMateria_2 = formSpotted.dificuldadeMateria;
            var dificuldadeProfessor_2 = formSpotted.dificuldadeProfessor;
            var conteudo_2 = formSpotted.conteudo;
            if (this.flagFoto) {
                var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage().ref();
                var fileName = Math.floor(Date.now() / 1000);
                var imageRef = storageRef.child("spotteds/" + this.currentUser.$key + "/" + fileName + ".jpeg");
                imageRef.putString(this.caminhoFoto, __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
                    var baguidafoto = snapshot.downloadURL;
                    var spotted = new __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__["a" /* Spotted */](_this.currentUser.faculdade, _this.currentUser.curso, materia_2, professor_2, dificuldadeMateria_2, dificuldadeProfessor_2, conteudo_2, baguidafoto, _this.currentUser.$key, _this.currentUser.name, _this.currentUser.photo, 0, 0, currentTimestamp_2);
                    _this.spottedService.create(spotted).then(function () {
                        //console.log('spotted criado');
                        _this.showSuccesfulUploadAlert(); //snapshot.downloadURL);
                        _this.srcPhoto = '';
                        _this.caminhoFoto = "";
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                        loading.dismiss();
                    }).catch(function (error) {
                        //console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                });
            }
            else {
                this.spotted = new __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__["a" /* Spotted */](this.currentUser.faculdade, this.currentUser.curso, materia_2, professor_2, dificuldadeMateria_2, dificuldadeProfessor_2, conteudo_2, '', this.currentUser.$key, this.currentUser.name, this.currentUser.photo, 0, 0, currentTimestamp_2);
                this.spottedService.create(this.spotted).then(function () {
                    //console.log('spotted criado');
                    _this.showSuccesfulUploadAlert(); //snapshot.downloadURL);
                    _this.srcPhoto = '';
                    _this.caminhoFoto = "";
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                    loading.dismiss();
                }).catch(function (error) {
                    //console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                });
            }
        }
        //loading.present(); 
    }; //fim do método onSubmit
    SpottedPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    SpottedPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    SpottedPage.prototype.upFromGallery = function (sourceType) {
        var _this = this;
        var cameraOptions = {
            quality: 80,
            destinationType: __WEBPACK_IMPORTED_MODULE_9_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            encodingType: __WEBPACK_IMPORTED_MODULE_9_ionic_native__["a" /* Camera */].EncodingType.JPEG,
            mediaType: __WEBPACK_IMPORTED_MODULE_9_ionic_native__["a" /* Camera */].MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 300,
            targetWidth: 300,
            sourceType: sourceType
        };
        //console.log(cameraOptions,"1");
        __WEBPACK_IMPORTED_MODULE_9_ionic_native__["a" /* Camera */].getPicture(cameraOptions).then(function (caminhoFoto) {
            _this.srcPhoto = caminhoFoto;
            //console.log(this.srcPhoto,"3");
            _this.caminhoFoto = "data:image/jpeg;base64," + caminhoFoto;
            //console.log(caminhoFoto,"1");
        }, function (e) {
            //console.log(e);
        });
        this.flagFoto = true;
    };
    SpottedPage.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Enviado',
            subTitle: 'Post enviado com sucesso ',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["E" /* Input */])('useURI'),
        __metadata("design:type", Boolean)
    ], SpottedPage.prototype, "useURI", void 0);
    SpottedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-spotted',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\spotted\spotted.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n  <ion-navbar transparent>\n      <h1 style="color:white;">Enviar</h1>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <br>\n    <div class="flex-container">\n    <form [formGroup]="spottedForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n      <div class="signup-form animated fadeInRight">\n        <strong *ngIf="flagSolicitacao">Nome da matéria</strong>\n        <strong *ngIf="!flagSolicitacao">{{materia | uppercase}}</strong>\n        <ion-item *ngIf="flagSolicitacao" class="input-signup">\n         <br *ngIf="flagSolicitacao"  >\n          <ion-input *ngIf="flagSolicitacao" type="text" placeholder="Digite o nome da disciplina" formControlName="materia">\n          </ion-input>\n        </ion-item>\n        <br>\n        <strong *ngIf="flagSolicitacao">Nome do Professor(a)</strong>\n        <strong *ngIf="!flagSolicitacao">{{professor | capitalize }}</strong>\n        <br *ngIf="flagSolicitacao"  >\n        <ion-item *ngIf="flagSolicitacao" class="input-signup">\n          <ion-input *ngIf="flagSolicitacao" type="text" placeholder="Digite o nome do professor(a)" formControlName="professor">\n          </ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label>Nível de dificuldade da matéria</ion-label>\n          <ion-select formControlName="dificuldadeMateria" >\n            <ion-option value="Fácil">Fácil</ion-option>\n            <ion-option value="Médio">Médio</ion-option>\n            <ion-option value="Difícil">Difícil</ion-option>\n          </ion-select>\n        </ion-item>\n        <br>\n        <ion-item style="width: 100%">\n          <ion-label>Nível de dificuldade do professor</ion-label>\n          <ion-select formControlName="dificuldadeProfessor" >\n            <ion-option value="Fácil">Fácil</ion-option>\n            <ion-option value="Médio">Médio</ion-option>\n            <ion-option value="Difícil">Difícil</ion-option>\n          </ion-select>\n        </ion-item>\n        <br>\n        <strong>Conte suas experiências pessoais com a matéria</strong>\n        <br>\n        <ion-item class="input-signup">\n          <ion-textarea type="text" rows="4" formControlName="conteudo"></ion-textarea>\n        </ion-item>\n        <p>Forneça detalhes relevantes como qualidade da aula,materiais necessários,estilo de provas,listas,trabalhos,etc.</p>\n          <!-- cordova.js required for cordova apps \n\n        <ion-item>\n          <ion-icon name="image" item-left></ion-icon>\n          <input type="file" accept="image/*" (change)="onPhoto($event)">\n        </ion-item>\n        <p>manda aquela foto!</p>\n        <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress">\n        </progress-bar>\n          \n-->        <br>\n\n\n        <div class="button">\n          <button ion-button round class="signup-button" type="submit" [disabled]="spottedForm.invalid">Enviar</button>\n        </div>\n      </div>\n      <br>\n    </form>\n  \n    \n    <img   *ngIf ="srcPhoto" width="218" height="280" src="data:image/jpeg;base64,{{srcPhoto}}">\n    <br>\n  </div>\n  <ion-fab right bottom>\n    <button ion-fab color="primary"\n      (click)="upFromGallery(0)"><ion-icon name="md-image"></ion-icon></button>\n  </ion-fab> \n </ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\spotted\spotted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], SpottedPage);
    return SpottedPage;
}());

//# sourceMappingURL=spotted.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DenunciaService = (function (_super) {
    __extends(DenunciaService, _super);
    function DenunciaService(userService, af, http, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.af = af;
        _this.http = http;
        _this.firebaseApp = firebaseApp;
        _this.setDenuncias();
        return _this;
    }
    DenunciaService.prototype.delete = function (denuncia) {
        return this.af.database.object("/denuncias/" + denuncia.$key).remove().catch(this.handlePromiseError);
    };
    DenunciaService.prototype.get = function (userId) {
        return this.af.database.object("/denuncias/" + userId)
            .catch(this.handleObservableError);
    };
    DenunciaService.prototype.getAllDenuncias = function () {
        return this.af.database.list("denuncias/", {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    DenunciaService.prototype.getDenuncias = function (userId1) {
        return this.af.database.list("/denuncias/" + userId1, {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    DenunciaService.prototype.create = function (denuncia) {
        return this.af.database.list("/denuncias/").push(denuncia).catch(this.handlePromiseError);
    };
    DenunciaService.prototype.setDenuncias = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.denuncias = _this.af.database.list("/denuncias/", {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (denuncias) {
                    return denuncias.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    DenunciaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0_angularfire2__["f" /* FirebaseApp */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], Object])
    ], DenunciaService);
    return DenunciaService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=denuncia.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, username, email, distance, photo, timestampConcordou, curso, faculdade) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.distance = distance;
        this.photo = photo;
        this.timestampConcordou = timestampConcordou;
        this.curso = curso;
        this.faculdade = faculdade;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






//import * as firebase from 'firebase';
/*
  Generated class for the UserProvider provider.
 
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserServiceProvider = (function (_super) {
    __extends(UserServiceProvider, _super);
    function UserServiceProvider(af, platform, 
        /*@Inject(FirebaseApp) public firebaseApp: firebase.app.App*/
        firebaseApp, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.platform = platform;
        _this.firebaseApp = firebaseApp;
        _this.http = http;
        // nao precisa mais   this.users = this.af.database.list(`/users`);
        _this.listenAuthState();
        return _this;
    }
    UserServiceProvider.prototype.listenAuthState = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.currentUser = _this.af.database.object("/users/" + authState.auth.uid);
                // this.setUsersPerto(this.arrayUsuariosDistantes);
                //console.log("usersprovider");
                _this.setUsers(authState.auth.uid);
            }
        });
    };
    UserServiceProvider.prototype.setUsers = function (uidToExclude) {
        this.users = this.af.database.list("users", {
            query: {
                orderByChild: 'name'
            }
        }).map(function (users) {
            return users.filter(function (user) { return user.$key !== uidToExclude; });
        });
    };
    UserServiceProvider.prototype.get = function (userId) {
        return this.af.database.object("/users/" + userId)
            .catch(this.handleObservableError);
    };
    UserServiceProvider.prototype.create = function (user, uuid) {
        //   return this.af.database.list(`/users`).push(user);
        //return this.users.push(user); 
        return this.af.database.object("/users/" + uuid).set(user).catch(this.handlePromiseError);
    };
    UserServiceProvider.prototype.edit = function (user) {
        return this.currentUser.update(user).catch(this.handlePromiseError);
    };
    UserServiceProvider.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp.storage().ref().child("/users/" + userId).put(file);
    };
    /* // OUTRO MODO DE FAZER
    ref = firebase.database().ref('users/');
    
    create(user:User) {
     let newData = this.ref.push();
     newData.set(user);
    }
    
    
    */
    UserServiceProvider.prototype.userExists = function (username) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        }).map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    UserServiceProvider.prototype.delete = function (user /*userId:string*/) {
        return this.af.database.object("/users/" + user).remove().catch(this.handlePromiseError);
    };
    UserServiceProvider.prototype.emailExists = function (email) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        }).map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angularfire2__["f" /* FirebaseApp */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function (_super) {
    __extends(AuthServiceProvider, _super);
    function AuthServiceProvider(auth, af, http) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.af = af;
        _this.http = http;
        _this.authenticatedref = _this.auth;
        _this.auth
            .do(function (user) {
            if (user) {
                _this.userId = user.uid;
                _this.updateOnConnect();
            }
        })
            .subscribe();
        return _this;
        //console.log('Hello AuthProvider Provider');
    }
    AuthServiceProvider.prototype.createAuthUser = function (user) {
        return this.auth.createUser(user).catch(this.handlePromiseError);
    };
    AuthServiceProvider.prototype.signinWithEmail = function (user) {
        return this.auth.login(user).then(function (authState) {
            return authState != null;
        }).catch(this.handlePromiseError);
    };
    AuthServiceProvider.prototype.facebookLogin = function (fb) {
        return fb.login(['email'])
            .then(function (response) {
            var facebookCredential = firebase.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            firebase.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { console.log(error); });
    };
    AuthServiceProvider.prototype.logout = function () {
        return this.auth.logout();
    };
    Object.defineProperty(AuthServiceProvider.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                //console.log(this.auth);
                _this.auth
                    .first().
                    subscribe(function (authState) {
                    (authState) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthServiceProvider.prototype.updateOnConnect = function () {
        var _this = this;
        return this.af.database.object('.info/connected')
            .do(function (connected) {
            var status = connected.$value ? 'online' : 'offline';
            _this.updateStatus(status);
        })
            .subscribe();
    };
    AuthServiceProvider.prototype.updateStatus = function (status) {
        if (!this.userId)
            return;
        this.af.database.object("users/" + this.userId).update({ status: status });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDraw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasDraw = (function () {
    function CanvasDraw(platform, renderer) {
        //console.log('Hello CanvasDraw Component');
        this.platform = platform;
        this.renderer = renderer;
        this.currentColour = '#1abc9c';
        this.modeBush = false;
        this.brushSize = 10;
        this.availableColours = [
            "#FFFFFF",
            "#000000",
            '#3897F0',
            '#70C050',
            '#FDCB5C',
            '#FD8D32',
            '#ED4956',
            '#D10869',
            '#A307BA',
            "#ED0013",
            "#ED858E",
            "#FFD2D3",
            "#FFC382",
            "#D28F46",
            "#996439",
            "#432324",
            "#1C4A29"
        ];
    }
    CanvasDraw.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        var ctx = this.canvasElement.getContext("2d");
        // ctx.drawImage(this.src,0,0, this.platform.width(), this.platform.height() );
        var self = this;
        var image = new Image();
        image.onload = function () {
            ctx.drawImage(image, 0, 0, self.platform.width(), self.platform.height());
        };
        image.src = this.src;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    CanvasDraw.prototype.initModeBrush = function () {
        this.modeBush = true;
    };
    CanvasDraw.prototype.changeColour = function (colour) {
        this.currentColour = colour;
    };
    CanvasDraw.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    CanvasDraw.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    CanvasDraw.prototype.handleMove = function (ev) {
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        if (this.modeBush) {
            var ctx = this.canvasElement.getContext('2d');
            ctx.beginPath();
            ctx.lineJoin = "round";
            ctx.moveTo(this.lastX, this.lastY);
            ctx.lineTo(currentX, currentY);
            ctx.closePath();
            ctx.strokeStyle = this.currentColour;
            ctx.lineWidth = this.brushSize;
            ctx.stroke();
        }
        this.lastX = currentX;
        this.lastY = currentY;
    };
    CanvasDraw.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myCanvas'),
        __metadata("design:type", Object)
    ], CanvasDraw.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CanvasDraw.prototype, "src", void 0);
    CanvasDraw = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'canvas-draw',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\canvas-draw\canvas-draw.html"*/'<canvas #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"  class="canvas-draw"></canvas>\n'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\canvas-draw\canvas-draw.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
    ], CanvasDraw);
    return CanvasDraw;
}());

//# sourceMappingURL=canvas-draw.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_mensagem_model__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_ai_javascript__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_environment__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BotchatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BotchatPage = (function () {
    function BotchatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = __WEBPACK_IMPORTED_MODULE_6__providers_environment__["a" /* environment */].dialogflow.angularBot;
        this.client = new __WEBPACK_IMPORTED_MODULE_4_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: this.token });
        this.conversation = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        /* let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;
         const botMessage = new Mensagem('Olá, eu sou a juana, você quer ser minha amiguinha?','Usuario',currentTimestamp);
         this.mensagens.push(botMessage);
       */
    }
    BotchatPage.prototype.converse = function (msg) {
        var _this = this;
        var currentTimestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
        var userMessage = new __WEBPACK_IMPORTED_MODULE_2__models_mensagem_model__["a" /* Mensagem */](msg, 'user', currentTimestamp);
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new __WEBPACK_IMPORTED_MODULE_2__models_mensagem_model__["a" /* Mensagem */](speech, 'Eva', currentTimestamp);
            _this.update(botMessage);
            _this.scrollToBottom();
        });
    };
    BotchatPage.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    BotchatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        });
    };
    BotchatPage.prototype.ionViewDidLoad = function () {
        this.mensagens = this.conversation.asObservable()
            .scan(function (acc, val) { return acc.concat(val); });
        //console.log('ionViewDidLoad BotchatPage');
    };
    BotchatPage.prototype.sendMessage = function (newMessage) {
        if (newMessage) {
            this.converse(newMessage);
            /*
             let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;
               const botMessage = new Mensagem(newMessage,'user',currentTimestamp);
               this.mensagens.push(botMessage);
                 */ }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], BotchatPage.prototype, "content", void 0);
    BotchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-botchat',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\botchat\botchat.html"*/'<!--\n  Generated template for the BotchatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Eva</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>    <div id="chatMessages">\n        <div ion-item  *ngFor="let message of mensagens | async" [class]="message.sentBy !== \'Eva\' ? \'message special\' : \'message\' ">\n          <div class="innerMessage">\n            <h2 [class]="message.sentBy === \'Eva\' ? \'h2\' : \'hide\'">{{message.sentBy}}</h2>\n            <h2 [class]="message.sentBy !== \'Eva\' ? \'h2\' : \'hide\'">Você</h2>\n            <p class="message">{{message.content}}</p>\n          </div>\n        </div>\n      </div></ion-list>\n\n  \n  </ion-content>\n  \n  \n  <ion-footer>\n    <ion-toolbar>\n      <ion-item no-lines >\n        <ion-input type="text"  placeholder="Mensagem" (keyup.enter)="sendMessage(newMessage); newMessage = \'\'" (click)="sendMessage(newMessage); newMessage = \'\'" [(ngModel)]="newMessage"></ion-input>\n        <button ion-button item-right >\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-toolbar>\n  </ion-footer>\n  '/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\botchat\botchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BotchatPage);
    return BotchatPage;
}());

//# sourceMappingURL=botchat.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(userId, text, timestamp) {
        this.userId = userId;
        this.text = text;
        this.timestamp = timestamp;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpottedDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_bloqueado_model__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_bloqueado_bloqueado_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spotted_spotted_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_comentario_model__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_denuncia_denuncia_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_denuncia_model__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SpottedDetalhesPage = (function () {
    function SpottedDetalhesPage(actionSheetCtrl, bloqueadoService, alertCtrl, denunciaService, userService, navCtrl, spottedService, navParams) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bloqueadoService = bloqueadoService;
        this.alertCtrl = alertCtrl;
        this.denunciaService = denunciaService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.spottedService = spottedService;
        this.navParams = navParams;
        this.headerImage = "assets/images/background-small/33.jpg";
        this.active = true;
        this.data = navParams.get('spotted');
        this.usuariosperto = navParams.get('usuariosperto');
        this.numerodecomentarios = this.data.numComentarios;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.chaveUsuarioAtual = currentUser.$key;
            _this.usernameAtual = currentUser.name;
            _this.photo = currentUser.photo;
        });
        this.comentarios = this.spottedService.getComentarios(this.data.$key);
    }
    SpottedDetalhesPage.prototype.apresentarActionSheetSpotted = function (objeto) {
        var _this = this;
        var currentTimestamp = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database.ServerValue.TIMESTAMP;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Opções",
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Denunciar",
                    handler: function () {
                        var alert2 = _this.alertCtrl.create({
                            title: 'Informe o motivo da denúncia',
                            inputs: [
                                {
                                    name: 'motivo',
                                    placeholder: 'Motivo'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Enviar',
                                    handler: function (data) {
                                        _this.denunciaService.create(new __WEBPACK_IMPORTED_MODULE_10__models_denuncia_model__["a" /* Denuncia */](data.motivo, _this.chaveUsuarioAtual, objeto.userId, objeto.$key, '', objeto.userNome, currentTimestamp, objeto.conteudo));
                                    }
                                }
                            ]
                        });
                        alert2.present();
                        console.log('clicou em editar');
                    }
                },
                {
                    text: "Bloquear " + objeto.userNome,
                    handler: function () {
                        if (_this.chaveUsuarioAtual === objeto.userId) {
                            var alert2 = _this.alertCtrl.create({
                                title: 'Você não pode bloquear a si mesmo',
                                buttons: [
                                    {
                                        text: 'OK',
                                        role: 'cancel',
                                        handler: function () {
                                            //console.log('Cancel clicked');
                                        }
                                    }
                                ]
                            });
                            alert2.present();
                        }
                        else {
                            var alert2 = _this.alertCtrl.create({
                                title: 'Deseja bloquear ' + objeto.userNome + ' ?',
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function () {
                                            //console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Sim',
                                        handler: function () {
                                            _this.bloqueadoService.create(new __WEBPACK_IMPORTED_MODULE_0__models_bloqueado_model__["a" /* Bloqueado */](_this.chaveUsuarioAtual, objeto.userId, objeto.userNome, currentTimestamp, 1));
                                            _this.bloqueadoService.create(new __WEBPACK_IMPORTED_MODULE_0__models_bloqueado_model__["a" /* Bloqueado */](objeto.userId, _this.chaveUsuarioAtual, _this.usernameAtual, currentTimestamp, 2));
                                        }
                                    }
                                ]
                            });
                            alert2.present();
                        }
                        console.log('clicou em editar');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpottedDetalhesPage.prototype.apresentarActionSheetComentario = function (objeto) {
        var _this = this;
        var currentTimestamp = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database.ServerValue.TIMESTAMP;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Opções",
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Denunciar",
                    handler: function () {
                        var alert2 = _this.alertCtrl.create({
                            title: 'Informe o motivo da denúncia',
                            inputs: [
                                {
                                    name: 'motivo',
                                    placeholder: 'Motivo'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Enviar',
                                    handler: function (data) {
                                        var denuncia = new __WEBPACK_IMPORTED_MODULE_10__models_denuncia_model__["a" /* Denuncia */](data.motivo, _this.chaveUsuarioAtual, objeto.userId, '', objeto.$key, objeto.apelido, currentTimestamp, objeto.text);
                                        console.log(denuncia, objeto);
                                        _this.denunciaService.create(denuncia);
                                    }
                                }
                            ]
                        });
                        alert2.present();
                        console.log('clicou em editar');
                    }
                },
                {
                    text: "Bloquear " + objeto.apelido,
                    handler: function () {
                        if (_this.chaveUsuarioAtual === objeto.userId) {
                            var alert2 = _this.alertCtrl.create({
                                title: 'Você não pode bloquear a si mesmo',
                                buttons: [
                                    {
                                        text: 'OK',
                                        role: 'cancel',
                                        handler: function () {
                                            //console.log('Cancel clicked');
                                        }
                                    }
                                ]
                            });
                            alert2.present();
                        }
                        else {
                            var alert2 = _this.alertCtrl.create({
                                title: 'Deseja bloquear ' + objeto.apelido + ' ?',
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function () {
                                            //console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Sim',
                                        handler: function () {
                                            _this.bloqueadoService.create(new __WEBPACK_IMPORTED_MODULE_0__models_bloqueado_model__["a" /* Bloqueado */](_this.chaveUsuarioAtual, objeto.userId, objeto.userNome, currentTimestamp, 1));
                                            _this.bloqueadoService.create(new __WEBPACK_IMPORTED_MODULE_0__models_bloqueado_model__["a" /* Bloqueado */](objeto.userId, _this.chaveUsuarioAtual, _this.usernameAtual, currentTimestamp, 2));
                                        }
                                    }
                                ]
                            });
                            alert2.present();
                        }
                        console.log('clicou em editar');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpottedDetalhesPage.prototype.ionViewDidLoad = function () {
        this.spotted1 = this.spottedService.retornaObjetoSpotted(this.data);
    };
    SpottedDetalhesPage.prototype.comentar = function (newComentario) {
        var _this = this;
        this.numerodecomentarios++;
        //console.log(newComentario);
        if (newComentario) {
            //console.log(newComentario);
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database.ServerValue.TIMESTAMP;
            //console.log(this.comentarios);
            //console.log(this.photo);
            //console.log(new Comentario(this.chaveUsuarioAtual, newComentario, currentTimestamp,this.usernameAtual,this.photo));
            this.spottedService.comentar(new __WEBPACK_IMPORTED_MODULE_6__models_comentario_model__["a" /* Comentario */](this.chaveUsuarioAtual, newComentario, this.usernameAtual, this.photo, currentTimestamp_1), this.data.$key).
                then(function () {
                _this.spotted1.update({
                    lastComentario: newComentario,
                    numComentarios: _this.numerodecomentarios,
                    timestampUltimoComentario: currentTimestamp_1
                });
            });
            //console.log(this.comentarios);
        }
    };
    SpottedDetalhesPage.prototype.openPerfil = function (userId) {
        var _this = this;
        var distancia;
        this.usuariosperto.forEach(function (a) {
            if (userId === a.key) {
                distancia = a.distancia;
            }
        });
        this.userService.get(userId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__perfil_perfil__["a" /* PerfilPage */], {
                usuario: user,
                usuariosperto: distancia
            });
        });
    };
    SpottedDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-spotted-detalhes',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\spotted-detalhes\spotted-detalhes.html"*/'<!--- Theme Parallax - News -->\n<ion-header header-ios>\n  <ion-navbar transparent >\n  </ion-navbar>\n</ion-header>\n<!--- Header Big Image-->\n<ion-content elastic-header>\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n    <div title-block *ngIf="data != null">\n      <!--- Category -->\n      <span new-category></span>\n      <!--- Parallax Title -->\n      <h1 parallax-title text-wrap>Matéria - {{data.materia}} <br> </h1>     \n       <h2 parallax-title text-wrap>Professor(a) - {{data.professor}}</h2>\n      <h2 parallax-title text-wrap>by {{data.userNome}}</h2>\n\n    </div>\n  </ion-item>\n  <ion-item *ngIf="data != null">\n      <!--- Avatar -->\n      <ion-avatar item-start>\n        <img [src]=" data.userPhoto || \'assets/images/no-photo.jpg\'" />\n      </ion-avatar>\n      <h1 item-title (tap)="openPerfil(data.userId)">{{data.userNome}}</h1>\n      <div #stories id="stories" padding=""></div>\n\n\n      <!-- Content Title-->\n      <!-- Content Description-->\n      <p parallax-description text-wrap>                         <img   *ngIf ="data.photo" width="218" height="300" src="{{data.photo}}">\n        <br>{{data.conteudo}}<br>Dificuldade da matéria - {{data.dificuldadeMateria}}<br>Dificuldade do professor(a) - {{data.dificuldadeProfessor}}</p>\n      <!--- Button Share-->\n      <button item-end ion-button color="primary" button-action-shit >\n        <ion-icon (tap)="apresentarActionSheetSpotted(data)" (click)="apresentarActionSheetSpotted(data)"  name="more"></ion-icon>\n      </button>\n  </ion-item>\n  <strong text-align=center>-</strong>\n\n  <ion-list  *ngFor="let c of comentarios | async" >\n  \n    <ion-item >\n          <!--- Avatar -->\n          <ion-avatar item-start>\n            <img [src]=" c.photo || \'assets/images/no-photo.jpg\'" />\n          </ion-avatar>\n          <h1 (tap)="openPerfil(c.userId)" item-title>{{c.apelido}}</h1>\n    \n          <!-- Content Title-->\n          <!-- Content Description-->\n          <p parallax-description text-wrap>{{c.text}}</p>\n          <!--- Button Share-->\n          <button item-end ion-button color="primary" button-action-shit >\n            <ion-icon (tap)="apresentarActionSheetComentario(c)" (click)="apresentarActionSheetComentario(c)" name="more"></ion-icon>\n          </button>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-item no-lines>\n        <ion-input type="text" placeholder="Digite seu comentário" (keyup.enter)="comentar(newComentario); newComentario = \'\'"  [(ngModel)]="newComentario"></ion-input>\n        <button ion-button item-right  (click)="comentar(newComentario); newComentario = \'\'" >\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\spotted-detalhes\spotted-detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_bloqueado_bloqueado_service__["a" /* BloqueadoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_denuncia_denuncia_service__["a" /* DenunciaService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], SpottedDetalhesPage);
    return SpottedDetalhesPage;
}());

//# sourceMappingURL=spotted-detalhes.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stories_list_stories_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
* Generated class for the SignupPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
var SignupPage = (function () {
    function SignupPage(loadingCtrl, alertCtrl, authService, userService, navCtrl, navParams, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.usuarioFace = navParams.get('usuarioFace');
        //console.log(this.usuarioFace,"USUARIO FACE");
        this.signupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3)]],
            curso: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3)]],
            faculdade: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern(this.emailRegex)])]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8)]],
            termos: [false, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('true')],
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.openTermos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__stories_list_stories_list__["a" /* StoriesListPage */]);
    };
    SignupPage.prototype.LoginFacebook = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.usuarioFace;
        var curso = this.usuarioFace.name.replace(/^\s+|\s+$/g, "");
        formUser.photo = this.usuarioFace.picture.data.url;
        formUser.distance = 100;
        delete formUser.picture;
        this.userService.emailExists(formUser.email).first().subscribe(function (userExists) {
            _this.authService.createAuthUser({
                email: formUser.email,
                password: formUser.id
            }).then(function (authState) {
                delete formUser.id;
                var uuid = authState.auth.uid;
                _this.userService.create(formUser, uuid).then(function () {
                    //console.log('usuario cadastrado');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                    loading.dismiss();
                }).catch(function (error) {
                    //console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                }).catch(function (error) {
                    //console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                });
            });
            //console.log("testando form");
        });
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.signupForm.value;
        formUser.photo = '';
        formUser.timestampConcordou = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
        formUser.distance = 99;
        //this.userService.userExists(curso).take(1).subscribe(
        this.userService.emailExists(formUser.email).first().subscribe(function (userExists) {
            if (!userExists) {
                _this.authService.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authState) {
                    delete formUser.password;
                    var uuid = authState.auth.uid;
                    _this.userService.create(formUser, uuid).then(function () {
                        //console.log('usuario cadastrado');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                        loading.dismiss();
                    }).catch(function (error) {
                        //console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    }).catch(function (error) {
                        ////console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                });
                //console.log("testando form");
            }
            else {
                _this.showAlert('o email já está sendo utilizado em outra conta');
                loading.dismiss();
            }
        });
    }; //fim do método onSubmit
    SignupPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    SignupPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n    <div class="flex-container">\n\n      <h1>Criar conta</h1>\n\n<form [formGroup]="signupForm" *ngIf="usuarioFace === undefined; else facebookLogin" (ngSubmit) = "onSubmit(); $event.preventDefault()">\n\n      <div class="signup-form animated fadeInRight"  >\n\n                <strong>Qual é o nome?</strong>\n\n        <ion-item class="input-signup"  >\n\n          <ion-input type="text" placeholder = "Nome" formControlName = "name"></ion-input>\n\n        </ion-item> \n\n        <p margin-bottom></p>\n\n        <strong>Qual curso você faz?</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="text" placeholder = "Curso" formControlName = "curso"></ion-input>\n\n        </ion-item>\n\n        <p margin-bottom></p>\n\n        <strong>Faculdade</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="text" placeholder = "Faculdade" formControlName = "faculdade"></ion-input>\n\n        </ion-item>\n\n        <p margin-bottom></p>\n\n        <strong>Email</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="email" placeholder = "Email" formControlName = "email"></ion-input>\n\n        </ion-item>\n\n        <p margin-bottom>Poderá ser necessário validar este e-mail.</p>\n\n        <strong>Crie uma nova senha</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="password" placeholder = "Senha" formControlName = "password"></ion-input>\n\n        </ion-item>\n\n        <p>Escolha pelo menos oito caracteres.</p>\n\n        <br>\n\n        <p style="width:100%; margin-left:7%;"(click)="openTermos()">Li e concordo com os termos e condições\n\n            <ion-checkbox    formControlName = "termos"></ion-checkbox>\n\n        </p>\n\n       \n\n      </div>\n\n      \n\n      <br>\n\n      <div class="button">\n\n        <button ion-button round class="signup-button" \n\n        type = "submit" [disabled]="signupForm.invalid" >Cadastrar</button>\n\n      </div>\n\n    </form>\n\n    <ng-template #facebookLogin>\n\n        <h2>{{usuarioFace.name}}</h2>\n\n        <h3>{{usuarioFace.email}}</h3>\n\n        <p>\n\n            <img src="{{usuarioFace.picture.data.url}}" width="100" alt="{{usuarioFace.name}}" />\n\n          </p>\n\n          <button ion-button block outline (click)="LoginFacebook()" color="light" class="login-button">Cadastrar</button>\n\n\n\n        </ng-template>\n\n    </div>\n\n\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClienteLoginPage = (function () {
    function ClienteLoginPage(loadingCtrl, alertCtrl, authService, formBuilder, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClienteLoginPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    ClienteLoginPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    ClienteLoginPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
    };
    ClienteLoginPage.prototype.onHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]).then(function (hasAccess) {
            //console.log('Autorizado : ', hasAccess);
        }).catch(function (err) {
            //console.log('Não Autorizado : ', err);
        });
    };
    ClienteLoginPage.prototype.onLogout = function () {
        this.authService.logout();
    };
    ClienteLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\clienteLogin\clientelogin.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar transparent>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <user-info [user] = "user"></user-info>\n\n\n\n  <div class="flex-container">\n\n    <h1>Perfil</h1>\n\n\n\n    <div class="login-form animated fadeInRight">\n\n     \n\n\n\n<ion-item>\n\n  <ion-icon name="person" item-left></ion-icon>\n\n  <strong>{{user.name}}</strong>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-icon name="school" item-left></ion-icon>\n\n    <strong>{{user.curso}}</strong>\n\n    <p>{{user.faculdade}}</p>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-icon name="locate" item-left></ion-icon>\n\n       <h1>distancia</h1>\n\n  </ion-item>\n\n    \n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\clienteLogin\clientelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
    ], ClienteLoginPage);
    return ClienteLoginPage;
}());

//# sourceMappingURL=clientelogin.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificacoesPage = (function () {
    function NotificacoesPage(menuCtrl, messageService, userService, authService, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.messageService = messageService;
        this.userService = userService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scrou = 8;
        this.podeir = 1;
    }
    NotificacoesPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'user-menu');
    };
    NotificacoesPage.prototype.ionViewDidLoad = function () {
    };
    NotificacoesPage.prototype.visualizar = function (notificacao) {
        var _this = this;
        var recipientUserId = notificacao.senderKey;
        this.userService.get(recipientUserId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], {
                recipientUser: user
            });
        });
    };
    NotificacoesPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    NotificacoesPage.prototype.scrollToTop = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content._scroll) {
                _this.content.scrollToTop(duration || 0);
            }
        }, 50);
    };
    NotificacoesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll) {
            setTimeout(function () {
                _this.userService.currentUser.first().subscribe(function (currentUser) {
                    _this.sender = currentUser;
                    _this.messageService.loadMoreObjects();
                    _this.notificacoes = _this.messageService.getNotificacoes(_this.sender.$key);
                    _this.notificacoes.first().subscribe(function (notificacoes) {
                        if (notificacoes.length === 0) {
                            _this.notificacoes = _this.messageService.getNotificacoes(_this.sender.$key);
                        }
                        else {
                        }
                    });
                });
                infiniteScroll.complete();
            }, 900);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */])
    ], NotificacoesPage.prototype, "content", void 0);
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\notificacoes\notificacoes.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar transparent>\n      <h1 style="color:white;">Notificações</h1>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <br>\n  <div class="flex-container">\n <div class="signup-form animated fadeInRight"  >\n    <ion-list *ngFor="let notificacao of notificacoes | async ">\n    <hr>   \n    <div (tap)="visualizar(notificacao)">\n         <h3>{{notificacao.titulo}} te enviou uma mensagem: </h3>\n      <p>"{{notificacao.texto}}"</p> \n    <br>  <p>   {{notificacao.timestamp | date : \'dd/MM/y H:mm\'  }} \n      </p>\n    </div> \n      \n        \n<hr>\n        </ion-list>\n        <ion-infinite-scroll position="top" (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\notificacoes\notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], NotificacoesPage);
    return NotificacoesPage;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserProfilePage = (function () {
    function UserProfilePage(menuCtrl, cd, authService, userService, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.cd = cd;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.canEdit = false;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'user-menu');
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        //console.log('ionViewDidLoad UserProfilePage');
    };
    UserProfilePage.prototype.onPhoto = function (event) {
        this.filePhoto = event.target.files[0];
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        this.userService.edit({
            name: this.currentUser.name, distance: this.currentUser.distance, curso: this.currentUser.curso, faculdade: this.currentUser.faculdade, photo: photoUrl || '' ||
                this.currentUser.photo
        }).then(function () {
            _this.canEdit = false;
            _this.filePhoto = undefined;
            _this.uploadProgress = 0;
        });
    };
    UserProfilePage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'user-menu');
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.filePhoto) {
            //console.log("ver caminho da foto");
            //console.log(this.filePhoto);
            var uploadTask_1 = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);
            uploadTask_1.on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                _this.cd.detectChanges();
            }, function (error) {
            }, function () {
                //console.log("url de download da foto");
                //console.log(uploadTask.snapshot.downloadURL);
                _this.editUser(uploadTask_1.snapshot.downloadURL);
            });
        }
        else {
            this.editUser();
        }
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\user-profile\user-profile.html"*/'<!--\n  Generated template for the UserProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <custom-logged-header [title] = "\'Perfil\'"> </custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<user-info [user] = "currentUser"></user-info>\n<button ion-button block (click) = "canEdit =!canEdit">\n  Editar\n</button> \n<form (ngSubmit)="onSubmit($event)" *ngIf="canEdit" #profileForm="ngForm" >\n<ion-item>\n  <ion-icon name="person" item-left></ion-icon>\n  <ion-input type="text" placeholder="Nome" name="name" [(ngModel)]="currentUser.name" required minLength="3">\n  </ion-input>\n</ion-item>\n<ion-item>\n    <ion-icon name="school" item-left></ion-icon>\n    <ion-input type="text" placeholder="Curso" name="curso" [(ngModel)]="currentUser.curso" required minLength="3">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="school" item-left></ion-icon>\n    <ion-input type="text" placeholder="Faculdade" name="faculdade" [(ngModel)]="currentUser.faculdade" required minLength="3">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-icon name="locate" item-left></ion-icon>\n    <ion-range min="0" max="200" step="1" pin="true"  [(ngModel)]="currentUser.distance"  name="distance">\n      <ion-label range-left>0 km</ion-label>\n      <ion-label range-right>200 km</ion-label>\n    </ion-range>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="image" item-left></ion-icon>\n<input type="file" accept="image/*" (change) = "onPhoto($event)">\n  </ion-item>\n  <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress">\n  </progress-bar>\n  <br>\n<button ion-button block type="submit" [disabled]="profileForm.form.invalid">Salvar</button>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__ = __webpack_require__(103);

var BaseComponent = (function () {
    function BaseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNav();
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Deseja sair?',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.authService.logout().then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__["a" /* WelcomePage */]);
                            _this.menuCtrl.enable(false, 'user-menu');
                        });
                    }
                },
                { text: 'Não' }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfissionalLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spotted_spotted__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfissionalLoginPage = (function () {
    function ProfissionalLoginPage(spottedService, userService, navCtrl, navParams) {
        this.spottedService = spottedService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfissionalLoginPage.prototype.openSpotted = function (key, materia, professor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__spotted_spotted__["a" /* SpottedPage */], {
            keySolicitacao: key,
            materia: materia,
            professor: professor
        });
    };
    ProfissionalLoginPage.prototype.ionViewWillEnter = function () {
    };
    ProfissionalLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.solicitacoes = this.spottedService.solicitacoes;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        //console.log('ionViewDidLoad SpottedPage');
    };
    ProfissionalLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\profissionalLogin\profissionallogin.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <h1 style="color:white;">Solicitações de Matéria</h1>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <br>\n\n    <div class="flex-container">\n\n   <div class="signup-form animated fadeInRight"  >\n\n      <ion-list *ngFor="let solicitacao of solicitacoes | async ">\n\n      <hr>    \n\n          <h3>Curso : {{solicitacao.usuarioCurso}}</h3>\n\n          <p>Faculdade : {{solicitacao.usuarioFaculdade}}</p> \n\n          <h4>Matéria : {{solicitacao.materia}}</h4>\n\n         <p>Professor(a) : {{solicitacao.professor}}</p>\n\n        <br>  <p>   {{solicitacao.timestamp | date : \'dd/MM/y H:mm\'  }} \n\n          </p>\n\n          <button ion-button (tap)="openSpotted(solicitacao.$key,solicitacao.materia,solicitacao.professor)">\n\n              <ion-icon name="star"></ion-icon>\n\n            AVALIAR\n\n          </button>\n\n  <hr>\n\n          </ion-list>\n\n     \n\n    </div>\n\n  </div>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\profissionalLogin\profissionallogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], ProfissionalLoginPage);
    return ProfissionalLoginPage;
}());

//# sourceMappingURL=profissionallogin.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(438);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_notificacoes_notificacoes__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_stories_list_stories_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_canvas_draw_canvas_draw__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_botchat_botchat__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_progress_bar_progress_bar__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_profile_user_profile__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_message_message_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_capitalize_capitalize__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_custom_logged_header_custom_logged_header__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_clienteLogin_clientelogin__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_spotted_detalhes_spotted_detalhes__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera_preview__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_profissionalLogin_profissionallogin__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_chat_chat_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_message_box_message_box__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_user_menu_user_menu__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_user_info_user_info__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_spotted_spotted__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_spotted_spotted_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_story_photo_story_photo__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_story_story_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_denuncia_denuncia_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_denuncias_denuncias__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_facebook__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_backbutton_backbutton__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_bloqueado_bloqueado_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_deeplinks__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var firebaseAppConfig = {
    apiKey: "AIzaSyD9xiuWEjUJuSdhg3xlfdyJstzCnjFN0bw",
    authDomain: "aluno-amigo.firebaseapp.com",
    databaseURL: "https://aluno-amigo.firebaseio.com",
    storageBucket: "aluno-amigo.appspot.com",
    messagingSenderId: "823497725749"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_24_angularfire2__["e" /* AuthProviders */].Custom,
    method: __WEBPACK_IMPORTED_MODULE_24_angularfire2__["d" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__pages_user_profile_user_profile__["a" /* UserProfilePage */], __WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__["a" /* WelcomePage */], __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__["a" /* PerfilPage */], __WEBPACK_IMPORTED_MODULE_40__pages_denuncias_denuncias__["a" /* DenunciasPage */], __WEBPACK_IMPORTED_MODULE_1__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */], __WEBPACK_IMPORTED_MODULE_3__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */], __WEBPACK_IMPORTED_MODULE_2__pages_stories_list_stories_list__["a" /* StoriesListPage */], __WEBPACK_IMPORTED_MODULE_4__pages_botchat_botchat__["a" /* BotchatPage */], __WEBPACK_IMPORTED_MODULE_37__pages_story_photo_story_photo__["a" /* StoryPhotoPage */], __WEBPACK_IMPORTED_MODULE_35__pages_spotted_spotted__["a" /* SpottedPage */], __WEBPACK_IMPORTED_MODULE_5__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */], __WEBPACK_IMPORTED_MODULE_32__components_message_box_message_box__["a" /* MessageBoxComponent */], __WEBPACK_IMPORTED_MODULE_34__components_user_info_user_info__["a" /* UserInfoComponent */], __WEBPACK_IMPORTED_MODULE_33__components_user_menu_user_menu__["a" /* UserMenuComponent */], __WEBPACK_IMPORTED_MODULE_10__components_custom_logged_header_custom_logged_header__["a" /* CustomLoggedHeaderComponent */], __WEBPACK_IMPORTED_MODULE_9__pipes_capitalize_capitalize__["a" /* CapitalizePipe */], __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_12__pages_clienteLogin_clientelogin__["a" /* ClienteLoginPage */], __WEBPACK_IMPORTED_MODULE_25__pages_spotted_detalhes_spotted_detalhes__["a" /* SpottedDetalhesPage */], __WEBPACK_IMPORTED_MODULE_30__pages_profissionalLogin_profissionallogin__["a" /* ProfissionalLoginPage */], __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseAppConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], { locationStrategy: 'path' }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__["a" /* WelcomePage */], name: 'welcome', segment: 'welcome' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */], name: 'home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */], name: 'chats', segment: 'chats' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__["a" /* PerfilPage */], name: 'perfil', segment: 'perfil' },
                        { component: __WEBPACK_IMPORTED_MODULE_35__pages_spotted_spotted__["a" /* SpottedPage */], name: 'spotted', segment: 'spotted' }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__["a" /* PerfilPage */], __WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__["a" /* WelcomePage */], __WEBPACK_IMPORTED_MODULE_40__pages_denuncias_denuncias__["a" /* DenunciasPage */], __WEBPACK_IMPORTED_MODULE_2__pages_stories_list_stories_list__["a" /* StoriesListPage */], __WEBPACK_IMPORTED_MODULE_1__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */], __WEBPACK_IMPORTED_MODULE_37__pages_story_photo_story_photo__["a" /* StoryPhotoPage */], __WEBPACK_IMPORTED_MODULE_35__pages_spotted_spotted__["a" /* SpottedPage */], __WEBPACK_IMPORTED_MODULE_25__pages_spotted_detalhes_spotted_detalhes__["a" /* SpottedDetalhesPage */], __WEBPACK_IMPORTED_MODULE_3__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */], __WEBPACK_IMPORTED_MODULE_4__pages_botchat_botchat__["a" /* BotchatPage */], __WEBPACK_IMPORTED_MODULE_6__pages_user_profile_user_profile__["a" /* UserProfilePage */], __WEBPACK_IMPORTED_MODULE_12__pages_clienteLogin_clientelogin__["a" /* ClienteLoginPage */], __WEBPACK_IMPORTED_MODULE_30__pages_profissionalLogin_profissionallogin__["a" /* ProfissionalLoginPage */], __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_16__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_user_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_message_message_service__["a" /* MessageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_chat_chat_service__["a" /* ChatServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_story_story_service__["a" /* StoryService */],
                __WEBPACK_IMPORTED_MODULE_39__providers_denuncia_denuncia_service__["a" /* DenunciaService */],
                __WEBPACK_IMPORTED_MODULE_43__providers_bloqueado_bloqueado_service__["a" /* BloqueadoService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_backbutton_backbutton__["a" /* BackbuttonProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bloqueado_bloqueado_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_story_story_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spotted_spotted_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__botchat_botchat__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chat_chat_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_chat_model__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_first__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__spotted_spotted__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__spotted_detalhes_spotted_detalhes__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__perfil_perfil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_geofire__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_geofire__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















//import { errorHandler } from '@angular/platform-browser';

var HomePage = (function () {
    function HomePage(menuCtrl, geolocation, alertCtrl, storyService, messageService, localNotifications, platform, spottedService, chatService, authService, bloqueadoService, userService, navCtrl, navParams) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.storyService = storyService;
        this.messageService = messageService;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.spottedService = spottedService;
        this.chatService = chatService;
        this.authService = authService;
        this.bloqueadoService = bloqueadoService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plataforma = false;
        this.headerImage = "assets/images/background/22.jpg";
        this.view = 'feed';
        this.hits = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]([]);
        this.arrayGlobal = [];
        this.feeds = [];
        this.arrayNotif = [];
        this.skins = {
            'Snapgram': {
                'avatars': true,
                'list': false,
                'autoFullScreen': false,
                'cubeEffect': true
            },
            'VemDeZAP': {
                'avatars': false,
                'list': true,
                'autoFullScreen': false,
                'cubeEffect': false
            },
            'FaceSnap': {
                'avatars': true,
                'list': false,
                'autoFullScreen': true,
                'cubeEffect': false
            },
            'Snapssenger': {
                'avatars': false,
                'list': false,
                'autoFullScreen': false,
                'cubeEffect': false
            }
        };
        this.myElement = null;
        this.zukeModal = null;
        this.plataforma = platform.is('android');
        this.storyService.getFeed();
        var onclickObservable = this.localNotifications.on("click");
        onclickObservable.first().subscribe(function (notification) {
            if (notification.data.notif.tipo === 1) {
                if (notification.data.flag === 1) {
                    _this.messageService.deleteNotificacao(notification.data.notif);
                    _this.view = 'conversas';
                }
                else {
                    _this.navCtrl.setRoot(HomePage_1).then(function () {
                        //this.view = 'conversas'; 
                        //HomePage.flag = true;
                        _this.userService.currentUser.first().subscribe(function (currentUser) { return _this.chatService.getDeepChat(currentUser.$key, notification.data.notif.senderKey).
                            first().subscribe(function (chat) {
                            if (chat.hasOwnProperty("$value")) {
                                var timestamp = __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.database.ServerValue.TIMESTAMP;
                                var chat1 = new __WEBPACK_IMPORTED_MODULE_8__models_chat_model__["a" /* Chat */]('', timestamp, notification.data.notif.titulo, '');
                                _this.chatService.create(chat1, currentUser.$key, notification.data.notif.senderKey);
                                var chat2 = new __WEBPACK_IMPORTED_MODULE_8__models_chat_model__["a" /* Chat */]('', timestamp, currentUser.name, '');
                                _this.chatService.create(chat1, notification.data.notif.senderKey, currentUser.$key);
                            }
                        }); });
                        _this.userService.get(notification.data.notif.senderKey).first().subscribe(function (recipientUser) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
                                recipientUser: recipientUser,
                                codigo: recipientUser.$key
                            });
                        });
                    });
                }
            }
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.removerSpotted = function (spotted) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Deseja deletar o spotted?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.spottedService.delete(spotted);
                        _this.navCtrl.setRoot(HomePage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.getLocationUsers = function (radius, raioUsuario, coords) {
        var _this = this;
        var usuarioLoc = {};
        var usuariosPerto = [];
        var usuarioFinal = {};
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', function (key, location, distance) {
            ////console.log("key => ",key,"location -> ",location,"distance->",distance);
            if (distance < raioUsuario) {
                _this.arrayGlobal.push({ key: key, distancia: distance });
            }
            var hit = {
                location: location,
                distance: distance
            };
            usuarioLoc = {
                id: key,
                distancia: distance.toFixed(0),
                localizacao: location
            };
            var distancia_final;
            if (usuarioLoc['distancia'] < 1) {
                distancia_final = "< 1km";
            }
            else {
                distancia_final = usuarioLoc['distancia'] + "km";
            }
            _this.userService.get(key).subscribe(function (user) {
                usuarioFinal = {
                    id: key,
                    name: user.name,
                    photo: user.photo,
                    distancia: distancia_final,
                    localizacao: location
                };
                if (distance > raioUsuario) {
                    usuariosPerto.push(usuarioFinal);
                    //AQUI QUE FAZ A FILTRAGEM
                    _this.users = _this.users.map(function (users) {
                        return users.filter(function (user) {
                            return (user.$key !== key);
                        });
                    });
                    //FILTRAGEM DOS SPOTTED
                    _this.spotteds = _this.spotteds.map(function (spotteds) {
                        return spotteds.filter(function (spotted) {
                            return (spotted.userId !== key);
                        });
                    });
                }
            });
            var currentHits = _this.hits.value;
            currentHits.push(hit);
            _this.hits.next(currentHits);
        });
        this.geoFire.query({
            center: coords,
            radius: radius
        }).on('key_moved', function (key, location, distance) {
            //console.log("key => ",key,"location -> ",location,"distance->",distance);
            var hit = {
                location: location,
                distance: distance
            };
            var currentHits = _this.hits.value;
            currentHits.push(hit);
            _this.hits.next(currentHits);
        });
        usuariosPerto.push(usuarioFinal);
        return usuariosPerto;
    };
    HomePage.prototype.setLocation = function (key, coords) {
        this.geoFire.set(key, coords);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.chave = currentUser.$key;
            _this.raioDoUsuario = currentUser.distance;
        });
        if (this.chave === undefined) {
            this.navCtrl.setRoot(HomePage_1);
            //console.log("e");
        }
        else {
            console.log(this.chave);
            this.chats = this.chatService.chats;
            this.stories = this.storyService.stories;
            //console.log(this.stories);
            var diferencaTempo_1;
            if (this.stories === undefined || this.stories === null) {
                this.feeds = this.storyService.getFeed();
                //console.log("feeds",this.feeds);
                //console.log("plataforma eh "+this.plataforma);
                //tenho que modificar o html dos componente toda vez que entra para atualizar
                this.myElement = document.getElementById("stories");
                //console.log(this.myElement);
                if (this.myElement === null) {
                }
                else {
                    this.myElement.innerHTML = "";
                    //modificar também os componentes do próprio zuck-modal que ficam salvos
                    this.zukeModal = document.getElementById("zuck-modal");
                    //console.log(this.zukeModal);
                    if (this.zukeModal) {
                        if (this.zukeModal.parentNode) {
                            this.zukeModal.parentNode.removeChild(this.zukeModal);
                        }
                    }
                    var skin = "Snapgram";
                    if (this.feeds === null || this.feeds === undefined) {
                    }
                    else {
                        var stories = new window.Zuck('stories', {
                            backNative: true,
                            autoFullScreen: this.skins[skin]['autoFullScreen'],
                            skin: skin,
                            avatars: this.skins[skin]['avatars'],
                            list: this.skins[skin]['list'],
                            cubeEffect: this.skins[skin]['cubeEffect'],
                            localStorage: true,
                            stories: this.feeds //feeds //
                        });
                        //console.log(stories);
                    }
                }
            }
            else {
                this.stories.forEach(function (element) {
                    element.forEach(function (k) {
                        diferencaTempo_1 = Math.floor((Math.floor(Date.now() / 1000) - k.timestamp) / 60 / 60 / 24);
                        ////console.log(diferencaTempo,"dif");
                        if (diferencaTempo_1 > 1) {
                            var storageRef = __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.storage().ref();
                            storageRef.child("stories/" + k.userId + "/" + k.timestamp + ".jpeg").delete();
                            _this.storyService.delete(k);
                        }
                        _this.feeds.push({
                            id: k.$key,
                            photo: k.userPhoto,
                            name: k.userNome,
                            link: "",
                            lastUpdated: k.timestamp,
                            items: [
                                __WEBPACK_IMPORTED_MODULE_3__providers_story_story_service__["a" /* StoryService */].buildItem("" + k.$key, "photo", 10, k.photo, k.photo + ":small", '', false, k.timestamp)
                            ]
                        });
                    });
                });
            }
            //console.log(this.feeds);
            this.users = this.userService.users;
            this.spotteds = this.spottedService.getAllSpotteds();
            this.bloqueados = this.bloqueadoService.getBloqueados(this.chave);
            this.bloqueados.forEach(function (bloq) {
                bloq.forEach(function (b) {
                    _this.users = _this.users.map(function (users) {
                        return users.filter(function (user) {
                            return (user.$key !== b.bloqueado);
                        });
                    });
                    _this.spotteds = _this.spotteds.map(function (spotteds) {
                        return spotteds.filter(function (spotted) {
                            return (spotted.userId !== b.bloqueado);
                        });
                    });
                    _this.chats = _this.chats.map(function (chats) {
                        return chats.filter(function (chat) {
                            return (chat.title !== b.nomeBloqueado);
                        });
                    });
                });
            });
            //          this.spotteds = this.spottedService.spotteds;
            var esseUsuarioTaPerto = 0;
            this.geolocaliza();
            if (this.arrayGlobal === undefined || this.arrayGlobal === null) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Sua localização não foi detectada',
                    message: 'Por favor ligue o GPS do seu dispositivo',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.geolocaliza();
                            }
                        }
                    ]
                });
                alert_1.present();
            } //fim do if
        }
        /*
              this.users.forEach((userss)=>{
                  userss.forEach((u)=>{
                      this.arrayGlobal.forEach((usuariosComLocalizacao)=>{
                          if(usuariosComLocalizacao.key == u.$key){
                              esseUsuarioTaPerto = 1;
                          }
                      });
                     if(esseUsuarioTaPerto === 1){
                         esseUsuarioTaPerto = 0;
                     }else{
                         this.users = <FirebaseListObservable<User[]>>this.users.map(
                  (users: User[]) => {
                    return users.filter(
                      (user: User) => {
                        return (user.$key !== u.$key);
                      });
                  });
                  //FILTRAGEM DOS SPOTTED
                  this.spotteds = <FirebaseListObservable<Spotted[]>>this.spotteds.map(
                    (spotteds: Spotted[]) => {
                      return spotteds.filter(
                        (spotted: Spotted) => {
                          return (spotted.userId !== u.$key);
                        });
                    });
                     }
                  });
              });
      
      */
        if (!HomePage_1.flag) {
            this.userService.currentUser.first().subscribe(function (currentUser) {
                _this.notificacoes = _this.messageService.getAllNotificacoes(currentUser.$key);
                _this.notificacoes.subscribe(function (notificacoes) {
                    if (notificacoes.length === 1) {
                        notificacoes.forEach(function (n) {
                            if (!n.lida) {
                                _this.platform.ready().then(function () {
                                    _this.localNotifications.schedule({
                                        title: n.titulo,
                                        text: n.texto,
                                        icon: n.senderPhoto,
                                        data: { "notif": n, "flag": 1 },
                                    });
                                });
                            }
                        });
                    }
                    else if (notificacoes.length > 1) {
                        notificacoes.forEach(function (n) {
                            _this.messageService.deleteNotificacao(n);
                        });
                        _this.platform.ready().then(function () {
                            _this.localNotifications.schedule({
                                title: "Spotted",
                                text: "você tem " + notificacoes.length + " novas mensagens",
                                data: { "usuarioAtual": currentUser, "flag": 2 },
                            });
                        });
                    }
                });
            });
        }
        this.menuCtrl.enable(true, 'user-menu');
    };
    HomePage.prototype.geolocaliza = function () {
        var _this = this;
        this.referencia = this.spottedService.metodoretornareferencia().$ref;
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_21_geofire__(this.referencia);
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000
            };
            _this.geolocation.getCurrentPosition(options).then(function (resp) {
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                _this.arraydelocalizacao = [_this.lat, _this.long];
                if (_this.arraydelocalizacao === undefined || _this.arraydelocalizacao === null) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Sua localização não foi detectada',
                        message: 'Por favor ligue o GPS do seu dispositivo',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    _this.navCtrl.setRoot(HomePage_1);
                                }
                            }
                        ]
                    });
                    alert_2.present();
                }
                console.log("array dentro do metodo getCurrentPosition", _this.arraydelocalizacao);
                _this.geoFire.set(_this.chave, _this.arraydelocalizacao);
                console.log(_this.getLocationUsers(120000, _this.raioDoUsuario, _this.arraydelocalizacao));
            }).catch(function (err) {
                console.log(err);
            });
            /*this.geolocation.watchPosition(options).subscribe(resp=>{
              this.lat =  resp.coords.latitude;
              this.long = resp.coords.longitude;
        this.arraydelocalizacao = [this.lat, this.long];
        console.log("array dentro do metodo getCurrentPosition" , this.arraydelocalizacao);
       
             this.geoFire.set(this.chave,this.arraydelocalizacao);
        
        console.log(this.getLocationUsers(120000,this.raioDoUsuario,this.arraydelocalizacao));
            });
            */
        });
    };
    HomePage.prototype.onChatCreate = function (recipientUser) {
        var _this = this;
        HomePage_1.flag = true;
        this.userService.currentUser.first().subscribe(function (currentUser) { return _this.chatService.getDeepChat(currentUser.$key, recipientUser.$key).
            first().subscribe(function (chat) {
            if (chat.hasOwnProperty("$value")) {
                var timestamp = __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.database.ServerValue.TIMESTAMP;
                var chat1 = new __WEBPACK_IMPORTED_MODULE_8__models_chat_model__["a" /* Chat */]('', timestamp, recipientUser.name, '');
                _this.chatService.create(chat1, currentUser.$key, recipientUser.$key);
                var chat2 = new __WEBPACK_IMPORTED_MODULE_8__models_chat_model__["a" /* Chat */]('', timestamp, currentUser.name, '');
                _this.chatService.create(chat1, recipientUser.$key, currentUser.$key);
            }
        }); });
        var distancia;
        if (this.arrayGlobal === undefined) {
            this.geolocaliza();
        }
        else {
            this.arrayGlobal.forEach(function (a) {
                if (recipientUser.$key === a.key) {
                    distancia = a.distancia;
                }
            });
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
            recipientUser: recipientUser,
            usuariosperto: distancia
        });
    };
    HomePage.prototype.onLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__welcome_welcome__["a" /* WelcomePage */]);
    };
    HomePage.prototype.openPerfil = function (userId) {
        var _this = this;
        var distancia;
        this.arrayGlobal.forEach(function (a) {
            if (userId === a.key) {
                distancia = a.distancia;
            }
        });
        this.userService.get(userId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__perfil_perfil__["a" /* PerfilPage */], {
                usuario: user,
                usuariosperto: distancia
            });
        });
    };
    HomePage.prototype.openSpotted = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Novo post',
            message: 'Selecione a opção desejada',
            buttons: [
                {
                    text: 'Solicitar Matéria',
                    handler: function () {
                        var alert2 = _this.alertCtrl.create({
                            title: 'Confirmar cadastro',
                            inputs: [
                                {
                                    name: 'materia',
                                    placeholder: 'Nome da matéria'
                                },
                                {
                                    name: 'professor',
                                    placeholder: 'Nome do professor'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Enviar',
                                    handler: function (data) {
                                        _this.userService.currentUser.first().subscribe(function (currentUser) {
                                            _this.chaveUsuarioAtual = currentUser.$key;
                                            _this.usuarioCurso = currentUser.curso;
                                            _this.usuarioFaculdade = currentUser.faculdade;
                                        });
                                        data.userId = _this.chaveUsuarioAtual;
                                        data.usuarioCurso = _this.usuarioCurso;
                                        data.usuarioFaculdade = _this.usuarioFaculdade;
                                        data.timestamp = __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.database.ServerValue.TIMESTAMP;
                                        //console.log(data);
                                        _this.spottedService.createSolicitacao(data);
                                    }
                                }
                            ]
                        });
                        alert2.present();
                    }
                },
                {
                    text: 'Avaliar Matéria',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__spotted_spotted__["a" /* SpottedPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.openChatBot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__botchat_botchat__["a" /* BotchatPage */]);
    };
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    HomePage.prototype.deuLike = function (currentspotted) {
        var _this = this;
        var user = this.userService.currentUser;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.chaveUsuarioAtual = currentUser.$key;
        });
        this.spottedService.darLike(currentspotted, this.chaveUsuarioAtual);
        this.spottedService.atualizaLike(currentspotted, this.chaveUsuarioAtual);
    };
    HomePage.prototype.irParaPageDetalhesSpotted = function (spotted) {
        var distancia;
        if (this.arrayGlobal === undefined) {
            this.geolocaliza();
        }
        else {
            this.arrayGlobal.forEach(function (a) {
                if (spotted.userId === a.key) {
                    distancia = a.distancia;
                }
            });
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__spotted_detalhes_spotted_detalhes__["a" /* SpottedDetalhesPage */], { spotted: spotted, usuariosperto: this.arrayGlobal });
    };
    HomePage.prototype.filterItems = function (event) {
        var searchTerm = event.target.value;
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        this.spotteds = this.spottedService.spotteds;
        if (searchTerm) {
            switch (this.view) {
                case 'conversas':
                    this.chats = this.chats.map(function (chats) {
                        return chats.filter(function (chat) {
                            return (chat.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1);
                        });
                    });
                    break;
                case 'pessoas':
                    this.users = this.users.map(function (users) {
                        return users.filter(function (user) {
                            return (user.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1);
                        });
                    });
                    break;
                case 'feed':
                    this.spotteds = this.spotteds.map(function (spotteds) {
                        return spotteds.filter(function (spotted) {
                            return (spotted.professor.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1) || (spotted.conteudo.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1) || (spotted.materia.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1);
                        });
                    });
                    break;
            }
        }
    };
    HomePage.prototype.onChatOpen = function (chat) {
        var _this = this;
        var recipientUserId = chat.$key;
        var distancia;
        if (this.arrayGlobal === undefined) {
            this.geolocaliza();
        }
        else {
            this.arrayGlobal.forEach(function (a) {
                if (recipientUserId === a.key) {
                    distancia = a.distancia;
                }
            });
        }
        this.userService.get(recipientUserId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
                recipientUser: user,
                usuariosperto: distancia
            });
        });
    };
    HomePage.prototype.onSpottedOpen = function (spotted) {
        var _this = this;
        var recipientUserId = spotted.$key;
        this.userService.get(recipientUserId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
                recipientUser: user
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.myElement = document.getElementById("stories");
        //console.log(this.myElement);
        if (this.myElement === null) {
        }
        else {
            this.myElement.innerHTML = "";
            //modificar também os componentes do próprio zuck-modal que ficam salvos
            this.zukeModal = document.getElementById("zuck-modal");
            //console.log(this.zukeModal);
            if (this.zukeModal) {
                if (this.zukeModal.parentNode) {
                    this.zukeModal.parentNode.removeChild(this.zukeModal);
                }
            }
            var skin = "Snapgram";
            if (this.feeds === null || this.feeds === undefined) {
            }
            else {
                var stories = new window.Zuck('stories', {
                    backNative: true,
                    autoFullScreen: this.skins[skin]['autoFullScreen'],
                    skin: skin,
                    avatars: this.skins[skin]['avatars'],
                    list: this.skins[skin]['list'],
                    cubeEffect: this.skins[skin]['cubeEffect'],
                    localStorage: true,
                    stories: this.feeds //feeds //
                });
                //console.log(stories);
            }
        }
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll) {
            setTimeout(function () {
                _this.spottedService.loadMoreObjects();
                _this.navCtrl.setRoot(HomePage_1);
                _this.spotteds = _this.spottedService.getAllSpotteds();
                infiniteScroll.complete();
            }, 900);
        }
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\home\home.html"*/'\n<ion-header>\n <custom-logged-header [title] = "view | capitalize : true"> </custom-logged-header>\n\n <ion-toolbar>\n  <ion-segment [(ngModel)] = "view">\n      <ion-segment-button value = "feed">\n          <ion-icon  name="home" color="primary"></ion-icon>\n              </ion-segment-button>\n    <ion-segment-button value = "conversas">\n        <ion-icon  name="chatboxes" color="primary"></ion-icon>\n      </ion-segment-button>\n    <ion-segment-button value = "pessoas">\n        <ion-icon  name="people" color="primary"></ion-icon>\n      </ion-segment-button>\n  </ion-segment>\n  <ion-searchbar placeholder="Pesquisar"  (ionInput)="filterItems($event)">\n    </ion-searchbar>\n</ion-toolbar>\n            <!--toolbar\n\n<ion-toolbar>\n    <ion-searchbar  (ionInput)="filterItems($event)">\n    </ion-searchbar>\n      \n  </ion-toolbar>\n-->\n\n  </ion-header>\n \n  \n  <ion-content  elastic-header>  \n    <div style="background-color: white" [ngSwitch] = "view" >\n        <div *ngSwitchCase = "\'feed\'" background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n            <!--Parallax Header Top-->\n            <div parallax-header *ngSwitchCase = "\'feed\'" >\n              <!--Parallax Subtitle -->\n              <h2 no-margin parallax-subtitle *ngSwitchCase = "\'feed\'"></h2>\n              <!--Parallax Title -->\n              <h2 no-margin parallax-title *ngSwitchCase = "\'feed\'">mais recentes</h2>\n            </div>\n          </div>\n          \n    \n  <ion-list *ngSwitchCase="\'feed\'">\n    <div #stories id="stories"  padding=""></div>\n\n          \n      <!--     COMENTARIO\n        <div id="stories" *ngFor="let story of stories | async " padding class="stories user-icon carousel snapgram">\n  <div class="story" data-id="story.$key" data-photo="story.userPhoto" data-last-updated="story.timestamp">\n    <a>\n      <span class ="img">\n        <u style="background-image:url(story.photo)"></u>\n      </span>\n      <span class="info">\n        <strong>{{story.userNome}}</strong>\n        <span class="time">{{story.timestamp}}</span>\n      </span>\n    </a>\n    <ul class="items">\n      <li class data-id="story.$key">\n        <a href="story.userPhoto" data-link date-time="story.timestamp" data-type="photo" data-length="10"></a>\n      </li>\n    </ul>\n  </div>\n</div>\n      <div id="zuck-modal" class="with-cube with-effects" tabindex="1" style="display:none;">\n       <div id="zuck-modal-content"></div>\n      </div>\n      \n      \n      -->\n      <!--     COMENTARIO            <img  round [src]="spotted.userId.photo || \'assets/images/no-photo.jpg\'">\n                    --> \n                  <ion-row>\n  \n                    <ion-row >\n            <ion-col *ngFor="let spotted of spotteds | async ">\n                <ion-card >  \n                    <p></p>\n                   \n                    <ion-item >\n                        <button class="botaoLixo" *ngIf="spotted.userId  === chave" ion-button icon-right clear  (click)="removerSpotted(spotted)" >\n                            <ion-icon icon-right name="trash" >                 \n                            </ion-icon>\n                          </button>\n                      <ion-avatar item-start>\n                        <!--     COMENTARIO            <img  round [src]="spotted.userId.photo || \'assets/images/no-photo.jpg\'">\n                        -->\n                        <img  round  [src]="spotted.userPhoto || \'assets/images/no-photo.jpg\'">\n                      </ion-avatar>\n                    \n                      \n                        <h2 (click)="openPerfil(spotted.userId)">{{spotted.userNome}}</h2>\n                        <p>   {{spotted.timestamp | date : \'dd/MM/y H:mm\'  }} \n                        </p>\n                    </ion-item>\n                   \n                    \n                         <img   *ngIf ="spotted.photo" width="218" height="280" src="{{spotted.photo}}">\n                  <!--     COMENTARIO     || amTimeAgo        <img padding [src]="spotted.photo  ||  \'assets/images/download.jpg\'">\n                   -->        <img   *ngIf ="spotted.photo === \'\' " [src]=" \'assets/images/download.jpg\'">\n                   <div class = "card_title"    (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo === \'\' ">\n                     {{spotted.materia | uppercase }} da {{spotted.curso | capitalize }} na {{spotted.faculdade | uppercase}}<br> Professor(a) - {{spotted.professor}}\n                  </div>\n                  <div class = "card_title"    (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo !== \'\' ">\n                      {{spotted.materia | uppercase }}<br> Professor(a) - {{spotted.professor}}\n                   </div>\n                 <br>\n                 <div class="card_subtitle" (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo === \'\' ">\n                <br>  {{spotted.conteudo}}<br>\n                   Nível de dificuldade da matéria : \n                   {{spotted.dificuldadeMateria}}\n                   <br>\n                    Nível de dificuldade do Professor(a): \n                    {{spotted.dificuldadeProfessor}}                   \n                  </div>\n                    <ion-card-content  (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo" >\n                      <p>{{spotted.conteudo}}</p>\n                    </ion-card-content>\n                  \n                    <ion-row>\n                      <ion-col>\n                        <button ion-button icon-left clear small (click)="deuLike(spotted,false)">\n                          <ion-icon name="thumbs-up"></ion-icon>\n                          <div  *ngIf="spotted.numLikes === 1 ; else customLikes">{{spotted.numLikes}} like</div>\n                          <ng-template #customLikes>\n                            <div>{{spotted.numLikes}} likes</div>\n                              </ng-template>\n                        </button>\n                       \n\n\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button icon-left clear small>\n                          <ion-icon name="text"></ion-icon>\n                          <div *ngIf="spotted.numComentarios === 1 ; else customComentarios" (click)="irParaPageDetalhesSpotted(spotted)" >{{spotted.numComentarios}} comentário</div>\n                          <ng-template #customComentarios >\n                            <div (click)="irParaPageDetalhesSpotted(spotted)">{{spotted.numComentarios}} comentários</div>\n                              </ng-template>\n                        </button>\n                      </ion-col>\n                      <ion-col center text-center>\n                        <ion-note><strong>\n                        {{spotted.timestamp | date : \'dd/MM/y H:mm\'  }}   </strong>\n                        </ion-note>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card>\n            </ion-col>\n    \n          </ion-row>\n  \n        </ion-row>  \n      </ion-list>\n      <ion-infinite-scroll position="bottom" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n      <!-- Parallax Big Image -->\n      <div *ngSwitchCase = "\'conversas\'" background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n        <!--Parallax Header Top-->\n        <div parallax-header *ngSwitchCase = "\'conversas\'" >\n          <!--Parallax Subtitle -->\n          <h2 no-margin parallax-subtitle *ngSwitchCase = "\'conversas\'">a galera que você troca idéia</h2>\n          <!--Parallax Title -->\n          <h2 no-margin parallax-title *ngSwitchCase = "\'conversas\'">Conversas</h2>\n        </div>\n      </div>\n      <!--Content-->\n      <ion-grid no-padding *ngSwitchCase = "\'conversas\'">\n        <ion-row >\n          <ion-col col-12>\n            <ion-list no-margin>\n                          <!--eh aqui q vai o ngfor dos itens-->\n              <ion-item item-bcg border no-lines *ngFor = "let chat of chats | async" (click)="onChatOpen(chat)">\n                <!--Content Avatar-->\n                <ion-thumbnail item-start>\n                  <img [src]="chat.photo || \'assets/images/no-photo.jpg\'" alt="legenda">\n                </ion-thumbnail>\n                <!--Content Title-->\n                <h2 no-margin item-title>    {{chat.title}}                </h2>\n                <!--Content Subtitle-->\n                <h3 item-subtitle text-wrap *ngIf="chat.lastMessage ; else customMessage">  \n                    {{chat.timestamp | date : \'dd/MM/y H:mm\'}} - {{chat.lastMessage}} \n                </h3>\n                <ng-template #customMessage>\n                    <h3 item-subtitle text-wrap>\n                      Não há mensagens\n                    </h3>\n                      </ng-template>\n                <!--Content Badge-->\n                <ion-badge class="badge-light" item-end>online</ion-badge>\n              </ion-item>\n              <ion-item item-bcg border no-lines  (click)="openChatBot()">\n                  <!--Content Avatar-->\n                  <ion-thumbnail item-start>\n                    <img [src]="\'assets/images/no-photo.jpg\'" alt="legenda">\n                  </ion-thumbnail>\n                  <!--Content Title-->\n                  <h2 no-margin item-title>Eva</h2>\n                  <!--Content Subtitle-->\n                  <h3 item-subtitle text-wrap >  \n  Vem falar comigo\n                  </h3>\n                  \n                  <!--Content Badge-->\n                  <ion-badge class="badge-light" item-end>online</ion-badge>\n                </ion-item>\n                \n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n  <div *ngSwitchCase = "\'pessoas\'" background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n        <!--Parallax Header Top-->\n        <div parallax-header *ngSwitchCase = "\'pessoas\'" >\n          <!--Parallax Subtitle -->\n          <h2 no-margin parallax-subtitle *ngSwitchCase = "\'pessoas\'">a galera que você pode conhecer</h2>\n          <!--Parallax Title -->\n          <h2 no-margin parallax-title *ngSwitchCase = "\'pessoas\'">Pessoas</h2>\n        </div>\n      </div>\n      <!--Content-->\n      <ion-grid no-padding *ngSwitchCase = "\'pessoas\'">\n        <ion-row >\n          <ion-col col-12>\n            <ion-list no-margin>\n              <ion-item item-bcg border no-lines *ngFor = "let user of users | async" (click)="onChatCreate(user)">\n                <!--Content Avatar-->\n                <ion-thumbnail item-start>\n                  <img [src]="user.photo || \'assets/images/no-photo.jpg\'" alt="legenda">\n                </ion-thumbnail>\n                <!--Content Title-->\n                <h2 no-margin item-title>     {{user.name}}\n                  </h2>\n                  <h3 item-subtitle text-wrap >  \n                      {{user.username}}\n                                      </h3>\n                <!--Content Badge-->\n                <ion-badge class="badge-light" item-end>online</ion-badge>\n              </ion-item>\n             \n                \n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n  \n</div>\n\n<ion-fab left bottom>\n    <button ion-fab color="primary"\n      (click)="openSpotted()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_story_story_service__["a" /* StoryService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_chat_chat_service__["a" /* ChatServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_bloqueado_bloqueado_service__["a" /* BloqueadoService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["l" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpottedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/*
  Generated class for the SpottedProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SpottedServiceProvider = (function (_super) {
    __extends(SpottedServiceProvider, _super);
    function SpottedServiceProvider(af, http, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        _this.firebaseApp = firebaseApp;
        _this.nbObjects = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](2);
        _this.nbObjects.next(_this.nbObjects.getValue() + 2);
        //console.log('Hello SpottedProvider Provider');
        //   this.setSpotteds();
        _this.setSolicitacoes();
        return _this;
        //this.dbRef = this.af.database.list(`/spotteds/`);
        //  this.geoFire = new Geofire(this.dbRef.$ref);
    }
    SpottedServiceProvider.prototype.loadMoreObjects = function () {
        this.nbObjects.next(this.nbObjects.getValue() + 15);
    };
    SpottedServiceProvider.prototype.metodoretornareferencia = function () {
        return this.af.database.list("/localizacaoUsuarios");
    };
    SpottedServiceProvider.prototype.createLocationArr = function (lat, lng) {
        var location = [lat, lng];
        return location;
    };
    SpottedServiceProvider.prototype.get = function (userId) {
        return this.af.database.object("/spotteds/" + userId)
            .catch(this.handleObservableError);
    };
    SpottedServiceProvider.prototype.setSpotteds = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.spotteds = _this.af.database.list("/spotteds", {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (spotteds) {
                    return spotteds.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    SpottedServiceProvider.prototype.getAllSpotteds = function () {
        return this.af.database.list("/spotteds", {
            query: {
                orderByChild: 'timestamp',
                limitToLast: this.nbObjects
                //limita o numero de mensagens que ira aparecer na tela
            }
        }).map(function (spotteds) {
            return spotteds.reverse();
        })
            .catch(this.handleObservableError);
    };
    SpottedServiceProvider.prototype.getSpotteds = function (userId1) {
        return this.af.database.list("/spotteds/" + userId1, {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    /*
    create(spotted : Spotted, listMessages : FirebaseListObservable<Spotted[]>,userId:string): firebase.Promise<void>{
      return listMessages.push(spotted).catch(this.handlePromiseError);
    }
*/
    SpottedServiceProvider.prototype.create = function (spotted) {
        return this.af.database.list("/spotteds/").push(spotted).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.createSolicitacao = function (_a) {
        var materia = _a.materia, professor = _a.professor, userId = _a.userId, timestamp = _a.timestamp, usuarioCurso = _a.usuarioCurso, usuarioFaculdade = _a.usuarioFaculdade;
        console.log({ materia: materia, professor: professor, userId: userId, timestamp: timestamp, usuarioCurso: usuarioCurso, usuarioFaculdade: usuarioFaculdade });
        return this.af.database.list("/solicitacoes/").push({ materia: materia, professor: professor, usuarioCurso: usuarioCurso, usuarioFaculdade: usuarioFaculdade, timestamp: timestamp, userId: userId }).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.darLike = function (spotted, userId) {
        var item = this.retornaObjetoSpottedLike(spotted, userId);
        var itemRef = this.af.database.object("/spotteds/" + spotted.$key + "/" + userId).subscribe(function (snapshot) {
            //console.log("qual q eh "+snapshot.usuarioDeuLike);
            if (snapshot.usuarioDeuLike == true) {
            }
            else {
                spotted.numLikes++;
                //console.log("agr tem mais olha ,ja sao "+spotted.numLikes);
            }
        });
        return this.af.database.object("/spotteds/" + spotted.$key).set(spotted).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.retornaObjetoSpotted = function (spotted) {
        return this.af.database.object("/spotteds/" + spotted.$key);
    };
    SpottedServiceProvider.prototype.retornaObjetoSpottedLike = function (spotted, userId) {
        return this.af.database.object("/spotteds/" + spotted.$key + "/" + userId);
    };
    SpottedServiceProvider.prototype.atualizaLike = function (spotted, userId) {
        var item = this.retornaObjetoSpottedLike(spotted, userId);
        return item.update({ usuarioDeuLike: true });
    };
    SpottedServiceProvider.prototype.getComentarios = function (spottedId) {
        return this.af.database.list("/comentarios/" + spottedId, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: this.nbObjects //limita o numero de mensagens que ira aparecer na tela
            }
        }).catch(this.handleObservableError);
    };
    SpottedServiceProvider.prototype.comentar = function (comentario, spottedId) {
        return this.af.database.list("/comentarios/" + spottedId + "/").push(comentario).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.deletarComentario = function (id) {
        return this.af.database.object("comentarios/" + id).remove().catch(this.handlePromiseError);
    };
    //  create(spotted: Spotted, userId: string): firebase.Promise<void> {
    //return this.af.database.object(`/chats/${userId1}/${userId2}`).set(chat).catch(this.handlePromiseError);
    //    return this.af.database.object(`/spotteds/${userId}`).set(spotted).catch(this.handlePromiseError);
    // }
    SpottedServiceProvider.prototype.edit = function (spotted) {
        return this.currentSpotted.update(spotted).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.delete = function (spotted /*,userId:string*/) {
        return this.af.database.object("/spotteds/" + spotted.$key).remove().catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.deleteComId = function (spotted /*,userId:string*/) {
        return this.af.database.object("/spotteds/" + spotted).remove().catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.deleteSolicitacao = function (key /*,userId:string*/) {
        return this.af.database.object("/solicitacoes/" + key).remove().catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp.storage().ref().child("/spotteds/" + userId).put(file);
    };
    /*
    getDeepSpotted(userId1: string): FirebaseObjectObservable<Spotted> {
      return <FirebaseObjectObservable<Spotted>>this.af.database
        .object(`/spotteds/${userId1}/${userId2}`)
        .catch(this.handleObservableError);
    }
    */
    SpottedServiceProvider.prototype.setSolicitacoes = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.solicitacoes = _this.af.database.list("/solicitacoes", {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (solicitacoes) {
                    return solicitacoes.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    SpottedServiceProvider.prototype.updatePhoto = function (spotted, spottedPhoto, recipientUserPhoto) {
        if (spottedPhoto != recipientUserPhoto) {
            return spotted.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve(false);
    };
    SpottedServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angularfire2__["f" /* FirebaseApp */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], Object])
    ], SpottedServiceProvider);
    return SpottedServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=spotted.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the MessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MessageServiceProvider = (function (_super) {
    __extends(MessageServiceProvider, _super);
    //public nbObjects: Subject<any>;
    function MessageServiceProvider(http, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        _this.nbObjects = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](33);
        /*    this.platform.ready().then(() => {
                  this.nbObjects.next(40);
                });
          */
        _this.nbObjects.next(_this.nbObjects.getValue() + 2);
        return _this;
    }
    MessageServiceProvider.prototype.loadMoreObjects = function () {
        this.nbObjects.next(this.nbObjects.getValue() + 15);
    };
    MessageServiceProvider.prototype.getMessages = function (userId1, userId2) {
        return this.af.database.list("/messages/" + userId1 + "-" + userId2, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: this.nbObjects //limita o numero de mensagens que ira aparecer na tela
            }
        }).catch(this.handleObservableError);
    };
    MessageServiceProvider.prototype.getAllNotificacoes = function (userId1) {
        return this.af.database.list("/notifications/" + userId1, {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    MessageServiceProvider.prototype.getNotificacoes = function (userId1) {
        return this.af.database.list("/notifications/" + userId1, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: this.nbObjects //limita o numero de mensagens que ira aparecer na tela
            }
        }).catch(this.handleObservableError);
    };
    MessageServiceProvider.prototype.create = function (message, listMessages) {
        return listMessages.push(message).catch(this.handlePromiseError);
    };
    MessageServiceProvider.prototype.editNotificacao = function (notificacao) {
        notificacao.lida = true;
        return this.af.database.object("/notifications/" + notificacao.userId + "/" + notificacao.$key).update(notificacao).catch(this.handlePromiseError);
    };
    MessageServiceProvider.prototype.deleteNotificacao = function (notificacao) {
        return this.af.database.object("/notifications/" + notificacao.userId).remove().catch(this.handlePromiseError);
    };
    MessageServiceProvider.prototype.createNotificacao = function (message, listMessages) {
        return listMessages.push(message).catch(this.handlePromiseError);
    };
    MessageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */]])
    ], MessageServiceProvider);
    return MessageServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story; });
var Story = (function () {
    function Story(photo, userId, userNome, userPhoto, timestamp) {
        this.photo = photo;
        this.userId = userId;
        this.userNome = userNome;
        this.userPhoto = userPhoto;
        this.timestamp = timestamp;
    }
    return Story;
}());

//# sourceMappingURL=story.model.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensagem; });
var Mensagem = (function () {
    function Mensagem(content, sentBy, timestamp) {
        this.content = content;
        this.sentBy = sentBy;
        this.timestamp = timestamp;
    }
    return Mensagem;
}());

//# sourceMappingURL=mensagem.model.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    dialogflow: {
        angularBot: '40302b5f20d149efac86ed84d0467b21'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = (function () {
    function Chat(lastMessage, timestamp, title, photo) {
        this.lastMessage = lastMessage;
        this.timestamp = timestamp;
        this.title = title;
        this.photo = photo;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notificacao; });
var Notificacao = (function () {
    function Notificacao(userId, titulo, senderKey, senderPhoto, texto, tipo, lida, timestamp) {
        //      userid,titulo,texto,tipo,lida,timestamp
        this.userId = userId;
        this.titulo = titulo;
        this.senderKey = senderKey;
        this.senderPhoto = senderPhoto;
        this.texto = texto;
        this.tipo = tipo;
        this.lida = lida;
        this.timestamp = timestamp;
    }
    return Notificacao;
}());

//# sourceMappingURL=notificacao.model.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spotted; });
var Spotted = (function () {
    function Spotted(faculdade, curso, materia, professor, dificuldadeMateria, dificuldadeProfessor, conteudo, photo, userId, userNome, userPhoto, numComentarios, numLikes, timestamp) {
        this.faculdade = faculdade;
        this.curso = curso;
        this.materia = materia;
        this.professor = professor;
        this.dificuldadeMateria = dificuldadeMateria;
        this.dificuldadeProfessor = dificuldadeProfessor;
        this.conteudo = conteudo;
        this.photo = photo;
        this.userId = userId;
        this.userNome = userNome;
        this.userPhoto = userPhoto;
        this.numComentarios = numComentarios;
        this.numLikes = numLikes;
        this.timestamp = timestamp;
    }
    return Spotted;
}());

//# sourceMappingURL=spotted.model.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bloqueado; });
var Bloqueado = (function () {
    function Bloqueado(bloqueante, bloqueado, nomeBloqueado, timestamp, flagBloqueou //via dupla, se tiver 1 bloqueou,se tiver 2 foi bloqueado
    ) {
        this.bloqueante = bloqueante;
        this.bloqueado = bloqueado;
        this.nomeBloqueado = nomeBloqueado;
        this.timestamp = timestamp;
        this.flagBloqueou = flagBloqueou; //via dupla, se tiver 1 bloqueou,se tiver 2 foi bloqueado
    }
    return Bloqueado;
}());

//# sourceMappingURL=bloqueado.model.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comentario; });
var Comentario = (function () {
    function Comentario(userId, text, apelido, photo, timestamp) {
        this.userId = userId;
        this.text = text;
        this.apelido = apelido;
        this.photo = photo;
        this.timestamp = timestamp;
    }
    return Comentario;
}());

//# sourceMappingURL=comentario.model.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Denuncia; });
var Denuncia = (function () {
    function Denuncia(motivo, denunciante, denunciado, idSpotted, idComentario, nomeDenunciado, timestamp, conteudo) {
        this.motivo = motivo;
        this.denunciante = denunciante;
        this.denunciado = denunciado;
        this.idSpotted = idSpotted;
        this.idComentario = idComentario;
        this.nomeDenunciado = nomeDenunciado;
        this.timestamp = timestamp;
        this.conteudo = conteudo;
    }
    return Denuncia;
}());

//# sourceMappingURL=denuncia.model.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        if (onlyFirst)
            return value.charAt(0).toUpperCase() + value.substr(1);
        var words = value.split(' ');
        var output = '';
        words.forEach(function (value, index, words) {
            output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return output;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'capitalize'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(165);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomLoggedHeaderComponent = (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CustomLoggedHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */])
    ], CustomLoggedHeaderComponent.prototype, "user", void 0);
    CustomLoggedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'custom-logged-header',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\custom-logged-header\custom-logged-header.html"*/'<ion-navbar>\n  <ion-title>\n<ion-item color="transparent" detail-none no-lines *ngIf="user ; else titleTemplate">\n<ion-avatar item-right>\n  <img [src] ="user.photo || \'assets/images/no-photo.jpg\' ">\n</ion-avatar>\n{{title}}\n</ion-item>\n<ng-template #titleTemplate>\n  {{title}}\n</ng-template>\n  </ion-title>\n\n<ion-buttons end>\n  <button ion-button menuToggle="user-menu">\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-buttons>\n</ion-navbar>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\custom-logged-header\custom-logged-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
    ], CustomLoggedHeaderComponent);
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=custom-logged-header.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(deeplinks, authService, userService, platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'welcome';
        authService.auth.subscribe(function (authState) {
            if (authState) {
                userService.currentUser.subscribe(function (user) {
                    _this.currentUser = user;
                });
            }
        });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            deeplinks.route({
                '/welcome': 'WelcomePage',
                '/home': 'HomePage',
                '/chats': 'ChatPage',
                '/perfil': 'PerfilPage',
                '/spotted': 'SpottedPage',
                '/spotted-detalhes': 'SpottedDetalhesPage'
            }).subscribe(function (match) {
                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                // match.$args - the args passed in the link
                // match.$link - the full link data
                console.log('Successfully matched route', match);
                console.log(match.$route);
                _this.nav.setRoot(match.$route, match.$args);
            }, function (nomatch) {
                // nomatch.$link - the full link data
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
            /*
        deeplinks.routeWithNavController(this.nav,{
          '/welcome':WelcomePage,
          '/home/:chave' :HomePage,
          '/chats/:recipient.$key': ChatPage,
          '/perfil':PerfilPage,
          '/spotted':SpottedPage,
          '/spotted-detalhes':SpottedDetalhesPage
        }).subscribe((match) => {
          // match.$route - the route we matched, which is the matched entry from the arguments to route()
          // match.$args - the args passed in the link
          // match.$link - the full link data
        //  this.nav.setRoot(match.$route, match.$args);
          console.log('Native route', match);
        }, (nomatch) => {
          // nomatch.$link - the full link data
          console.log('Got a deeplink that didn\'t match', nomatch);
        });
        */
            /* const firebaseConfig = {
              apiKey: "AIzaSyDBQl4HG_lqovYTg-ATndA3Co4JnUdoyiM",
              authDomain: "spottedagrvai.firebaseapp.com",
              databaseURL: "https://spottedagrvai.firebaseio.com",
              projectId: "spottedagrvai",
              storageBucket: "spottedagrvai.appspot.com",
              messagingSenderId: "832356265521"
            };
            firebase.initializeApp(firebaseConfig);
            */
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: 'HomePage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\app\app.html"*/'<ion-menu persistent="true" side="right" [content]="content" enabled="false" id="user-menu">\n\n  <user-menu [user]="currentUser"></user-menu>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_message_model__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessageBoxComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__models_message_model__["a" /* Message */])
    ], MessageBoxComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MessageBoxComponent.prototype, "isFromSender", void 0);
    MessageBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'message-box',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\message-box\message-box.html"*/'<div padding class="text" [ngClass] = "{\'sender-background\' : isFromSender}">\n  <p>{{message.text}}\n  </p>\n  <p class="timestamp">{{message.timestamp | date :\'dd/MM/y H:mm\'}}</p>\n</div>\n<br>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\message-box\message-box.html"*/,
            host: {
                '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
                '[style.text-align]': '((!isFromSender) ? "left" : "right")'
            }
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());

//# sourceMappingURL=message-box.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_story_photo_story_photo__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_stories_list_stories_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_profile_user_profile__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profissionalLogin_profissionallogin__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__ = __webpack_require__(426);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the UserMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var UserMenuComponent = (function (_super) {
    __extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authService, app, menuCtrl, platform) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        _this.platform = platform;
        _this.plataforma = false;
        if (platform.is('android')) {
            _this.plataforma = true;
        }
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_user_profile_user_profile__["a" /* UserProfilePage */]);
    };
    UserMenuComponent.prototype.onNotificacoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */]);
    };
    UserMenuComponent.prototype.onStories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_profissionalLogin_profissionallogin__["a" /* ProfissionalLoginPage */]);
    };
    UserMenuComponent.prototype.onStories2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_story_photo_story_photo__["a" /* StoryPhotoPage */]);
    };
    UserMenuComponent.prototype.onTermos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_stories_list_stories_list__["a" /* StoriesListPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])('user'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */])
    ], UserMenuComponent.prototype, "currentUser", void 0);
    UserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'user-menu',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\user-menu\user-menu.html"*/'<ion-content>\n  <user-info [user]="currentUser" [isMenu]="true"></user-info>\n  <ion-list no-lines>\n        <!--\n           <button ion-item icon-right detail-nome menuClose="user-menu" (click) = "onRaio()">\n            <ion-range min="0" max="200" step="1" pin="true"  [(ngModel)]="distance"  name="distance">\n                <ion-label range-left>0 km</ion-label>\n                <ion-label range-right>200 km</ion-label>\n              </ion-range> Raio\n            <ion-icon name="locate" item-end></ion-icon>\n          </button>\n        -->\n       \n    <button ion-item icon-right detail-nome menuClose="user-menu" (click) = "onProfile()">\n      Perfil\n      <ion-icon name="person" item-end></ion-icon>\n    </button>\n    <button ion-item  icon-right detail-nome menuClose="user-menu" (click) = "onStories()">\n      Solicitações de matérias\n      <ion-icon name="book" item-end></ion-icon>\n    </button>\n    <button ion-item  icon-right detail-nome menuClose="user-menu" (click) = "onNotificacoes()">\n        Notificações\n        <ion-icon name="notifications" item-end></ion-icon>\n      </button>\n    <button ion-item  icon-right detail-nome menuClose="user-menu" (click) = "onStories2()">\n      Adicionar aos Stories\n      <ion-icon name="logo-instagram" item-end></ion-icon>\n    </button>\n    <button ion-item  icon-right detail-nome menuClose="user-menu" (click) = "onTermos()">\nTermos de uso e condições        <ion-icon name="lock" item-end></ion-icon>\n      </button>\n    <button ion-item icon-right detail-nome menuClose="user-menu" (click) = "onLogout()">\n        Sair\n        <ion-icon name="log-out" item-end></ion-icon>\n      </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\user-menu\user-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */]])
    ], UserMenuComponent);
    return UserMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=user-menu.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */])
    ], UserInfoComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserInfoComponent.prototype, "isMenu", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-info',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\user-info\user-info.html"*/'<div *ngIf="user">\n  <ion-avatar [ngClass] = "{\'custom-background\' : isMenu}">\n    <div class="round2" >\n    <img class = "round" [src] = "user.photo || \'assets/images/no-photo.jpg\'">\n    </div>\n  </ion-avatar>\n\n  <h2 text-center>{{user.name}}</h2>\n  <p text-center>{{user.faculdade}}</p>\n\n</div>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\components\user-info\user-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spotted_spotted_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_denuncia_denuncia_service__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DenunciasPage = (function () {
    function DenunciasPage(menuCtrl, denunciaService, spottedService, messageService, userService, authService, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.denunciaService = denunciaService;
        this.spottedService = spottedService;
        this.messageService = messageService;
        this.userService = userService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scrou = 8;
        this.podeir = 1;
    }
    DenunciasPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'user-menu');
    };
    DenunciasPage.prototype.ionViewDidLoad = function () {
        this.denuncias = this.denunciaService.denuncias;
        /*
        this.menuCtrl.enable(false,'user-menu');
    
        this.userService.currentUser.first().subscribe((currentUser: User) => {
          this.sender = currentUser;
          
         
          
    
          let doSubscription = () =>{
            this.denuncias.subscribe((denuncias:Denuncia[])=>{
              denuncias.forEach(n=>{
              if(!n.lida){
                this.messageService.editDenuncia(n);
                this.scrollToTop();
              }
              });
              });
          };
        
         
          this.denuncias = this.messageService.getDenuncias(this.sender.$key);
          this.denuncias.first().subscribe((denuncias: Denuncia[]) => {
            if (denuncias.length === 0) {
              this.denuncias = this.messageService.getDenuncias(this.sender.$key);
            doSubscription();
              
            }
            else{
                doSubscription();
                }
          });
        });
    //    this.scrou = 1;
    */
    };
    DenunciasPage.prototype.banir = function (denuncia) {
        if (denuncia.idSpotted === '') {
            if (denuncia.idComentario !== '') {
                this.spottedService.deletarComentario(denuncia.idComentario);
            }
        }
        else {
            this.spottedService.deleteComId(denuncia.idSpotted);
        }
        this.userService.delete(denuncia.denunciado);
    };
    DenunciasPage.prototype.deletarDenuncia = function (denuncia) {
        this.denunciaService.delete(denuncia);
    };
    DenunciasPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */])
    ], DenunciasPage.prototype, "content", void 0);
    DenunciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-denuncias',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\denuncias\denuncias.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar transparent>\n      <h1 style="color:white;">Denúncias</h1>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <br>\n  <div class="flex-container">\n <div class="signup-form animated fadeInRight"  >\n    <ion-list *ngFor="let denuncia of denuncias | async ">\n    <hr>   \n    <div>\n         <h3>{{denuncia.nomeDenunciado}} foi denunciado: </h3>\n      <p>"Motivo {{denuncia.motivo}}"</p> \n      <p>"Texto do post/comentario {{denuncia.text}}"</p> \n    <br>  <p>   {{denuncia.timestamp | date : \'dd/MM/y H:mm\'  }} \n      </p>\n      <button ion-button (tap)="banir(denuncia)">\n        <ion-icon name="star"></ion-icon>\n      BANIR\n    </button>\n    <button ion-button (tap)="deletarDenuncia(denuncia)">\n      <ion-icon name="star"></ion-icon>\n    DELETAR DENÚNCIA\n  </button>\n    </div> \n      \n        \n<hr>\n        </ion-list>\n       \n  </div>\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\denuncias\denuncias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_denuncia_denuncia_service__["a" /* DenunciaService */], __WEBPACK_IMPORTED_MODULE_5__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], DenunciasPage);
    return DenunciasPage;
}());

//# sourceMappingURL=denuncias.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackbuttonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_config__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackbuttonProvider = (function () {
    function BackbuttonProvider() {
        this.pageNumberStack = [];
    }
    BackbuttonProvider.prototype.pushPage = function (pageNumber, navCtrl) {
        if (navCtrl)
            __WEBPACK_IMPORTED_MODULE_0__app_app_config__["a" /* Globals */].navCtrls[pageNumber] = navCtrl;
        __WEBPACK_IMPORTED_MODULE_0__app_app_config__["a" /* Globals */].tabIndex = pageNumber;
        var indexOfPageNumber = this.pageNumberStack.indexOf(pageNumber);
        console.log("pageNumber: " + JSON.stringify(pageNumber));
        console.log("indexOfPageNumber: " + JSON.stringify(indexOfPageNumber));
        if (indexOfPageNumber >= 0) {
            this.pageNumberStack.splice(indexOfPageNumber, 1);
        }
        console.log("Before this.pageNumberStack: " + JSON.stringify(this.pageNumberStack));
        this.pageNumberStack.push(pageNumber);
        console.log("After this.pageNumberStack: " + JSON.stringify(this.pageNumberStack));
    };
    BackbuttonProvider.prototype.popPage = function () {
        if (this.pageNumberStack.length > 0)
            this.pageNumberStack.pop();
        console.log("After pop this.pageNumberStack: " + JSON.stringify(this.pageNumberStack));
        if (this.pageNumberStack.length > 0)
            return this.pageNumberStack[this.pageNumberStack.length - 1];
        else {
            // Always leave 0 in the stack
            this.pageNumberStack.push(0);
            return -1;
        }
    };
    BackbuttonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BackbuttonProvider);
    return BackbuttonProvider;
}());

//# sourceMappingURL=backbutton.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EN_TAB_PAGES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
//Enum variable for tab 
var EN_TAB_PAGES = {
    EN_TP_HOME: 0,
    EN_TP_PLANET: 1,
    EN_TP_STAR: 2,
    EN_TP_LENGTH: 3,
};
//A global variable 
var Globals = {
    //Nav ctrl of each tab page
    navCtrls: new Array(EN_TAB_PAGES.EN_TP_LENGTH),
    tabIndex: 0,
    tabs: {},
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StoriesListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StoriesListPage = (function () {
    function StoriesListPage(userService, navCtrl, navParams) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //  this.storyService.getFeed();
    }
    StoriesListPage.prototype.ionViewWillEnter = function () {
    };
    StoriesListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        //console.log('ionViewDidLoad SpottedPage');
    };
    StoriesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-stories-list',template:/*ion-inline-start:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\stories-list\stories-list.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="flex-container">\n    <h1>Termos e condições</h1>\n <div class="signup-form animated fadeInRight"  >\n  <p>Para acessar e/ou utilizar quaisquer conteúdos ou serviços relacionados à rede social “Amigo Universitário”, o “Usuário” deve:</p>\n\n  <p>Possuir a idade mínima de 18 anos e maioridade civil no país em que reside para acessar quaisquer conteúdos relacionados à rede “Amigo Universitário”. No caso do Brasil, a idade estipulada é igual ou superior a 18 anos. Ser responsável por qualquer\n      atividade que ocorra em sua conta, bem como garantir que toda a informação transmitida no registro e em todos os outros momentos é verdadeira, precisa, atual e completa; Concordar que deve manter sua conta atualizada periodicamente a fim\n      de preservar a necessária veracidade e precisão dos seus dados; Aceitar que todas as informações enviadas por si ao “Amigo Universitário” serão guardadas em banco de dados; Concordar que não irá vender, transferir, licenciar ou distribuir sua conta,\n       nome de usuário ou quaisquer outros direitos relacionados à conta. Ser responsável pelo sigilo, exclusividade e segurança de sua senha de acesso. O “Usuário” é o único indivíduo autorizado a acessar a própria\n      conta de acesso; Concordar que é o único responsável pela própria conduta e por qualquer informação, material, arquivo, texto, imagem, vídeo, foto, perfil, áudio, link e qualquer outro conteúdo ou material que enviar e publicar na rede\n      “Amigo Universitário”; Concordar que a rede “Amigo Universitário” não irá revisar nenhum material enviado, por constituir demanda técnica impossível; Garantir que não foi condenado em qualquer processo legal relacionado à agressão, violência, conduta sexual\n      inapropriada ou assédio. CONCERNENTE AO “USUÁRIO” A infração a qualquer das proibições contida nestes “Termos de Uso” podem sujeitar o “Usuário” às seguintes penas: Advertência; Exclusão temporária ou definitiva de conteúdo; Exclusão temporária\n      ou definitiva do perfil do “Usuário” infrator; §1º A administração da rede “Amigo Universitário” reserva-se o direito de, mesmo sem aviso prévio, monitorar, editar, bloquear ou mesmo remover qualquer conteúdo ou usuário que possa estar em desacordo\n      com a sistemática dos presentes Termos. No caso de bloqueio de perfil, o “Usuário” será comunicado por via eletrônica a respeito da decisão e terá o prazo de 48 horas para apresentar defesa. Caso a defesa seja indeferida ou não seja apresentada,\n      o bloqueio será definitivo e irreversível.</p>\n\n  <p>§2º O “Usuário”, quando constatada a infração, não terá direito a qualquer tipo de reembolso ou indenização em caso de exclusão de seu perfil.</p>\n\n  <p>O “Usuário” poderá enviar qualquer tipo de material ao “Amigo Universitário”, o que inclui, mas não se limita a mensagens, textos, imagens e vídeos, desde que o material não contenha: Imagens ou mesmo menção a pessoas que tenham ou aparente ter menos\n      de 18 anos; Imagens ou menções à pedofilia, sadomasoquismo, bestialidade, crime de qualquer natureza ou qualquer tipo de violência; Imagens de fundo com pessoas que tenham ou aparentem ter menos de 18 anos ou com pessoas que pareçam estar\n      fora de suas capacidades, tais como pessoas sobre influência de drogas ou álcool, ou que possam sofrer de qualquer outro tipo de desordem física ou mental; Imagens com endereço de e-mail ou qualquer menção a endereços de outro website,\n      assim como mensagens caracterizadas como spams. Imagens com manifestações contra a administração da rede “Amigo Universitário”, de qualquer natureza; Mensagens ou textos que contenham linguagem considerada ofensiva ou inconveniente; Textos com menção\n      a endereço para contato, seja este via e-mail, rede social, bate-papo instantâneo ou mesmo qualquer meio de contato que não os disponibilizados pela rede “Amigo Universitário”; Conteúdo de que não seja proprietário ou detenha licença, bem como conteúdo\n      que não seja original ou que contenha modelos e atores profissionais; Imagens em que apareça o nome e/ou a marca de estabelecimentos comerciais ou que torne possível a identificação. Restrições fixadas pela legislação brasileira e/ou de\n      onde o “Usuário” reside e/ou esteja acessando a “Amigo Universitário”. Parágrafo único: A incidência em alguma das hipóteses supracitadas pode acarretar a cumulação das penas previstas no artigo 10.</p>\n\n  <p>O “Usuário” poderá utilizar as informações contidas na rede de sites “Amigo Universitário”, incluindo aquelas relativas a outros usuários, mas apenas enquanto essa utilização estiver em sintonia com o propósito do site da rede “Amigo Universitário”, qual seja,\n      estabelecer uma rede de compartilhamento de experiências entre universitários no ambiente acadêmico. É proibida a utilização das informações e/ou dos materiais de outros usuários obtidas na rede “Amigo Universitário” para outros propósitos que não os estabelecidos no item 12. Observe que a rede “Amigo Universitário”\n      não poderá e não se responsabilizará pela utilização que um “Usuário” faça das informações ou dos materiais de outro “Usuário” de maneira indevida. Cada “Usuário” é exclusivamente responsável por tudo aquilo que envia à rede “Amigo Universitário”\n      e está ciente de que as suas publicações poderão ser utilizadas por outros usuários. O “Usuário”, ao enviar qualquer material, assume que não está infringindo nenhuma das proibições estabelecidas no item 11 supra, bem como se responsabiliza\n      por todas as consequências advindas da divulgação do material enviado, que ficará disponível para o público em geral, e garante que: É o proprietário do material ou conteúdo que publica; Está autorizado a usar ou a enviar o material a\n      fim de que este seja visualizado pelos outros usuários da rede “Amigo Universitário” ou publicamente; As pessoas mostradas no material enviado são maiores de 18 anos e possuem capacidade legal. O “Usuário” não deve utilizar a rede “Amigo Universitário” para\n      propósitos ilegais ou outros que não sejam autorizados pela legislação brasileira e pela legislação em que reside ou de onde acessar o “Amigo Universitário”, cumulativamente. O “Usuário” não deve utilizar a ferramenta de denúncia de modo indiscriminado\n      e/ou com o intuito de prejudicar os outros usuários, sob pena de bloqueio do perfil. No entanto, reitera-se que o mecanismo de denúncia poderá ser utilizado sempre que o “Usuário” observar possível infração pertinente aos presentes Termos\n      de Uso. O “Usuário” não deve: Promover comércio de qualquer tipo, inclusive de seu próprio corpo. Criar ou enviar e-mails, comentários ou outras formas de uso comercial (spam) ou de constrangimento aos outros usuários da rede “Amigo Universitário”.\n      Usar nomes de domínios ou endereços de website no seu nome de usuário sem o consentimento da administração da rede “Amigo Universitário”. Interferir ou interromper os serviços da rede “Amigo Universitário” ou de seus servidores pela utilização de mecanismos\n      ofensivos à segurança cibernética, tais como a transmissão de vírus, spywares, worms, malware ou de qualquer outro código de natureza lesiva ao bom funcionamento da rede “Amigo Universitário”. Criar contas na rede “Amigo Universitário” por meios não autorizados,\n      inclusos, mas não limitados ao uso de dispositivos automáticos como scripts, bots, spiders, crawlers e scrapers. Restringir o uso da rede “Amigo Universitário” de outros usuários, bem como não deve estimular ou facilitar a infringência dos presentes\n      Termos. Agir de modo a perturbar o bom relacionamento existente entre a rede “Amigo Universitário” e seus usuários e destes entre si (“Conduta Imprópria”). Parágrafo único: A incidência em qualquer das hipóteses supracitadas pode acarretar a aplicação\n      cumulativa das penas previstas no artigo 10.</p>\n\n  <p>É dever do “Usuário” manter-se atualizado acerca das alterações dos Termos de Uso. O “Usuário” permite que as suas informações sejam exibidas e usadas por todos os visitantes da rede “Amigo Universitário”, bem como entende que serão passíveis de indexação\n      em sites de busca; O “Usuário” concorda em adotar todas as leis, regras e regulamentos brasileiros aplicáveis ao uso da rede “Amigo Universitário”, incluindo tudo aquilo que se refere aos direitos autorais. Parágrafo único. Ao enviar material à\n      rede “Amigo Universitário”, o “Usuário” garante que é o autor exclusivo ou possui autorização plena do conteúdo que publicou, bem como renuncia a quaisquer direitos morais relativos a este conteúdo, incluindo, sem limitação, ao direito de ser identificado\n      como autor.</p>\n\n  <p>Com exceção do material que envia, o “Usuário” não possui nenhum direito em relação ao conteúdo das redes “Amigo Universitário” e não tem autorização para mudar, alterar, modificar ou adaptar nada relacionado à rede “Amigo Universitário”, nem mesmo criar outro\n      website que possa manter a aparência de estar relacionado à rede “Amigo Universitário”; O “Usuário” automaticamente concederá à rede “Amigo Universitário” licença mundial, vitalícia, não exclusiva, transferível, sublicenciável, livre de royalties ou qualquer\n      outra cobrança, a todo e qualquer material por si enviado, permitindo à rede “Amigo Universitário”, usar, adaptar, editar e modificar qualquer conteúdo contido na licença em qualquer meio de comunicação, bem como repassar tal licença aos seus afiliados\n      e sucessores, tudo sem a necessidade de aprovação prévia. As informações pessoais do “Usuário” poderão ser compartilhadas com empresas, organizações ou mesmo indivíduos se a administração da “Amigo Universitário” tiver de cumprir ordem judicial\n      ou de autoridade administrativa competente ou entender que isso é necessário para: (i) cumprir norma legal ou determinação judicial; (ii) impedir fraudes; (iii) prevenir ou auxiliar na investigação de atos ilícitos, por questões de segurança\n      da “Amigo Universitário”; (iv) proteger a “Amigo Universitário” e seus usuários de eventuais danos. O “Usuário” assume os riscos de todo o material que enviar e concorda que a administração da rede “Amigo Universitário” não pode e não será responsável por suas publicações.\n      Se o “Usuário” violar os presentes Termos, ou mesmo criar risco ou exposição legal para a rede “Amigo Universitário”, a administração poderá cancelar todos os serviços que presta ao “Usuário”, que perderá o direito de reembolso. A administração\n      da rede “Amigo Universitário” se reserva o direito de, por qualquer razão, excluir ou modificar o acesso do “Usuário” sem notificação, em qualquer momento e sem nenhum tipo de compromisso para com esse. Se a conta do “Usuário” for encerrada, por\n      vontade própria ou por imposição da rede “Amigo Universitário”, todos os dados do perfil ficarão inacessíveis aos outros usuários, e serão permanentemente excluídos no banco de dados da “Amigo Universitário” serão permanentemente excluídos. Parágrafo único. Os materiais enviados pelo “Usuário” poderão permanecer visíveis na rede “Amigo Universitário” mesmo após o encerramento do cadastro, visto\n      que a “Amigo Universitário” não tem controle acerca da indexação, por sites de busca, do conteúdo enviado.</p>\n\n  <p>No momento em que a conta do “Usuário” é encerrada, seja por ato próprio ou da administração da rede “Amigo Universitário”, cessam todas as licenças, exceto a mencionada no item 21, e todos os direitos garantidos ao “Usuário” por meio destes Termos.\n      O bloco de usuários não cadastrados na “Amigo Universitário” (“Terceiros”) terá acesso limitado aos serviços desta. Parágrafo único. Nenhum “Terceiro” poderá executar ou ser beneficiado pelo contido nestes Termos de Uso.</p>\n\n  <p>CONCERNE À Amigo Universitário A “Amigo Universitário” não se responsabilizará nem pela conduta, nem por qualquer material enviado pelo “Usuário”. A rede “Amigo Universitário” poderá exibir links para outros sites ou fontes de terceiros a título informativo, sobre os quais\n      não possuirá controle, motivo pelo qual não se responsabilizará por danos de quaisquer naturezas ao “Usuário”, em virtude de eventual utilização de tais dados. Parágrafo único. O “Usuário” fica ciente de que os sites ou fontes de terceiros\n      serão regidos por políticas e termos de uso próprios.</p>\n\n  <p>A rede “Amigo Universitário” se exime da responsabilidade ocasionada por qualquer tipo de invasão hacker que possa comprometer os dados guardados. A rede “Amigo Universitário” buscará o ótimo funcionamento de seus serviços, embora não possa garantir que todas\n      as funções estarão acessíveis de maneira ininterrupta. A “Amigo Universitário” não oferece nenhum tipo de garantia quanto à qualidade, performance e funcionalidade de seus serviços. A “Amigo Universitário” não poderá ser responsabilizada por reduções de funcionalidade\n      de seus serviços acessados em dispositivos móveis, bem como não se responsabilizará por eventuais cobranças aplicadas pelos provedores de internet ou telefone se o “Usuário” concordar em receber mensagens ou notificações da “Amigo Universitário”\n      em seu dispositivo. A “Amigo Universitário” poderá excluir, suspender, modificar ou mesmo criar novos serviços sem informar o “Usuário”. \n    </p>\n      \n      <!--  A “Amigo Universitário” poderá graduar o acesso dos usuários conforme o plano de acesso adquirido a serem definidos em breve e os critérios utilizados\n      para tal distribuição se farão por completa discricionariedade da “Amigo Universitário”, sem aviso prévio. As formas e condições de pagamento, bem como as vantagens adquiridas em cada plano de acesso serão tratadas em Termos próprios e possuirão\n      regulamentação especial que, no entanto, não excluem as disposições contidas nestes “Termos de Uso”. Parágrafo único. Os usuários não assinantes dos serviços da “Amigo Universitário” e aqueles cuja assinatura tenha vencido ou sido suspensa poderão\n      ter o acesso restringido parcial e/ou totalmente</p> -->\n     \n\n  <p>A “Amigo Universitário” não se responsabilizará por qualquer tipo de informação contida em seus servidores ou por qualquer perda decorrente da transmissão, utilização de dados ou mesmo conteúdo impreciso publicado por outros usuários. A “Amigo Universitário”\n      não garante que seus servidores estejam livres de vírus ou de mecanismos que possam danificar computadores e não se responsabilizará por eventuais danos que possam ocorrer nos sistemas hardware e software do “Usuário”. SOBRE AS ATUALIZAÇÕES\n      DOS TERMOS A “Amigo Universitário” reserva-se o direito de modificar os presentes Termos de Uso a qualquer momento e sem justificativa. Parágrafo único. As modificações acima referidas poderão ser feitas por meio da simples atualização dos presentes\n      Termos na rede “Amigo Universitário”, sem a necessidade de comunicação ao “Usuário”. Além disso, a ciência do “Usuário” a respeito dos novos Termos se dará no primeiro acesso após a entrada em vigor das novas regras.</p>\n\n  <p>Os Termos de Uso, quando atualizados, entrarão em vigor assim que forem publicados na rede “Amigo Universitário”, a não ser que o contrário seja estipulado nos próprios motivos da atualização. TERMOS DE ACEITE Ao aceitar os presentes Termos, o “Usuário”\n      concorda que a “Amigo Universitário”, suas empresas coligadas, diretores, empregados e agentes são imunes de qualquer responsabilidade legal sobre qualquer conteúdo enviado, inclusive aqueles que representem conduta difamatória, ofensiva ou ilegal\n      de qualquer terceiro. O “Usuário” compreende e expressamente concorda que a “Amigo Universitário” poderá monitorar todas as áreas de seus serviços para fazer cumprir estes Termos de Uso ou outras regras que possam ser publicadas, bem como poderá\n      excluir ou editar qualquer conteúdo que viole os presentes Termos. Em nenhuma circunstância a administração da “Amigo Universitário”, suas empresas coligadas, diretores, empregados ou agentes serão legalmente responsáveis por quaisquer danos diretos,\n      indiretos, acidentais, especiais, ou punitivos resultantes de: (i) quaisquer erros, enganos ou imprecisões de conteúdo; (ii) dano pessoal ou de propriedade de qualquer natureza resultante do seu acesso e uso deste serviço; (iii) qualquer\n      uso não autorizado dos servidores da “Amigo Universitário” e/ou qualquer e toda informação pessoal armazenada ou ainda qualquer erro, perda, ou instabilidade de dados, problemas no servidor de hospedagem ou corrupção de qualquer material; (iv) qualquer\n      interrupção ou cessação de transmissão para o website e aplicativo; (v) quaisquer bugs, vírus ou semelhantes que possam ser transmitidos para ou através do website por quaisquer terceiros e/ou (vi) quaisquer erros ou omissões de qualquer conteúdo ou\n      por perda ou dano de qualquer tipo resultante de qualquer conteúdo do carregado, enviado por e-mail, transmitido ou de outra forma disponível através do website “Amigo Universitário”. O “Usuário” entende que deverá defender, indenizar e manter a\n      “Amigo Universitário”, suas empresas coligadas, diretores, acionistas, empregados ou agentes, contra qualquer pedido de indenização, danos, obrigações, perdas, responsabilidades, custos ou dívidas e despesas (incluindo, mas não limitado a honorários\n      de advogados e despesas legais) que advenham de: (i) uso indevido e de acesso à rede de sites “Amigo Universitário”; (ii) a violação de qualquer cláusula dos Termos de Uso; (iii) a violação de qualquer direito de terceiros, incluindo e não se limitando\n      a qualquer copyright, propriedade ou direito de privacidade. Ainda que qualquer das cláusulas dos presentes “Termos de Uso” seja declarada ilegal, inválida ou não puder ser aplicada em sua integralidade, o restante dos “Termos de Uso”\n      permanecem com plena aplicabilidade e eficácia. O exercício parcial, o atraso ou mesmo a falha da “Amigo Universitário” no exercício de seus direitos contidos ou não nos presentes Termos de Uso não importa em sua renúncia. RESTRIÇÕES TERRITORIAIS\n      A informação fornecida dentro da rede “Amigo Universitário” não pode ser distribuída ou usada por nenhuma pessoa ou entidade que esteja em jurisdição ou país que proíba tais condutas, bem como naqueles países ou jurisdições que exijam que a “Amigo Universitário”\n      proceda a algum tipo de registro. Reservamo-nos ao direito de limitar a disponibilidade total ou parcial da rede “Amigo Universitário” para qualquer pessoa, área ou jurisdição a qualquer momento e sem justificativas. Os presentes Termos de Uso:\n      não impedem que a “Amigo Universitário” submeta eventual lide à apreciação judicial. Não conferem nenhum tipo de direito a terceiros beneficiários. A “Amigo Universitário” detém todos os direitos não expressamente garantidos nestes Termos de Uso ao “Usuário”.</p>\n<h2>\nPolítica de Privacidade\n</h2>\n<p>  A rede social Amigo Universitário solicita algumas permissões do Facebook para que sua experiência dentro do app fique mais personalizada e flúida.Para que possamos organizar e fornecer informações relevantes para nossos usuários, solicitamos os seguintes dados do Facebook:email,foto e informações públicas do usuário.Essas informações que solicitamos não são repassadas para aplicativos terceiros e nem divulgadas pelo Amigo Universitário, assim sendo , o uso das mesmas é exclusivamente para personalização da experiência.\n</p><br>\n<p *ngIf="currentUser != undefined">Voce concordou com os termos em :{{currentUser.timestampConcordou | date : \'dd/MM/y H:mm\'}} </p>\n    </div>\n   \n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Documents\AlunoAmigo\b12\src\pages\stories-list\stories-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], StoriesListPage);
    return StoriesListPage;
}());

//# sourceMappingURL=stories-list.js.map

/***/ })

},[433]);
//# sourceMappingURL=main.js.map