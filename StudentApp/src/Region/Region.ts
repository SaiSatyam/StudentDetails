import {Router,RouterConfiguration} from 'aurelia-router'

export class App
{
	router:Router;
	configureRouter(config:RouterConfiguration,router:Router)
	{
		this.router=router;
		config.title="Hell"
		config.map([
		
			{route:['','North'] ,moduleId:'Region/North',title:'RegionsInNorth',nav:true},
			{route:'South',moduleId:'Region/South',nav:true,title:'RegionsInSouth'}])
	}
}