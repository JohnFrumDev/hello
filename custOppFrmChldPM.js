if( typeof( SiebelAppFacade.CustOppFrmChldPM ) === "undefined" ){     
	SiebelJS.Namespace( "SiebelAppFacade.CustOppFrmChldPM" ); 
 
	define("siebel/custom/custOppFrmChldPM",["siebel/pmodel"],function () {   
		SiebelAppFacade.CustOppFrmChldPM = ( function(){    
			function CustOppFrmChldPM( proxy ){     
				SiebelAppFacade.CustOppFrmChldPM.superclass.constructor.call ( this, proxy );    
			}    
			
			SiebelJS.Extend(CustOppFrmChldPM,SiebelAppFacade.PresentationModel );    
			CustOppFrmChldPM.prototype.Init = function(){      
				SiebelAppFacade.CustOppFrmChldPM.superclass.Init.call( this );    
				
				CustOppFrmChldPM.prototype.Init = function(){  
					SiebelAppFacade.CustOppFrmChldPM.superclass.Init.call( this );  
					this.AddMethod('FieldChange',this.OnFieldChange,{sequence:false, scope:this});  
					this.AddMethod('ShowSelection',this.OnSelectionChange,{sequence:false, scope:this}); 
					this.AddProperty('IsSecure', false);
				}
				
				CustOppFrmChldPM.prototype.OnFieldChange = function(control,value ){  
					if (control.GetFieldName() == "Secure Flag")
					{   
						if (value == "Y") {    
							this.SetProperty('IsSecure', true);
							SiebelJS.Log("This record is currently secure");   
						}   else {    
							this.SetProperty('IsSecure', false);
							SiebelJS.Log("This record is currently not secure");   
						}  
					} 
				}
				
				CustOppFrmChldPM.prototype.OnSelectionChange = function(){  
					var controls = this.Get( "GetControls" );  
					var value;  
					for (controlKey in controls) {     
						if (controls[controlKey].GetFieldName() == "Secure Flag") {    
							value = this.ExecuteMethod("GetFieldValue",controls[controlKey]);    
							if (value == "Y") { 
								this.SetProperty('IsSecure', true);
								SiebelJS.Log("This record is currently secure");    
							}    else {     
								this.SetProperty('IsSecure', false);
								SiebelJS.Log("This record is currently not secure");    
							}   
						}  
					} 
				} 
			};    
			return CustOppFrmChldPM;   
		} ());  
	return "SiebelAppFacade.CustOppFrmChldPM";   
	}); 
}