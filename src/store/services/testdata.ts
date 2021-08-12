import {Book} from '../models/book';

export const books: Book[] = [
  {
    id: 1,
    title: 'The Stand',
    thumbnail: 'https://cataas.com/cat?width=100',
    isbn: '9780385121682',
    authors: [
      {
        id: 1,
        author_name: 'Stephen King'
      }
    ],
    publisher: {
      id: 1,
      publisher_name: 'Penguin'
    }
  }, {
    id: 2,
    title: 'The Dark Tower I',
    thumbnail: 'https://cataas.com/cat?width=100',
    isbn: '9780937986509',
    authors: [
      {
        id: 1,
        author_name: 'Stephen King'
      }
    ],
    publisher: {
      id: 1,
      publisher_name: 'Penguin'
    }
  }, {
    id: 3,
    title: 'The Dark Tower II',
    thumbnail: 'https://cataas.com/cat?width=100',
    isbn: '9780937986905',
    authors: [
      {
        id: 1,
        author_name: 'Stephen King'
      }
    ],
    publisher: {
      id: 1,
      publisher_name: 'Penguin'
    }
  }, {
    id: 4,
    title: 'The Dark Tower III',
    thumbnail: 'https://cataas.com/cat?width=100',
    isbn: '9780937986172',
    authors: [
      {
        id: 1,
        author_name: 'Stephen King'
      }
    ],
    publisher: {
      id: 1,
      publisher_name: 'Penguin'
    }
  }, {
    id: 5,
    title: 'The Dark Tower IV',
    thumbnail: 'https://cataas.com/cat?width=100',
    isbn: '9781880418383',
    authors: [
      {
        id: 1,
        author_name: 'Stephen King'
      }
    ],
    publisher: {
      id: 1,
      publisher_name: 'Penguin'
    }
  }, {
    id: 6,
    title: 'De meeste mensen deugen',
    thumbnail: 'https://cataas.com/cat?width=100',
    isbn: '9789082942187',
    authors: [
      {
        id: 1,
        author_name: 'Rutger Bregman'
      }
    ],
    publisher: {
      id: 1,
      publisher_name: 'Correspondent'
    }
  }
];
