import axios from 'axios';
import { Book } from './books';

export const addToCart = (book: Book) => {
    return axios.post('http://localhost:8080/cart/add-product', book)
    .then(response => response.data)
    .catch(error => {
        console.log(error);
        return null;
    })
}

export const getCart = () => {
    return axios.get('http://localhost:8080/cart')
    .then(response => response.data)
    .catch(error => {
        console.log(error);
        return [];
    }
    )
}

export const removeItemFromCart = (book: Book) => {
    return axios.delete('http://localhost:8080/cart/delete-product', {data: {"title": book.title}})
    .then(response => response.data)
    .catch(error => {
        console.log(error);
        return null;
    }
    )
}