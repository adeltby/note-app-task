import { NoteData } from "./App";
import NoteForm from "./NoteForm";

type NewNotesProps = {
    onSubmit: (data: NoteData) => void
}

export default function NewNote({onSubmit}: NewNotesProps){

    return (
        <>
        <h1 className="mb-4">New Note</h1>
        <NoteForm onSubmit={onSubmit}/>
        </>
    )
}