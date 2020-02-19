if (typeof(SiebelAppFacade.CustOppListV2PR) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.CustOppListV2PR");
    define("siebel/custom/custOppListV2PR", ["siebel/jqgridrenderer"], function() {
        SiebelAppFacade.CustOppListV2PR = (function() {

            function CustOppListV2PR(pm) {
                SiebelAppFacade.CustOppListV2PR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(CustOppListV2PR, SiebelAppFacade.JQGridRenderer);

            CustOppListV2PR.prototype.Init = function() {
                SiebelAppFacade.CustOppListV2PR.superclass.Init.apply(this, arguments);
            }

            CustOppListV2PR.prototype.ShowUI = function() {
                SiebelAppFacade.CustOppListV2PR.superclass.ShowUI.call(this);
                var pm = this.GetPM();
                var placeHolder = pm.Get("GetPlaceholder");
                var markup = "<div id='mychart' style='height:250px;width:400px'>" + "</div>";
                $('#' + placeHolder + 'd').append(markup);
                var PR = this;
                require(["scripts/siebel/custom/jsapi.js"], function() {
                    PR.GoogleJSAPILoaded.call(PR);
                });
            }

            CustOppListV2PR.prototype.GoogleJSAPILoaded = function() {
                var PR = this;
                google.load('visualization', '1', {
                    'callback': PR.GoogleVisualizationPackageLoaded(PR),
                    'packages': ['corechart']
                });
                return false; // stop event propagation
            }

            CustOppListV2PR.prototype.GoogleVisualizationPackageLoaded =
                function(PR) {
                    if (!google.visualization ||
                        typeof(google.visualization.DataTable) != "function") {
                        setTimeout(function() {
                            PR.GoogleVisualizationPackageLoaded(PR)
                        }, 5);
                    } else {
                        PR.BindData(true)
                    }
                    return false; // stop event propagation
                }

            CustOppListV2PR.prototype.BindData = function(bRefresh) {
                SiebelAppFacade.CustOppListV2PR.superclass.BindData.call(this, bRefresh);
                var pm = this.GetPM();
                var recordSet = pm.Get("GetRecordSet");
                data = new google.visualization.DataTable();
                data.addColumn('string', 'Label');
                data.addColumn('number', 'Value');
                for (var i = 0; i < recordSet.length; i++) {
                    var value = recordSet[i]["Primary Revenue Amount"];
                    var numVal = Number(value.replace(/[^0-9\.]+/g, ""));
                    data.addRow([
                        recordSet[i]["Name"],
                        {
                            v: numVal,
                            f: value
                        }
                    ]);
                }
                var options = {
                    title: 'Opportunities Currently Displayed'
                };
                chart = new
                google.visualization.PieChart(document.getElementById('mychart'));
                chart.draw(data, options);
            }

            CustOppListV2PR.prototype.BindEvents = function() {
                SiebelAppFacade.CustOppListV2PR.superclass.BindEvents.apply(this, arguments);
            }

            CustOppListV2PR.prototype.EndLife = function() {
                SiebelAppFacade.CustOppListV2PR.superclass.EndLife.apply(this, arguments);
            }

            return CustOppListV2PR;
        }());
        return "SiebelAppFacade.CustOppListV2PR";
    })
}