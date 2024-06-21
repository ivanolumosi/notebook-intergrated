import { poolPromise } from '../models/db';
import { Note } from '../interfaces/note.interface';

export class NoteService {
  async getAllNotes(): Promise<Note[]> {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Notes');
    return result.recordset;
  }

  async addNote(note: Note): Promise<void> {
    const pool = await poolPromise;
    await pool.request()
      .input('title', note.title)
      .input('content', note.content)
      .query('INSERT INTO Notes (title, content) VALUES (@title, @content)');
  }

  async updateNote(note: Note): Promise<void> {
    const pool = await poolPromise;
    await pool.request()
      .input('id', note.id)
      .input('title', note.title)
      .input('content', note.content)
      .query('UPDATE Notes SET title = @title, content = @content WHERE id = @id');
  }

  async deleteNote(id: number): Promise<void> {
    const pool = await poolPromise;
    await pool.request()
      .input('id', id)
      .query('DELETE FROM Notes WHERE id = @id');
  }
}
