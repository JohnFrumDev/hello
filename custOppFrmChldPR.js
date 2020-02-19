if (typeof(SiebelAppFacade.CustOppFrmChldPR) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.CustOppFrmChldPR");
    define("siebel/custom/custOppFrmChldPR", ["siebel/phyrenderer"],
        function() {
            SiebelAppFacade.CustOppFrmChldPR = (function() {

                function CustOppFrmChldPR(pm) {
                    SiebelAppFacade.CustOppFrmChldPR.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(CustOppFrmChldPR, SiebelAppFacade.PhysicalRenderer);

                CustOppFrmChldPR.prototype.Init = function() {
                    // Init is called each time the object is initialised.
                    // Add code here that should happen before default processing
                    SiebelAppFacade.CustOppFrmChldPR.superclass.Init.apply(this, arguments);
                    SiebelAppFacade.CustOppFrmChldPR.superclass.Init.call(this);
                    this.AttachPMBinding("IsSecure", this.HiliteSecure);
                    SiebelJS.Log(this.GetPM().Get("GetName") + ": " + this.constructor.name + ":      Init method reached.");
                    // Add code here that should happen after default processing
                }


                CustOppFrmChldPR.prototype.ShowUI = function() {
                    // ShowUI is called when the object is initially laid out.
                    // Add code here that should happen before default processing
                    SiebelJS.Log(this.GetPM().Get("GetName") + ": " + this.constructor.name + ":      ShowUI method reached.");
                    SiebelAppFacade.CustOppFrmChldPR.superclass.ShowUI.apply(this, arguments);
                    // Add code here that should happen after default processing
                }

                CustOppFrmChldPR.prototype.BindData = function(bRefresh) {
                    // BindData is called each time the data set changes.
                    // This is where you'll bind that data to user interface elements you might have created in ShowUI
                    // Add code here that should happen before default processing
                    SiebelJS.Log(this.GetPM().Get("GetName") + ": " + this.constructor.name + ":      BindData method reached.");
                    SiebelAppFacade.CustOppFrmChldPR.superclass.BindData.call(this);
                    this.HiliteSecure();
                    // Add code here that should happen after default processing
                }

                CustOppFrmChldPR.prototype.BindEvents = function() {
                    // BindEvents is where we add UI event processing.
                    // Add code here that should happen before default processing
                    SiebelJS.Log(this.GetPM().Get("GetName") + ": " + this.constructor.name + ":      BindEvents method reached.");
                    SiebelAppFacade.CustOppFrmChldPR.superclass.BindEvents.apply(this, arguments);
                    // Add code here that should happen after default processing
                }

                CustOppFrmChldPR.prototype.EndLife = function() {
                    // EndLife is where we perform any required cleanup.
                    // Add code here that should happen before default processing
                    SiebelJS.Log(this.GetPM().Get("GetName") + ": " + this.constructor.name + ":      EndLife method reached.");
                    SiebelAppFacade.CustOppFrmChldPR.superclass.EndLife.apply(this, arguments);
                    // Add code here that should happen after default processing
                }

                CustOppFrmChldPR.prototype.HiliteSecure = function() {
                    var PM = this.GetPM();
                    var secureStatus = PM.Get("IsSecure");
                    var controls = PM.Get("GetControls");
                    for (controlKey in controls) {
                        if (controls[controlKey].GetFieldName() == "Secure Flag") {
                            var securityControl = controls[controlKey];
							var htmlName = securityControl.GetInputName();
                            if (secureStatus == true) {
                                $("[name='" + htmlName + "']").parent()
                                    .css({
                                        "background-color": "red",
                                        "color": "white",
                                        "font-weight": "bold"
                                    });
                            } else {
                                $("[name='" + htmlName + "']").parent()
                                    .css({
                                        "background-color": "white",
                                        "color": "black",
                                        "font-weight": "normal"
                                    });
                            }
                        }
                    }
                }
                return CustOppFrmChldPR;
            }());
            return "SiebelAppFacade.CustOppFrmChldPR";
        });
}