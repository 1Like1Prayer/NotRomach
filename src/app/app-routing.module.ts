import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotRomachComponent} from './not-romach/not-romach.component';


const routes: Routes = [
  {
    path: '', component: NotRomachComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
