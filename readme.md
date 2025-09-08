# Appsus

[Live Demo on GitHub Pages](https://farhan-ganayim.github.io/Appsus/)

Appsus is a lightweight, multi-functional web application that integrates three core features: **Mail**, **Notes**, and **Books**. It is designed to run entirely in the browser using local data storage, making it simple and easy to use without requiring any backend or external dependencies.

## Features

### Mail
- **Inbox Management**: View, compose, and manage emails.
- **Starred Emails**: Mark important emails for quick access.
- **Drafts**: Save unfinished emails as drafts.
- **Trash**: Manage deleted emails.
- **Search**: Filter emails by subject, body, or status.

### Notes
- **Create Notes**: Add text, images, or to-do lists as notes.
- **Edit Notes**: Modify existing notes.
- **Filter Notes**: Search and filter notes by content.
- **Pin Notes**: Highlight important notes for quick access.

### Books
- **Library**: Browse a collection of books with detailed information.
- **Search**: Filter books by title, author, or price.
- **Reviews**: Add and view reviews for books.
- **Edit Books**: Modify book details or add new books.

## Project Structure

The project is organized into the following directories:
- **apps/mail**: Contains components and services for the Mail feature.
- **apps/note**: Contains components and services for the Notes feature.
- **apps/books**: Contains components and services for the Books feature.
- **services**: Shared utility and storage services.
- **assets**: Contains shared styles and images.

## How to Run the Project

1. **Open the Project in Visual Studio Code**:
   - Navigate to the project folder on your computer.
   - Open the folder in Visual Studio Code.

2. **Run with Live Server**:
   - Install the **Live Server** extension in Visual Studio Code if you don’t already have it.
   - Right-click on the `index.html` file (usually in the root or `apps` folder).
   - Select **"Open with Live Server"**.

3. **Access the App**:
   - The app will open in your default browser.
   - You can now interact with the app using the locally stored data.

## Technologies Used

- **HTML, CSS, JavaScript**: Core technologies for building the app.
- **React**: For creating reusable components and managing the UI.
- **LocalStorage**: For data persistence in the browser.

## File Overview

- **[MailList.jsx](apps/mail/cmps/MailList.jsx)**: Displays a list of emails.
- **[MailPreview.jsx](apps/mail/cmps/MailPreview.jsx)**: Renders a single email preview.
- **[BookList.jsx](apps/books/cmps/BookList.jsx)**: Displays a list of books.
- **[BookPreview.jsx](apps/books/cmps/BookPreview.jsx)**: Renders a single book preview.
- **[mail.service.js](apps/mail/services/mail.service.js)**: Handles email-related operations.
- **[util.service.js](services/util.service.js)**: Provides utility functions for the app.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License.

---