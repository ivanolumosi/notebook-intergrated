"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.addNote = exports.getNotes = void 0;
const note_services_1 = require("../services/note.services");
const noteService = new note_services_1.NoteService();
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield noteService.getAllNotes();
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getNotes = getNotes;
const addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield noteService.addNote(req.body);
        res.status(201).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addNote = addNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield noteService.updateNote(req.body);
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield noteService.deleteNote(Number(req.params.id));
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteNote = deleteNote;
