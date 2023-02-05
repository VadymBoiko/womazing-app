import api from '../api/closest';
import { IProduct } from '../interfaces/interfaces';

const getAllProduct = () => {
    return api.get<Array<IProduct>>("closest")
};
const getDetails = (id:string | undefined) => {
    return api.get<IProduct>(`closest/${id}`)
}

const ProductServices={
    getAllProduct,
    getDetails,
};

export default ProductServices