if( typeof( SiebelAppFacade.DemoPR ) === "undefined" ){
	SiebelJS.Namespace( "SiebelAppFacade.DemoPR" );
	define("siebel/custom/demoPR", ["siebel/phyrenderer"], function () {
		SiebelAppFacade.DemoPR = ( function(){
			function DemoPR( pm ){
				SiebelAppFacade.DemoPR.superclass.constructor.call( this, pm );
				SiebelJS.Log("in init");
			}
			SiebelJS.Extend( DemoPR, SiebelAppFacade.PhysicalRenderer );

			DemoPR.prototype.BindData = function () {	
				SiebelAppFacade.DemoPR.superclass.BindData.call(this);		

				var controls = this.GetPM().Get("GetControls");
				var htmlNameLastName;
				var htmlNameFirstName;
				for (var control in controls) {
					if (controls[control].GetFieldName() == "Last Name") {	// Siebel field name
						htmlNameLastName = controls[control].GetInputName();	
					}
					if (controls[control].GetFieldName() == "First Name") {	// Siebel field name
						htmlNameFirstName = controls[control].GetInputName();	
					}
				}

				$("[name='"+htmlNameLastName+"']")
				.mouseenter(function()
 				  {
					$(this).css({"color":"green","background-color":"yellow"});
				  }
				)
				.mouseleave(function()
				  {
					$(this).css({"color":"yellow","background-color":"green"});
				  }
				);
				$("[name='"+htmlNameFirstName+"']")
				.mouseenter(function()
 				  {
					$(this).css({"color":"green","background-color":"yellow"});
				  }
				)
				.mouseleave(function()
				  {
					$(this).css({"color":"yellow","background-color":"green"});
				  }
				);
				
			}

			return DemoPR;
			} ());
		return "SiebelAppFacade.DemoPR";
	});
}
