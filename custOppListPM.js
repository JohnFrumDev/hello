if (typeof(SiebelAppFacade.CustOppListPM) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.CustOppListPM");
    define("siebel/custom/custOppListPM", ["siebel/listpmodel"], function()
    {
        SiebelAppFacade.CustOppListPM = (function()
        {

            function CustOppListPM(proxy)
            {
                SiebelAppFacade.CustOppListPM.superclass.constructor.call(this,proxy);
            }

            SiebelJS.Extend(CustOppListPM, SiebelAppFacade.ListPresentationModel);

            CustOppListPM.prototype.Init = function()
            {
                SiebelAppFacade.CustOppListPM.superclass.Init.call(this);
				this.AddProperty("ProbabilityValue", "");
                this.AddMethod("FieldChange", this.OnFieldChange, { sequence: false, scope: this });
            }

            CustOppListPM.prototype.OnFieldChange = function(control, value)
            {
                var fieldName = control.GetName();
				if(fieldName == "Primary Revenue Win Probability"){
					this.SetProperty("ProbabilityValue",value);
				}
            }

            return CustOppListPM;
        }());
        return "SiebelAppFacade.CustOppListPM";
    })
}