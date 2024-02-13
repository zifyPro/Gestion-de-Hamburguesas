import { DataBurgers } from '@/app/dataPrueba';
import Cards from '../cards/Cards';

const Burgers = () => {
	return (
		<div>
			<Cards data={DataBurgers} />
		</div>
	);
};
export default Burgers;
