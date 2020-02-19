if (typeof(SiebelAppFacade.CustOppListV2PR) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.CustOppListV2PR");
    define("siebel/custom/custOppListV2PR", ["siebel/jqgridrenderer"], function() {
        SiebelAppFacade.CustOppListV2PR = (function() {

            function CustOppListV2PR(pm) {
                SiebelAppFacade.CustOppListV2PR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(CustOppListV2PR, SiebelAppFacade.JQGridRenderer);

            CustOppListV2PR.prototype.ShowUI = function(){
				SiebelAppFacade.CustOppListV2PR.superclass.ShowUI.call(this);
				
				var inPS = SiebelApp.S_App.NewPropertySet();
				var outPS = SiebelApp.S_App.NewPropertySet();
				inPS.SetProperty("Name", "Is Manager");
				var service = SiebelApp.S_App.GetService("SessionAccessService");
				outPS = service.InvokeMethod("GetProfileAttr", inPS);
				var resultSet = outPS.GetChildByType("ResultSet");
				var returnVal = resultSet.GetProperty("Value");
				
				if (returnVal == "Y"){
					var docsButton = "<button id='docs' style='background-color:yellow;'>VIEW DOCUMENTATION</button>";
					var placeHolder = this.GetPM().Get("GetPlaceholder");
					$('#'+placeHolder+'d').parent().before(docsButton);
					try{
						$("#docs").click(
							function(){
								var URL = 'http://docs.oracle.com';
								window.open(URL, 'Documentation', 'width=400,height=400');
							}
						);
					}
					catch(err){
						alert("Error during attempt to reach external URL: "+err);
					}
				}
			}

            return CustOppListV2PR;
        }());
        return "SiebelAppFacade.CustOppListV2PR";
    })
}