import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from './auth/guards/auth.activate';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile/profile.component';
import { PageNotFoundComponent } from './core/pageNotFound/page-not-found/page-not-found.component';


const routes: Routes = [{
  path:'',
  pathMatch:'full',
  canActivate: [AuthActivate],
  redirectTo:'',
  data:{ title:'Aquatec',

}
},
{
  path:'auth/login',
  component:LoginComponent,
  canActivate: [AuthActivate],
  data:{title: 'Login',
  logoutGuard:true

}
},
{
  path:'auth/profile',
  component: ProfileComponent,
  canActivate: [AuthActivate],
  data:{title: 'My profile',
  loginGuard:true
}
},
{
  path:'auth/logout',
  component: LogoutComponent,
  canActivate: [AuthActivate],
  data:{title: 'My profile',
  loginGuard:true
}
},
{
 path:'**',
 component:PageNotFoundComponent,
 canActivate: [AuthActivate],
 data:{title:'Error 404',

}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
