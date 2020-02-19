if (typeof(SiebelAppFacade.CustContFrmPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.CustContFrmPR");
    define("siebel/custom/custContFrmPR", ["siebel/phyrenderer"], function()
    {
        SiebelAppFacade.CustContFrmPR = (function()
        {

            function CustContFrmPR(pm)
            {
                SiebelAppFacade.CustContFrmPR.superclass.constructor.call(this, pm);
            }

            SiebelJS.Extend(CustContFrmPR, SiebelAppFacade.PhysicalRenderer);

            CustContFrmPR.prototype.Init = function()
            {
				console.log("InitPR loaded");
                SiebelAppFacade.CustContFrmPR.superclass.Init.call(this);
				this.AttachPMBinding("AddressProperty", this.SetUpMap);
            }
			
			CustContFrmPR.prototype.SetUpMap = function(){
				console.log("SetUpMap loaded");
				var PM = this.GetPM();
				var address = PM.Get("AddressProperty");
				address = address.replace(/ /g,"+");
				var URL = 'https://www.google.com/maps?t=m&g='+address;
				$("#map_link").click(
					function(){
							window.open(URL,'Google Map', 'width=400,height=600');
					});
			}

            CustContFrmPR.prototype.BindData = function()
            {
                SiebelAppFacade.CustContFrmPR.superclass.BindData.call(this);
				var PM = this.GetPM();
				var newLink = "<span id = 'map_link' style='color:blue;text-decoration:underline;cursor:pointer'>View on map</span>";
				var controls = PM.Get("GetControls");
				var addressControlName = controls["Business Street Address"].GetInputName();
				$("[name='"+addressControlName+"']").parent().after(newLink);
            }

            return CustContFrmPR;
        }());
        return "SiebelAppFacade.CustContFrmPR";
    });
}