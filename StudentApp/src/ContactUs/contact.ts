import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.map([
      { route: ['','blankview'],              moduleId: 'ContactUs/blankview',   title: 'Select'},
      { route: 'contacts/:id',  moduleId: 'ContactUs/contact-detail', name:'contacts' }
    ]);

    this.router = router;
  }
}