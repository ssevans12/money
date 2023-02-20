(function (){
    const moneyButton=document.getElementById("money-button");

    moneyButton.onclick = () => {
		const coinArea = document.getElementById("coins");
		const amount = document.getElementById("how-many").value;
		const coinTypes = document.getElementById("which-coin");
		const coinType = coinTypes.options[coinTypes.selectedIndex].value;
		for(let i = 0; i < amount; i++){
			coinArea.append(makeCoin(coinType));
		}
	}
	
	function makeCoin(coinType) {
		const coinContainer = document.createElement("div");
		const coin = document.createElement("div");
		coin.classList.add("coin");
		coin.classList.add(coinType);
		coin.innerHTML = coinType;
		coin.onclick = () => { coin.remove(); } 
		coinContainer.append(coin);
		return coinContainer;
	}

}());