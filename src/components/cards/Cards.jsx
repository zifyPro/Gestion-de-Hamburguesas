import CardItem from '../cardItem/CardItem';

const Cards = ({ data }) => {
	return (
		<div>
			{data.map((item) => (
				<CardItem item={{ ...item }} />
			))}
		</div>
	);
};
export default Cards;
