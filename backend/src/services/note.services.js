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
exports.NoteService = void 0;
const db_1 = require("../models/db");
class NoteService {
    getAllNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            const result = yield pool.request().query('SELECT * FROM Notes');
            return result.recordset;
        });
    }
    addNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            yield pool.request()
                .input('title', note.title)
                .input('content', note.content)
                .query('INSERT INTO Notes (title, content) VALUES (@title, @content)');
        });
    }
    updateNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            yield pool.request()
                .input('id', note.id)
                .input('title', note.title)
                .input('content', note.content)
                .query('UPDATE Notes SET title = @title, content = @content WHERE id = @id');
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            yield pool.request()
                .input('id', id)
                .query('DELETE FROM Notes WHERE id = @id');
        });
    }
}
exports.NoteService = NoteService;
