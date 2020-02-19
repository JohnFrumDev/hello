if (typeof(SiebelAppFacade.ServiceRequestDetailPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.ServiceRequestDetailPR");
    define("siebel/custom/serviceRequestDetailPR", ["siebel/phyrenderer"], function()
    {
        SiebelAppFacade.ServiceRequestDetailPR = (function()
        {

            function ServiceRequestDetailPR(pm)
            {
                SiebelAppFacade.ServiceRequestDetailPR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(ServiceRequestDetailPR, SiebelAppFacade.PhysicalRenderer);

            ServiceRequestDetailPR.prototype.Init = function()
            {
                SiebelAppFacade.ServiceRequestDetailPR.superclass.Init.apply(this, arguments);
            }

            ServiceRequestDetailPR.prototype.ShowUI = function()
            {
                SiebelAppFacade.ServiceRequestDetailPR.superclass.ShowUI.apply(this, arguments);
				
				SiebelJS.Log("ShowUI loaded");
				
				var pm = this.GetPM(); $("#s_" + pm.Get("GetFullId") + "_div"). resizable();
            }

            ServiceRequestDetailPR.prototype.BindData = function(bRefresh)
            {
                SiebelAppFacade.ServiceRequestDetailPR.superclass.BindData.apply(this, arguments);
            }

            ServiceRequestDetailPR.prototype.BindEvents = function()
            {
                SiebelAppFacade.ServiceRequestDetailPR.superclass.BindEvents.apply(this, arguments);
            }

            ServiceRequestDetailPR.prototype.EndLife = function()
            {
                SiebelAppFacade.ServiceRequestDetailPR.superclass.EndLife.apply(this, arguments);
            }

            return ServiceRequestDetailPR;
        }());
        return "SiebelAppFacade.ServiceRequestDetailPR";
    })
}