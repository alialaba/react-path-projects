import Mode from "./Mode";
const Sidebar = ({ notes, newNote, setCurrentNoteId, currentNote, deleteNote, switchMode, darkMode }) => {
    const noteElements = notes.map((note, index) => (

        // setCurrentNoteId(note.id) was used to identify id of the note created when clicked
        < div key={note.id} >
            <div className={`title ${note.id === currentNote.id ? "selected-one" : ""} }`} onClick={(event) => setCurrentNoteId(note.id)} >
                <h4 className={` text-snippet ${darkMode ? "dark" : ""}`}> {note.body.split("\n")[0]} </h4>
                <button
                    className="delete-btn"
                    // Your onClick event handler here
                    onClick={(event) => deleteNote(event, note.id)}>
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </ div>
    ))
    return (

        <aside className={`sidebar ${darkMode ? "dark" : ""}`}>

            <div className="sidebar__header">
                <h4>Noteapp</h4>
                <Mode switchMode={switchMode} isShow={darkMode} />


                <button className="sidebar__btn" onClick={newNote}>+</button>

            </div >
            {noteElements}
        </aside >
    );
}
export default Sidebar