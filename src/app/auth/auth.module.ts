import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {CommonModule} from "@angular/common";
import {AccountComponent} from "./account/account.component";
import {AccountService} from "./account/account.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {AccountActivationComponent} from "./account/account-activation/account-activation.component";
import {ResendActivationComponent} from "./account/account-activation/resend-activation.component";

@NgModule({
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbAlertModule
    ],
    declarations: [
        SignupComponent,
        SigninComponent,
        AccountComponent,
        AccountActivationComponent,
        ResendActivationComponent
    ],
    providers: [
        AuthService,
        AccountService,
        AuthGuardService,
        JwtHelperService
    ]
})
export class AuthModule {

}