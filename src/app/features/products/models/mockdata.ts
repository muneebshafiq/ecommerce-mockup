import { Product } from './product';

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Product One',
        description: 'This is the first product.',
        price: 29.99,
        imageUrl: 'https://example.com/product1.jpg',
        category: 'Category A',
        inStock: true,
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-02')
    },
    {
        id: '2',
        name: 'Product Two',
        description: 'This is the second product.',
        price: 49.99,
        imageUrl: 'https://example.com/product2.jpg',
        category: 'Category B',
        inStock: false,
        createdAt: new Date('2023-02-01'),
        updatedAt: new Date('2023-02-02')
    },
    {
        id: '3',
        name: 'Product Three',
        description: 'This is the third product.',
        price: 19.99,
        imageUrl: 'https://example.com/product3.jpg',
        category: 'Category A',
        inStock: true,
        createdAt: new Date('2023-03-01'),
        updatedAt: new Date('2023-03-02')
    }
];