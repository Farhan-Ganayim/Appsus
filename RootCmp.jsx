const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'

import { MailIndex } from './apps/mail/pages/MailIndex.jsx'
import { MailDetails } from './apps/mail/pages/MailDetails.jsx'

import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'
import { NoteEdit } from './apps/note/pages/NoteEdit.jsx'

import { BookIndex } from './apps/books/pages/BookIndex.jsx'
import { BookDetails } from './apps/books/cmps/BookDetails.jsx'
import { BookEdit } from './apps/books/pages/BookEdit.jsx'

export function RootCmp() {
  return (
    <Router>
      <section className="root-cmp">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/mail/:mailId" element={<MailDetails />} />

          <Route path="/note" element={<NoteIndex />} />
          <Route path="/note/edit/:noteId" element={<NoteEdit />} />

          <Route path="/books" element={<BookIndex />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/books/edit/:bookId" element={<BookEdit />} />
          <Route path="/books/edit" element={<BookEdit />} />
        </Routes>
        <UserMsg />
      </section>
    </Router>
  )
}
