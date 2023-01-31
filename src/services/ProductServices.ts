import api from '../api/closest';
import { IProduct } from '../interfaces/interfaces';

const getAll = () => {
    return api.get<Array<IProduct>>("closest")
};
const getDetails = (id:number) => {
    return api.get<IProduct>(`closest/${id}`)
}

const ProductServices={
    getAll,
    getDetails,
};

export default ProductServices