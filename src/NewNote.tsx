import { NoteData, Tag } from "./App";
import NoteForm from "./NoteForm";

type NewNotesProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export default function NewNote({onSubmit, onAddTag, availableTags}: NewNotesProps){

    return (
        <>
        <h1 className="mb-4">New Note</h1>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
        </>
    )
}