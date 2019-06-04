sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/integration/library"
], function (Controller, JSONModel, MessageToast, library) {
	"use strict";

	return Controller.extend("com.ciber.CardsTest.controller.View1", {
		onInit: function () {
			var cardManifests = new JSONModel();

			cardManifests.loadData("model/cardsManifest.json");
			this.getView().setModel(cardManifests, "manifests");
		},
		
		onAction: function (oEvent) {
			if (oEvent.getParameter("type") === library.CardActionType.Navigation) {
				MessageToast.show("Relative URL: " + oEvent.getParameter("manifestParameters").url);
			}
		}
	});
});