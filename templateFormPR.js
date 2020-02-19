if( typeof( SiebelAppFacade.TemplateFormPR ) === "undefined" ){  
	SiebelJS.Namespace( "SiebelAppFacade.TemplateFormPR" );  
	define("siebel/custom/templateFormPR", ["siebel/phyrenderer"], function () {    
		SiebelAppFacade.TemplateFormPR = ( function(){    
			function TemplateFormPR( pm ){     
				SiebelAppFacade.TemplateFormPR.superclass.constructor.call(this, pm);    
			}    
			SiebelJS.Extend( TemplateFormPR, SiebelAppFacade.PhysicalRenderer );    
			TemplateFormPR.prototype.BindData = function () {  
				SiebelAppFacade.CustOppFrmChldPR.superclass.BindData.call(t his);    
			}          return TemplateFormPR;   
		} ());  
		return "SiebelAppFacade.TemplateFormPR";  
	}); 
} 