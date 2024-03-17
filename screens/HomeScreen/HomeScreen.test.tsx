// import React from 'react';
// import {render, waitFor} from '@testing-library/react-native';
// import {HomeScreen} from './HomeScreen';
// import {fetchBooksFromSubjects} from '../../api/BookApi';

// jest.mock('../../api/BookApi');

// describe('HomeScreen component', () => {
//   it('renders loading skeleton loader when loading', async () => {
//     (fetchBooksFromSubjects as jest.Mock).mockResolvedValue([]);
//     const {getByText} = render(<HomeScreen />);
//     expect(getByText('Discover Latest Books')).toBeTruthy();
//     expect(getByText('Science Fiction')).toBeTruthy(); // Verify skeleton loader section is present
//   });

//   it('renders book sections when not loading', async () => {
//     (fetchBooksFromSubjects as jest.Mock).mockResolvedValue([
//       {
//         title: 'Science Fiction',
//         data: [
//           {
//             title: 'Book 1',
//             coverUrl: 'https://example.com/book1.jpg',
//             author: 'Author 1',
//           },
//         ],
//       },
//       // Add more mock data as needed for other sections
//     ]);
//     const {getByText, getByTestId} = render(<HomeScreen />);
//     await waitFor(() => {
//       expect(getByText('Book 1')).toBeTruthy(); // Verify book title is rendered
//       expect(getByTestId('section-header')).toBeTruthy(); // Verify section header is rendered
//     });
//   });
// });
