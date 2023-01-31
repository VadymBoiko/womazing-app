export interface IProduct{
    id: number,
    title: string,
    price: number,
    category: string,
    image:string,
    sizes: Array<string>,
    colors: Array<string>
}

export interface IDataSlider{
    id: number;
    image:string;
    title: string;
    description: string;
}