import {Router,RouterConfiguration} from 'aurelia-router'

export class App
{
	router:Router;
	configureRouter(config:RouterConfiguration,router:Router)
	{
		this.router=router;
		config.title="Hello"
		config.map([
		
			{route:['','Login'] , moduleId:'Login/Login',title:'Login',nav:true},
			{route:'Region',moduleId:'Region/Region',nav:true,title:'Region'},
			{route:'ContactUs',moduleId:'ContactUs/contact', nav:true,title:'ContactUs'},
			{route:'Marks',moduleId:'Marks/Marks',title:'Marks',name:"Marks"}

			// {route:'contacts/:id',moduleId:'ContactUs/contact-detail',name:'contacts'}


		])
		config.fallbackRoute("Marks")
	}
}