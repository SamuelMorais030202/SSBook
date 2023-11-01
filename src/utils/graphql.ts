export function favoriteBooks() {
  return `query {
    favoriteBooks {
      id,
      name,
      cover,
      author {
        name
      }
    }
  }`;
}

export function favoriteAuthors() {
  return `query {
    favoriteAuthors {
      id,
      name,
      picture,
      booksCount
    }
  }`;
}

export function allBooks() {
  return `query {
    allBooks {
      id,
      name,
      cover,
      author {
        name
      }
    }
  }`;
}

export function bookId(id : string) {
  return `query {
    book(id: ${id}) {
      id,
      name,
      author {
        name
      },
      cover,
      description,
      category,
    }
  }`;
}
