if (typeof(SiebelAppFacade.CSButtonsFormAppletPM) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.CSButtonsFormAppletPM");
    define("siebel/custom/CSButtonsFormAppletPM", ["siebel/pmodel"], function()
    {
        SiebelAppFacade.CSButtonsFormAppletPM = (function()
        {

            function CSButtonsFormAppletPM(pm)
            {
                SiebelAppFacade.CSButtonsFormAppletPM.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(CSButtonsFormAppletPM, SiebelAppFacade.PresentationModel);

            CSButtonsFormAppletPM.prototype.Init = function()
            {
                SiebelAppFacade.CSButtonsFormAppletPM.superclass.Init.apply(this, arguments);
				this.AddMethod("ShowSelection", this.GetContact, {sequence:false, scope:this }); 
				this.AddProperty("ContactId", "");
            }
			
			CSButtonsFormAppletPM.prototype.GetContact=function() {
				var controls = this.Get("GetControls");  
				var value;  
				for (controlKey in controls) {     
					if (controls[controlKey].GetFieldName() == "Row Id") {    
						value = this.ExecuteMethod("GetFieldValue",controls[controlKey]);    
						this.SetProperty("ContactId", value);
					}  
				} 
			} 

            CSButtonsFormAppletPM.prototype.Setup = function(propSet)
            {
                SiebelAppFacade.CSButtonsFormAppletPM.superclass.Setup.apply(this, arguments);
            }

            return CSButtonsFormAppletPM;
        }());
        return "SiebelAppFacade.CSButtonsFormAppletPM";
    })
}