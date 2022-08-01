import axios from 'axios';

export type Book = {
    title: string;
}

export function getBooks(): Promise<Book[]> {
    return axios.get('http://localhost:8080/products')
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return [];
        })
}

export function addBooks(book: Book): Promise<Book> {
    return axios.post('http://localhost:8080/admin/add-product', book)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return null;
        })
}