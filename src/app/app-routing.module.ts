import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { StorewiseComponent } from './storewise/storewise.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'lock', component: LockscreenComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'storewisereport', component: StorewiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
