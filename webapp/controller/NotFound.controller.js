sap.ui.define([
		"phoenix/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("phoenix.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);