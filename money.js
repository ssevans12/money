(function (){
    let moneyButton=document.getElementById("money-button");

    moneyButton.onclick = () => {
		let coinArea = document.getElementById("coins");
		let amount = document.getElementById("how-many").value;
		let coinTypes = document.getElementById("which-coin");
		let coinType = coinTypes.options[coinTypes.selectedIndex].value;
		for(let i = 0; i < amount; i++){
			coinArea.append(makeCoin(coinType));
		}
	}
	
	function makeCoin(coinType) {
		let coinContainer = document.createElement("div");
		let coin = document.createElement("div");
		coin.classList.add("coin");
		coin.classList.add(coinType);
		coin.innerHTML = coinType;
		coin.onclick = () => { coin.remove(); } 
		coinContainer.append(coin);
		return coinContainer;
	}

}());