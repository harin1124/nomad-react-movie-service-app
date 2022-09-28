import {useState, useEffect} from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [dollar, setDollar] = useState(0);
	const [coins, setCoins] = useState([]); // 시작값은 빈 배열, 그것도 하지 않으면 undefined 로 밑에 렌더링에서 오류
	const [coin, setCoin] = useState("");

	const dollarChange = (event) => {
		setDollar(event.target.value);
	}
	const coinChange = (event) => {
		const val = event.target.value;
		if(val === ""){
			return;
		}
		setCoin(coins.find(item => item.id === event.target.value).id);
	}

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
				<div>
					<input type="number" value={dollar} onChange={dollarChange} style={{width:"378px", height:"40px", marginBottom:"10px", padding:"10px", boxSizing:"border-box"}} placeholder="보유한 달러를 입력하세요."/>
					<br/>
					<select onChange={coinChange} style={{width:"auto", height:"50px", padding:"10px"}}>
						<option value="">코인 종류를 선택해주세요.</option>
						{coins.map((item) => (
							<option key={item.id} value={item.id}>{item.name} ({item.symbol}): {item.quotes.USD.price} 달러</option>
						))}
					</select>
					<br/>
					{dollar} 달러로 {coin !== "" ? coin : ""}을 {coin !== "" ? Math.floor(dollar / coins.find(item => item.id === coin).quotes.USD.price) : 0} 개 구매 가능합니다.
				</div>
			)}
		</div>
	);
}

export default App;