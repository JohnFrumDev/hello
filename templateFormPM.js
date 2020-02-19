if( typeof( SiebelAppFacade.TemplateFormPM ) === "undefined" ){     
	SiebelJS.Namespace( "SiebelAppFacade.TemplateFormPM" ); 
 
	define("siebel/custom/templateFormPM",["siebel/pmodel"],function () {   
		SiebelAppFacade.TemplateFormPM = ( function(){    
			function TemplateFormPM( proxy ){     
				SiebelAppFacade.TemplateFormPM.superclass.constructor.call ( this, proxy );    
			}    
			
			SiebelJS.Extend(TemplateFormPM,SiebelAppFacade.PresentationModel );    
			TemplateFormPM.prototype.Init = function(){      
				SiebelAppFacade.TemplateFormPM.superclass.Init.call( this );    
			};    
			return TemplateFormPM;   
		} ());  
	return "SiebelAppFacade.TemplateFormPM";   
	}); 
}