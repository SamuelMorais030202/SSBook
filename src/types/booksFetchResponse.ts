export interface IAuthor {
  id: string
  name: string,
  picture: string,
  booksCount: number,
}

type Author = {
  name: string;
};

export interface IBook {
  id: string,
  name: string,
  author: Author,
  cover: string,
  category?: string,
  description?: string,
}
