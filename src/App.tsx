import './App.css';
import useStore, { BearStoreType } from '@store/bears';

function App() {
	const { bears, increasePopulation, removeAllBears } = useStore(
		(state: BearStoreType) => state
	);

	return (
		<>
			<div>bears count {bears}</div>
			<button onClick={increasePopulation}>one up</button>
			<button onClick={removeAllBears}>remove all</button>
		</>
	);
}

export default App;
