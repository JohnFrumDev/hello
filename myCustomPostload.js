if (typeof(SiebelAppFacade.Postload) == "undefined" ){
	Namespace('SiebelAppFacade.Postload');
	(function(){
		SiebelApp.EventManager.addListner("postload", OnPostload, this);
		function OnPostload( ){
			try{
				SiebelJS.Log("Loaded");
				$("[class*=applet-head]").on("dblclick", function(){
					$(this).parent().find("[class*=content]").slideToggle();
				});
			}
			catch(error){
				SiebelJS.Log("Error caught in postload: " + error);
			}
		}
	}());
}