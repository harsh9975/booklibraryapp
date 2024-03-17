import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

const api = axios.create({
  baseURL: BASE_URL,
});

interface Book {
  title: string;
  author: string;
  coverUrl: string;
}

interface SubjectData {
  title: string;
  data: Book[];
}

export const fetchBooksFromSubjects = async (): Promise<SubjectData[]> => {
  try {
    const subjects = [
      'science_fiction',
      'fantasy',
      'mystery',
      'romance',
      'history',
    ];
    const subjectsData: SubjectData[] = [];

    for (const subject of subjects) {
      const response = await api.get(`/subjects/${subject}.json?limit=5`);
      const subjectData = response.data;

      if (!subjectData.works) {
        throw new Error(`No books found for subject: ${subject}`);
      }

      const books = subjectData.works.map((work: any) => ({
        title: work.title,
        author: work.authors?.[0]?.name || 'Unknown Author',
        coverUrl: `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`,
        key: work.key,
        coverId: work.cover_id,
      }));

      subjectsData.push({title: subject.replace('_', ' '), data: books});
    }

    return subjectsData;
  } catch (error) {
    console.error('Error fetching books from subjects:', error);
    throw error;
  }
};

export const fetchBooksFromSubject = async (
  subject: string,
): Promise<SubjectData> => {
  try {
    const response = await api.get(`/subjects/${subject}.json`);
    const subjectData = response.data;

    if (!subjectData.works) {
      throw new Error(`No books found for subject: ${subject}`);
    }

    const books = subjectData.works.map((work: any) => ({
      title: work.title,
      author: work.authors?.[0]?.name || 'Unknown Author',
      coverUrl: `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`,
      key: work.key,
      coverId: work.cover_id,
    }));

    return books;
  } catch (error) {
    console.error(`Error fetching books for subject ${subject}:`, error);
    throw error;
  }
};

export const fetchBookDetails = async (
  workId: string,
  coverId: string,
): Promise<any> => {
  try {
    const response = await api.get(`${workId}.json`);
    const bookData = response.data;

    const coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    return {
      ...bookData,
      coverUrl: coverUrl,
    };
  } catch (error) {
    console.error(`Error fetching book details for work ${workId}:`, error);
    throw error;
  }
};

export const searchBooks = async (query: string): Promise<any> => {
  try {
    const encodedQuery = query !== '' ? query.replace(/\s/g, '+') : '';
    const response = await api.get(`/search.json?title=${encodedQuery}`);
    return response.data?.docs;
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};
