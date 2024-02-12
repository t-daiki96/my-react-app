import { createLazyFileRoute } from '@tanstack/react-router';
import useStore, { BearStoreType } from '@store/bears';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
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
