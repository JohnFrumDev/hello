if( typeof( SiebelAppFacade.CustContFrmPM ) === "undefined" ){     
	SiebelJS.Namespace( "SiebelAppFacade.CustContFrmPM" ); 
	define("siebel/custom/custContFrmPM",["siebel/pmodel"],function () {   
		SiebelAppFacade.CustContFrmPM = ( function(){    
			function CustContFrmPM( proxy ){     
				SiebelAppFacade.CustContFrmPM.superclass.constructor.call ( this, proxy );    
			}    
			SiebelJS.Extend(CustContFrmPM,SiebelAppFacade.PresentationModel );    
			CustContFrmPM.prototype.Init = function(){      
				SiebelAppFacade.CustContFrmPM.superclass.Init.call( this );  
				this.AddMethod("ShowSelection", this.SetAddressProperty,
					{sequence:false, scope:this}
				);
				this.AddProperty("AddressProperty","");
			}    
			CustContFrmPM.prototype.SetAddressProperty=function(){
				var controls = this.Get("GetControls");
				var street=this.ExecuteMethod("GetFieldValue",controls["Business Street Address"]);
				var city=this.ExecuteMethod("GetFieldValue",controls["Business City"]);
				var state=this.ExecuteMethod("GetFieldValue",controls["Business State"]);
				var address = street+" "+city+" "+state;
				this.SetProperty("AddressProperty",address);
			}
			return CustContFrmPM;   
		} ());  
	return "SiebelAppFacade.CustContFrmPM";   
	}); 
}