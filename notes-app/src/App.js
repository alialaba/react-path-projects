import { useState, useEffect } from 'react';
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Split from 'react-split';
import { nanoid } from 'nanoid'


const App = () => {
    const [notes, setNotes] = useState([]);
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || "");

    const createNote = () => {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown Here"
        }
        setNotes(prevNote => [newNote, ...prevNote]);
        setCurrentNoteId(newNote.id)
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId;
        }) || notes[0]

    }

    return (
        <main>
            {notes.length > 0 ?
                < Split
                    sizes={[20, 80]}
                    minSize={100}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="col-resize"
                    className='split'
                >
                    <Sidebar
                        notes={notes}
                        newNote={createNote}
                        setCurrentNoteId={setCurrentNoteId}
                        currentNote={findCurrentNote()}

                    />
                    <Editor />
                </Split>
                :
                <section className='no-notes'>
                    <h1>No Notes created yet</h1>
                    <button className='first-note' onClick={createNote}>Create one</button>
                </section>
            }
        </main >
    );
}
export default App;