import api from '../api/closest';
import { IProduct } from '../interfaces/interfaces';

const getAllProduct = () => {
    return api.get<IProduct[]>("closest")
};
const getSingleProduct = (id: number) => {
    return api.get<IProduct>(`closest/${id}`)
};

const ProductServices={
    getAllProduct,
    getSingleProduct
};

export default ProductServices