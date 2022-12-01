import axios from 'axios';

export type Book = {
    id: number;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
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

export function updateBook(book: Book): Promise<Book> {

    return axios.put('http://localhost:8080/admin/edit-product', book)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return null;
        })
}

export function deleteBook(id: number): Promise<Book> {

    return axios.delete(`http://localhost:8080/admin/delete/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return null;
        })
}