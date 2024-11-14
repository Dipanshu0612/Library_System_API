# Library_System_API
A simple API that will allow users to manage books in a library. Users can add, edit, delete, and search for books.

## API Endpoints

### 1. Get All Books
   - **URL:** `GET /api/books`
   - **Description:** Retrieves the list of all books in the collection in JSON format.

### 2. Get Book by ISBN
   - **URL:** `GET /api/books/:isbn`
   - **Description:** Retrieves a single book by its ISBN.

### 3. Add a New Book
   - **URL:** `POST /api/books`
   - **Description:** Adds a new book to the collection.
   - **Required Fields:** `isbn`, `title`, `author`, `genre`

### 4. Update an Existing Book
   - **URL:** `PUT /api/books/:isbn`
   - **Description:** Updates the details of an existing book by its ISBN.
   - **Required Fields:** `title`, `author`, `genre`

### 5. Delete a Book
   - **URL:** `DELETE /api/books/:isbn`
   - **Description:** Deletes a book from the collection by its ISBN.
