import { Component ,OnInit, Renderer2 } from '@angular/core';
import {TokenService} from "./services/token.service";
import {Constants} from "./constants";
import {HttpClient} from "@angular/common/http";
import { NgxPermissionsService, NgxPermissionsConfigurationService } from 'ngx-permissions';
import {User} from "./model/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  master = 'Master';
  userModel={} as User;
  permission: string[] = ['guest'];


  constructor(private permissionsService: NgxPermissionsService,
    private ngxPermissionsConfigurationService: NgxPermissionsConfigurationService,
    private token:TokenService, public http: HttpClient,private renderer2: Renderer2,) {

      this.token.isValid();


  }

  ngOnInit(): void {

      let perm = [];
      perm.push(this.token.getUserLocal().fkUserType);
      // console.log(perm);
      this.permissionsService.loadPermissions(perm);
      // fkUserType
      // console.log(this.token.getUserLocal());

        // this.permissionsService.loadPermissions(['admin']);
        //   this.token.getUser().subscribe(data => {
        //           this.userModel=data as User;
        //           let perm = [];
        //           perm.push(this.userModel.fkUserType);
        //           // console.log(perm);
        //           this.permissionsService.loadPermissions(perm);
        //       },
        //       error => {
        //           console.log(error);
        //
        //
        //       });

        // this.ngxPermissionsConfigurationService.addPermissionStrategy('disable', (tF: any) => {
        //     this.renderer2.setAttribute(tF.elementRef.nativeElement.nextSibling, 'disabled', 'true');
        // });

        // this.ngxPermissionsConfigurationService.setDefaultOnUnauthorizedStrategy('disable');
    }

  isLogIn(){

    return this.token.isValid();
  }


    public unAuthorized() {
        console.log('unAuthorized');
    }

    public authorized() {
        console.log('authorizes')
    }

    public addPermission() {
        this.permissionsService.addPermission('CHECK_LOAD');
    }

    changeToAdmin() {
        this.permission = ['ADMIN'];
        console.log(this.permission);
    }

    changeToAnotherPermission() {
        this.permission = ['AWESOME'];
    }

    changeToGuest() {
        this.permission = ['GUEST'];
        console.log(this.permission);
    }


}
