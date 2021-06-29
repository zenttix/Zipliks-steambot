const clientBuilder = require('./config');

let clientArray = []

const configsArray = [{

	login: "xantonnz_1488",
	password: "IbqaGk4yWTo1XvvBAzSd",
	sharedSecret: "BPNRv9siCvEwbkKy9vtXkjjROvS6hnQIgmaKyngBwiSJX7V8u+sGxWRbpocVwGTWwqDPSy7Cmc3psj1ueYCblGCKBc4e7sdlPdVg8LIeXBa4eQRt3wlREB6tMkhOfWtbvr66m3xpIguJ3gH+zYR5esCsqWFKTxyNgbe9KxRQdV67QfMLG6dlY9blMF51dyzgWYhiI7evxSdDx2XVvhOG7wOe+RMCQ3LG9VxJ+ZzRPevLGa8pknrOfoP0l3qinYnF08zrVbCUL8zioBOwmotLqrhkbKOXhb5sKkM2eeij1IKzY1PSJNRhUsWbeBT51G3r38pAflSN4vZUbsB72dQT8+8vWx4ScIb/7Ucf6TaX3ybsDrXM9vzb93cYV7TZDrUIb2qGyFRn307peOmA8AjJulJv3uQAvCcL2qFV7fPZ//08VvG/9tww+5mTt7IvX0sB2lvvFr6V58KoLxidKGVQO9ls+kFyVIxxNjDduWIFwaL4bSnh9+U8wTW2sup2lHq5PZDSlORgmpPLjqFGk4llNWm9PRnVor9MIh+nmVcBUDwpgDzEnPuAgnz0/StaBtVSWmuPIHQlwBXUJnNKPBlqOCgS8a3JjiQ4NEnl739SnLPtnoJbxtQbT3OBoUguJmrD8zcXiJ/kUA3UhWrnUOGaaMe2pnOOyXmB7nEaM2xtHCvh0ALQUeX935dCoooOn3rmIYPsr6ySooGuYFf9b7vAxk2yz+LTN2MtMumljWhjGJ6sGJusxtGXveu7BDw1wdnmX+PAtwq62dieLVyCCnr+kG6uBBBdakWK0HUeB2vrRxUU80I8tOEow4B6ptHOhS6wbPKrvch1KXfpJNonARTT0cq3vTdYiT+kiQFAISX/u/nxzT8rG67ibQQ+VSXq4Jpe0E/X7a1Zc1U1PYgb/+jL6H7GncfG5VcVmjox6gdZxJe+qga88LjnDQV1I+WakGhmjpf0gXvESkt5sLpp/pWw0oSNL9JN2sYV7P3RKoHQLTrsIfcU+fPIkgS8FK1OsTltmr5ctcg//lbK7AF8RfKwIt7PqeQ+9tub0lOCBi2HbG6ILy15zYdiHcJs/kOy1ra0UB0JG1eAfxY2S7RVan9mZw==",
	games: [
		730 // Counter-Strike: Global Offensive
	]
},
{
	login: "xantonnz_1488",
	password: "IbqaGk4yWTo1XvvBAzSd",
	sharedSecret: "BPNRv9siCvEwbkKy9vtXkjjROvS6hnQIgmaKyngBwiSJX7V8u+sGxWRbpocVwGTWwqDPSy7Cmc3psj1ueYCblGCKBc4e7sdlPdVg8LIeXBa4eQRt3wlREB6tMkhOfWtbvr66m3xpIguJ3gH+zYR5esCsqWFKTxyNgbe9KxRQdV67QfMLG6dlY9blMF51dyzgWYhiI7evxSdDx2XVvhOG7wOe+RMCQ3LG9VxJ+ZzRPevLGa8pknrOfoP0l3qinYnF08zrVbCUL8zioBOwmotLqrhkbKOXhb5sKkM2eeij1IKzY1PSJNRhUsWbeBT51G3r38pAflSN4vZUbsB72dQT8+8vWx4ScIb/7Ucf6TaX3ybsDrXM9vzb93cYV7TZDrUIb2qGyFRn307peOmA8AjJulJv3uQAvCcL2qFV7fPZ//08VvG/9tww+5mTt7IvX0sB2lvvFr6V58KoLxidKGVQO9ls+kFyVIxxNjDduWIFwaL4bSnh9+U8wTW2sup2lHq5PZDSlORgmpPLjqFGk4llNWm9PRnVor9MIh+nmVcBUDwpgDzEnPuAgnz0/StaBtVSWmuPIHQlwBXUJnNKPBlqOCgS8a3JjiQ4NEnl739SnLPtnoJbxtQbT3OBoUguJmrD8zcXiJ/kUA3UhWrnUOGaaMe2pnOOyXmB7nEaM2xtHCvh0ALQUeX935dCoooOn3rmIYPsr6ySooGuYFf9b7vAxk2yz+LTN2MtMumljWhjGJ6sGJusxtGXveu7BDw1wdnmX+PAtwq62dieLVyCCnr+kG6uBBBdakWK0HUeB2vrRxUU80I8tOEow4B6ptHOhS6wbPKrvch1KXfpJNonARTT0cq3vTdYiT+kiQFAISX/u/nxzT8rG67ibQQ+VSXq4Jpe0E/X7a1Zc1U1PYgb/+jL6H7GncfG5VcVmjox6gdZxJe+qga88LjnDQV1I+WakGhmjpf0gXvESkt5sLpp/pWw0oSNL9JN2sYV7P3RKoHQLTrsIfcU+fPIkgS8FK1OsTltmr5ctcg//lbK7AF8RfKwIt7PqeQ+9tub0lOCBi2HbG6ILy15zYdiHcJs/kOy1ra0UB0JG1eAfxY2S7RVan9mZw==",
	games: [
		730, 	// Counter-Strike: Global Offensive
		548430,	// Deep Rock Galactic
		4000,	// Gmod
		602960  // Barotrauma
	]
}]


console.log('Bot number: ' + configsArray.length);

for (let config of configsArray) {

	let client = clientBuilder.execute(config);
	client.doLogin();
	clientArray.push(client);
}
console.log('Running ' + configsArray.length + ' bots.');
