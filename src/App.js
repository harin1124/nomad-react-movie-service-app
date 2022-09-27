import {useState, useEffect} from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]); // 시작값은 빈 배열, 그것도 하지 않으면 undefined 로 밑에 렌더링에서 오류
	// 아무것도 주시하고 있지 않으면, 단 한 번만 작동 => 컴포넌트의 시작에서만 작동
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then(response => response.json())
			.then(json => {
				setCoins(json.slice(0, 50));
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select>
					{coins.map((item) => (
						<option key={item.id}>{item.name} ({item.symbol}): {item.quotes.USD.price} USD</option>
					))}
				</select>
			)}
		</div>
	);
}

export default App;