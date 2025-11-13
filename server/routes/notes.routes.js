const express = require("express")

const router = express.Router()

const notesController =require("../controllers/notes.controller")   

const {authMiddleware} = require("../middlewares/auth.middleware")

router.post("/create-note",authMiddleware,notesController.createNote)

router.get("/get-notes",authMiddleware,notesController.getAllParticularUserNotes)

router.get("/get-note/:noteId",authMiddleware,notesController.getParticularNoteById)

router.delete("/delete-note/:noteId",authMiddleware,notesController.deleteNoteById)

router.put("/update-note/:noteId",authMiddleware,notesController.updateNoteById)

module.exports = router