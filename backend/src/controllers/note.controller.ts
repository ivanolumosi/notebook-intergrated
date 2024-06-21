import { Request, Response } from 'express';
import { NoteService } from '../services/note.services';

const noteService = new NoteService();

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addNote = async (req: Request, res: Response) => {
  try {
    await noteService.addNote(req.body);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    await noteService.updateNote(req.body);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    await noteService.deleteNote(Number(req.params.id));
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
