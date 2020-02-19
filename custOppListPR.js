if (typeof(SiebelAppFacade.CustOppListPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.CustOppListPR");
    define("siebel/custom/custOppListPR", ["siebel/jqgridrenderer"], function()
    {
        SiebelAppFacade.CustOppListPR = (function()
        {

            function CustOppListPR(pm)
            {
                SiebelAppFacade.CustOppListPR.superclass.constructor.call(this, pm);
            }

            SiebelJS.Extend(CustOppListPR, SiebelAppFacade.JQGridRenderer);

            CustOppListPR.prototype.Init = function()
            {
                SiebelAppFacade.CustOppListPR.superclass.Init.call(this);
            }

            CustOppListPR.prototype.ShowUI = function()
            {
                SiebelAppFacade.CustOppListPR.superclass.ShowUI.call(this);
            }

            CustOppListPR.prototype.BindData = function(bRefresh)
            {
                SiebelAppFacade.CustOppListPR.superclass.BindData.call(this, bRefresh);
				var probVal = this.GetPM().Get("ProbabilityValue");
				if (probVal === "100%"){
					$("<div id = 'dialog' title = '100% Probability'> Please verify" + "that this <strong>opportunity</strong> is now " + "<span style='color:red'>certain</span></div>").dialog({
						buttons: [
						{text: "Yes",click:function(){$(this).dialog("close");}},
						{text: "No",click:function(){$("<div>Please change value to less than 100% to indicate"+"that this opportunity is not yet certain.</div>").dialog();
						$(this).dialog("close");}}
						]
					});
				}
				this.IdentifyProbabilities();
            }
			
			CustOppListPR.prototype.IdentifyProbabilities = function(){
				var recordSet = this.GetPM().Get("GetRecordSet");
				for (record in recordSet){
					var cell = $("#"+this.GetPM().Get("GetPlaceholder")).find("tr[id="+(Number(record)+1)+"]").find("td[id*=Primary_Revenue_Win_Probability]");
					var val = recordSet[record]["Primary Revenue Win Probability"];
					switch(val){
						case("100%"):
							cell.css("background-color","chartreuse");
							break;
						case("0%"):
							cell.css({"background-color":"red", "color":"white"});
							break;
						default:
							cell.css("background-color","yellow");
					}
				}
			}

            return CustOppListPR;
        }());
        return "SiebelAppFacade.CustOppListPR";
    })
}