import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
    createDb() {
        let users = [
            { name: 'Ruwantha Ratnayake', username: 'rra', email: 'rra@tasty.lk', password: '123123', id: '' },
            { name: 'John Doe', username: 'jdo', email: 'jdo@tasty.lk', password: '123123', id: '' },
            { name: 'Tiqri Corp', username: 'tiqri', email: 'tco@tasty.lk', password: 'tiqri', id: '' }
        ];
        let ratings = [
            { rating: 1, rating_text: 'Avoid!' },
            { rating: 1.5, rating_text: 'Dislike!' },
            { rating: 2, rating_text: 'Blah!' },
            { rating: 2.5, rating_text: 'Well...' },
            { rating: 3, rating_text: 'Average' },
            { rating: 3.5, rating_text: 'Good Enough ' },
            { rating: 4, rating_text: 'Great!' },
            { rating: 4.5, rating_text: 'Loved it! ' },
            { rating: 5, rating_text: 'Insane!' }
        ];
        return { users, ratings };
    }
}