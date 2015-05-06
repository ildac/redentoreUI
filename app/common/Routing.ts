/// <reference path="../_App.ts" />

module common {
	export class Routing {
		private static router: ng.route.IRouteProvider;
		
		public static $inject = ['$routeProvider'];
		constructor ($routeProvider: ng.route.IRouteProvider){
			$routeProvider.when("/", { templateUrl: "views/courses.html"} );
		}
		 
	}
	
	app.module.register.config(Routing);
	
}