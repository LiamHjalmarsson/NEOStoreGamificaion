import { useParams } from 'react-router-dom';
import { useRootContext } from '../../Root';
import ProductsContainer from '../../../components/product/Products';

const Category = () => {
    let { id } = useParams();
    let { categories, products } = useRootContext();

    let category = categories.find(category => category.title === id);
    let categoryProducts = products.filter(product => product.category === category._id);

    return (
        <div className='pt-32'>
            <ProductsContainer products={categoryProducts} />
        </div>
    );
}

export default Category;
