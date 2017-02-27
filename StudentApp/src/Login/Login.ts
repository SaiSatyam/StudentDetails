
import {Router} from 'aurelia-router'
import {inject} from 'aurelia-framework';
import {ValidationRules, ValidationController} from "aurelia-validation";
 

@inject(ValidationController,Router)
export class App {
 
  msg = '';
  firstname: string = '';
  email: string = '';
  // val:boolean
 router:Router
  constructor(private controller: ValidationController,router:Router) {
this.router=router;
    ValidationRules
      .ensure((m: App) => m.email).email().required()
      .ensure((m: App) => m.firstname).displayName("First name").required()
      .on(this);
  }
 
  validateMe() {

    this.controller
      .validate().then(result=>{if(result.valid)
        
        {
          // this.msg="All is good"
          this.router.navigateToRoute('Marks')

        }
// this.val=true;

        else
        {
          this.msg="you have errors"
        }

      // .then(v => {
      //   if (v.length === 0)
      //     this.message = "All is good!";
      //   else
      //     this.message = "You have errors!";
      })
  }
}