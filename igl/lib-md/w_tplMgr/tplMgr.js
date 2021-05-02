/* template manager */
var tplMgr = {
	fStrings : ["Cacher le contenu de l\'activité","Afficher le contenu de l\'activité",
	/*02*/      "Masquer le contenu de toutes les activités","Afficher le contenu de toutes les activités"],
	
	init : function(){
		scCoLib.util.log("tplMgr.init");
		// Set callback functions.
		if ("scDynUiMgr" in window ) {
			scDynUiMgr.collBlk.addOpenListener(this.sCollBlkOpen);
			scDynUiMgr.collBlk.addCloseListener(this.sCollBlkClose);
		}
		var vBtn = this.addBtn(sc$("header"), "toutOuvert", null, null, sc$("header").firstChild);
		vBtn.id = 'basculeOuvertFerme';
		vBtn.onclick = this.sMove;
		vBtn.setAttribute("title", this.fStrings[2]);
		var vImg = scDynUiMgr.addElement("img", vBtn);
		vImg.src = scServices.scLoad.resolveDestUri("/skin/img/switchBlocFermableGeneral.svg");
		vImg.setAttribute("alt", this.fStrings[2]);
		scOnLoads[scOnLoads.length] = this;
	},

	// fonction pour la basculre ouverture/fermeture générale des blocs
	sMove : function () {
		var vElements = this.className === "toutOuvert" ? scPaLib.findNodes("des:a.blocFermable_open") : scPaLib.findNodes("des:a.blocFermable_closed");
		for (var i=0;i<vElements.length;i++){
			scDynUiMgr.collBlkToggle(vElements[i], scPaLib.findNode("chl:div",vElements[i].parentNode),"blocFermable_open","blocFermable_closed");
		}
		this.className = this.className=="toutOuvert"? "toutFerme" : "toutOuvert";
		this.firstElementChild.alt = this.className === "toutOuvert" ? tplMgr.fStrings[2] : tplMgr.fStrings[3];
		this.title = this.className === "toutOuvert" ? tplMgr.fStrings[2] : tplMgr.fStrings[3];
	},

	/** Callback function. */
	sCollBlkOpen: function(pCo) {
		var vTitle = scPaLib.findNode("psi:", pCo);
		if (!vTitle) return;
		var vTitleText = vTitle.innerText ? vTitle.innerText: vTitle.textContent;
		if (vTitleText.length!=0) vTitleText = tplMgr.fStrings[0].replace("%s", vTitleText);
		else vTitleText =  tplMgr.fStrings[0];
		vTitle.title = vTitleText;
	},

	/** Callback function. */
	sCollBlkClose: function(pCo) {
		var vTitle = scPaLib.findNode("psi:", pCo);
		if (!vTitle) return;
		var vTitleText = vTitle.innerText ? vTitle.innerText: vTitle.textContent;
		if (vTitleText.length!=0) vTitleText = tplMgr.fStrings[1].replace("%s", vTitleText);
		else vTitleText =  tplMgr.fStrings[1];
		vTitle.title = vTitleText;
	},

	addBtn : function(pParent, pClassName, pCapt, pTitle, pNxtSib) {
		var vBtn = scDynUiMgr.addElement("a", pParent, pClassName, pNxtSib);
		vBtn.href = "#";
		vBtn.target = "_self";
		vBtn.setAttribute("role", "button");
		//vBtn.setAttribute("tabindex", "0");
		if (pTitle) vBtn.setAttribute("title", pTitle);
		if (pCapt) vBtn.innerHTML = "<span>" + pCapt + "</span>"
		vBtn.onkeydown=function(pEvent){scDynUiMgr.handleBtnKeyDwn(pEvent);}
		vBtn.onkeyup=function(pEvent){scDynUiMgr.handleBtnKeyUp(pEvent);}
		return vBtn;
	}

}