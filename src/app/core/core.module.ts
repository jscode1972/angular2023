import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Logger, MessageService, BackendService, GithubService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    /* Logger, MessageService,
    BackendService,
    GithubService, */
  ]
})
export class CoreModule { 
  // https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/
  // The core module must be imported only in the root module. Other modules must not import the core modules. 
  // You can use the following code to stop the other modules from importing the core module.
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
