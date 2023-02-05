jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"phoenix/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"phoenix/test/integration/pages/Worklist",
		"phoenix/test/integration/pages/Object",
		"phoenix/test/integration/pages/NotFound",
		"phoenix/test/integration/pages/Browser",
		"phoenix/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "phoenix.view."
	});

	sap.ui.require([
		"phoenix/test/integration/WorklistJourney",
		"phoenix/test/integration/ObjectJourney",
		"phoenix/test/integration/NavigationJourney",
		"phoenix/test/integration/NotFoundJourney",
		"phoenix/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
