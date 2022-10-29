const { AddNoteController, EditNoteController, DeleteNoteController, GetNotesController, GetNoteController } = require('./controllers/NoteController')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: AddNoteController
  },
  {
    method: 'GET',
    path: '/notes',
    handler: GetNotesController
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: GetNoteController
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: EditNoteController
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: DeleteNoteController
  }
]

module.exports = routes
