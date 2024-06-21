"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_controller_1 = require("../controllers/note.controller");
const router = express_1.default.Router();
router.get('/notes', note_controller_1.getNotes);
router.post('/notes', note_controller_1.addNote);
router.put('/notes', note_controller_1.updateNote);
router.delete('/notes/:id', note_controller_1.deleteNote);
exports.default = router;
