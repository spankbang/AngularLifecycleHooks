import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
 
 If new component is created/instantiated , angular goes for couple of differet phases in this creation process. 
 
          ngOnChanges => called after bound input property changes.
          ngOnInit => called once after the component is initialized !
          ngDoCheck => called during the every change detection done run
          ngAfterContentInit => called after the content(ng-content) has been projected into view.
          ngAfterContentChecked => called every time the projected content has been checked.
          ngAfterViewInit => Called after component's view ( and child views ) has been initialized.
          ngAfterViewChecked => called every time the view have been checked.
          ngOnDestroy => called once the component is about to be destryed.
   
 */