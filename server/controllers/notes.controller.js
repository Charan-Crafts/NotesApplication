const noteModel = require('../models/note.models');

const createNote = async(req, res) => {

    const { title, content } = req.body;

    try {
        
        const ownerId = req.userId;

        const note = {
            title,
            content,
            ownerId
        }

        const newNote = await noteModel.create(note);

        return res.status(201).json({
            success:true,
            message:"Note created successfully",
            data:{
                noteId: newNote._id
            }
        })
    } catch (error) {
        console.log("Error",error);

        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
        
    }
}

const getAllParticularUserNotes = async(req, res) => {

    const ownerId = req.userId;

    try {
        
        const notes = await noteModel.find({ownerId}).sort({createdAt:-1});

        return res.status(200).json({
            success:true,
            message:"Notes fetched successfully",
            data:{
                notes
            }
        })
    } catch (error) {
        console.log("Error",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

const getParticularNoteById = async(req, res) => {

    const noteId = req.params.noteId;

    try {

        // get the user

        const ownerId = req.userId;

        // Now find the note by id and owner id

        const note = await noteModel.findOne({_id:noteId,ownerId});

        return res.status(200).json({
            success:true,
            message:"Note fetched successfully",
            data:{
                note
            }
        })
        
    } catch (error) {
        log("Error",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })   
    }
}

const updateNoteById = async(req, res) => {

    const noteId = req.params.noteId;  

    const {title,content} = req.body;

    try {
        
        const isNote = await noteModel.findById(noteId);

        if(!isNote){
            return res.status(404).json({
                success:false,
                message:"Note not found"
            })
        }

        const findNoteAndUpdate = await noteModel.findByIdAndUpdate(noteId,{
            title,
            content
        },{new:true}); 

        return res.status(200).json({
            success:true,
            message:"Note updated successfully",
            data:{
                note:findNoteAndUpdate
            }
        })


    } catch (error) {
        log("Error",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

const deleteNoteById = async(req, res) => {

    const noteId = req.params.noteId;

    try {
        
        const findNoteAndDelete = await noteModel.findByIdAndDelete(noteId);

        if(!findNoteAndDelete){
            return res.status(404).json({
                success:false,
                message:"Note not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Note deleted successfully"
        })
    } catch (error) {
        console.log("Error ",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

module.exports ={
    createNote,deleteNoteById,getAllParticularUserNotes,getParticularNoteById,updateNoteById
}