if (typeof(SiebelAppFacade.CSButtonsFormAppletPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.CSButtonsFormAppletPR");
    define("siebel/custom/CSButtonsFormAppletPR", ["siebel/phyrenderer"], function()
    {
        SiebelAppFacade.CSButtonsFormAppletPR = (function()
        {

            function CSButtonsFormAppletPR(pm)
            {
                SiebelAppFacade.CSButtonsFormAppletPR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(CSButtonsFormAppletPR, SiebelAppFacade.PhysicalRenderer);

            CSButtonsFormAppletPR.prototype.Init = function()
            {
                SiebelAppFacade.CSButtonsFormAppletPR.superclass.Init.apply(this, arguments);
				this.AttachPMBinding("ContactId", this.GetContactId);
            }
			
			var ContactId;
			
			CSButtonsFormAppletPR.prototype.GetContactId = function(){   
				var PM = this.GetPM();   
				ContactId = PM.Get("ContactId");			
				return ContactId;
			}

            CSButtonsFormAppletPR.prototype.ShowUI = function()
            {
                SiebelAppFacade.CSButtonsFormAppletPR.superclass.ShowUI.apply(this, arguments);
				
				SiebelJS.Log("Hello ShowUI");
				
            }

            CSButtonsFormAppletPR.prototype.BindData = function(bRefresh)
            {
                SiebelAppFacade.CSButtonsFormAppletPR.superclass.BindData.apply(this, arguments);
				SiebelJS.Log("BindData loaded");
				
				this.ConstructButtons();
            }
			
			CSButtonsFormAppletPR.prototype.callFunction = function(method, cont) {
				var inPS = SiebelApp.S_App.NewPropertySet();
				var outPS = SiebelApp.S_App.NewPropertySet(); 
				inPS.SetProperty("ContactId", ContactId);
				var service = SiebelApp.S_App.GetService("CS Toolbar Utils");  
				if(cont)
					outPS = service.InvokeMethod(method, inPS);
				else
					outPS = service.InvokeMethod(method);  
				var resultSet = outPS.GetChildByType("ResultSet");
				var returnVal = resultSet.GetProperty("FullName") != null ? resultSet.GetProperty("FullName") : resultSet.GetProperty("Result");
				var Error = resultSet.GetProperty("Error");
				if (Error != null) SiebelJS.Log("Error :" + Error);
				SiebelJS.Log(returnVal);
				SiebelJS.Log(method);
			}
			
			CSButtonsFormAppletPR.prototype.ConstructButtons = function()
			{
				var PM = this.GetPM();
                var controls = PM.Get("GetControls");
				var that = this;
                for (controlKey in controls) {
                    if (controls[controlKey].GetFieldName() == "Last Name") {
                        var securityControl = controls[controlKey];
						var htmlName = securityControl.GetInputName();
                    }
                }
				$("[name=s_2_1_0_0]").parent().css({"visibility": "hidden", "height":"1px"});
				$("[name=s_2_1_1_0]").parent().css({"visibility": "hidden", "height":"1px"});
				$("[name=s_2_1_0_0]").css({"visibility": "hidden", "height":"1px"});
				$("[name=s_2_1_1_0]").css({"visibility": "hidden", "height":"1px"});
				$("#a_2 > div > table > tbody > tr:nth-child(2) > td:nth-child(1)").css({"height":"1px"});
				
				var width = $(document).width();
				var leftOffset = (width-600)/2;
				var height = $("#a_2").height();
				var topOffset = height/3;
				var anotherDiv = "<table data-siebel-form-table='true' class='GridBack' border='0' cellspacing='0' cellpadding='0' datatable='0' summary=''><tbody><tr style='height: 4px;'></tr><tr><td nowrap='' valign='middle' style='width:100%;' colspan='1' rowspan='1'><div id='id_bp' style='width:100%;'class='GridBorder' align='center'>";
				var refreshButton = "<button id='refresh' title = 'refresh' style='background: url(../IMAGES/custom/refresh.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var callButton = "<button id='call' title = 'call' style='background: url(../IMAGES/custom/phone_call.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var redirectButton = "<button id='redirect' title = 'redirect' style='background: url(../IMAGES/custom/information.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var createTaskButton = "<button id='createTask' title = 'createTask' style='background: url(../IMAGES/custom/player_playlist.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var createContactButton = "<button id='newContact' title = 'newContact' style='background: url(../IMAGES/custom/man_person_mens_room.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var createActivityButton = "<button id='createActivity' title = 'createActivity' style='background: url(../IMAGES/custom/monotone_check_yes_ok.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var fillFormButton = "<button id='fill' title = 'fill' style='background: url(../IMAGES/custom/livejournal.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				var endCallButton = "<button id='endCall' title = 'endCall' style='background: url(../IMAGES/custom/end_call.png) 50% 50% no-repeat; background-size: 80% 80%; width: 60px; height: 60px; border: none; margin:10px 10px'></button>";
				
				var middleDiv = anotherDiv+refreshButton+callButton+redirectButton+createTaskButton+createContactButton+createActivityButton+fillFormButton+endCallButton+"</div></td></tr></tbody></table>";
				
				$("#a_2 > div > table").parent().before(middleDiv);
				$("[id=id_bp]").offset({left:leftOffset});
				$([id=refresh]).mouseenter(function()
 				  {
					$([id=refresh]).css({"background":"url(../IMAGES/custom/refreshinv.png) 50% 50% no-repeat","background-size": "80% 80%", "width": "60px", "height": "60px", "border": "none"});
				  }
				)
				.mouseleave(function()
				  {
					$([id=refresh]).css({"background":"url(../IMAGES/custom/refresh.png) 50% 50% no-repeat","background-size": "80% 80%", "width": "60px", "height": "60px", "border": "none"});
				  }
				)
				.click(function()
				  {
					$([id=refresh]).bind("click", that.callFunction("RefreshContactInfo", true));
				  }
				);
				$([id=call]).mouseenter(function()
 				  {
					$([id=call]).css({"background":"url(../IMAGES/custom/phone_callinv.png) 50% 50% no-repeat","background-size": "80% 80%", "width": "60px", "height": "60px", "border": "none"});
				  }
				)
				.mouseleave(function()
				  {
					$([id=call]).css({"background":"url(../IMAGES/custom/phone_call.png) 50% 50% no-repeat","background-size": "80% 80%", "width": "60px", "height": "60px", "border": "none"});
				  }
				)
				.click(function()
				  {
					$([id=call]).bind("click", that.callFunction("Call"));
				  }
				);
				$([id=fill]).mouseenter(function()
 				  {
					$([id=fill]).css({"background":"url(../IMAGES/custom/livejournalinv.png) 50% 50% no-repeat","background-size": "80% 80%", "width": "60px", "height": "60px", "border": "none"});
				  }
				)
				.mouseleave(function()
				  {
					$([id=fill]).css({"background":"url(../IMAGES/custom/livejournal.png) 50% 50% no-repeat","background-size": "80% 80%", "width": "60px", "height": "60px", "border": "none"});
				  }
				)
				.click(function()
				  {
					$([id=fill]).bind("click", that.callFunction("FillForm"));
				  }
				);
				$([id=createTask]).click(function()
				  {
					$([id=createTask]).bind("click", that.callFunction("CreateTask"));
				  }
				);
				$([id=endCall]).click(function()
				  {
					$([id=endCall]).bind("click", that.callFunction("EndCall"));
				  }
				);
				$([id=redirect]).click(function()
				  {
					$([id=redirect]).bind("click", that.callFunction("Redirect"));
				  }
				);
				$([id=createActivity]).click(function()
				  {
					$([id=createActivity]).bind("click", that.callFunction("CreateActivity", true));
				  }
				);
				$([id=newContact]).click(function()
				  {
					$([id=newContact]).bind("click", that.callFunction("CreateContact"));
				  }
				);
				
				$("[name=SWEForm2_0]").parent().css({"background-color": "#808080"});
			}

            CSButtonsFormAppletPR.prototype.BindEvents = function()
            {
                SiebelAppFacade.CSButtonsFormAppletPR.superclass.BindEvents.apply(this, arguments);
            }

            CSButtonsFormAppletPR.prototype.EndLife = function()
            {
                SiebelAppFacade.CSButtonsFormAppletPR.superclass.EndLife.apply(this, arguments);
            }

            return CSButtonsFormAppletPR;
        }());
        return "SiebelAppFacade.CSButtonsFormAppletPR";
    })
}