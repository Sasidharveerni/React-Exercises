import React, { useState } from 'react'

function Todo() {
    const [text, setText] = useState({id: 0, notes: ''})
    const [noteData, setNoteData] = useState([]);

    const [editNotes, setEditNotes] = useState(false);

    const [updatedNotes, setUpdatedNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNoteData([...noteData, text]);
        setText({...text, name: '', notes: ''});
    }
    const saveNotes = (id) => {
        setNoteData({...noteData})
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter notes' onChange={(e) => setText((prev) => (
                {
                    ...prev,
                    notes: e.target.value,
                    id: prev.id + 1
                }
            ))}/>
            <button type='submit'>Add notes</button>
        </form>

        {noteData && 
        
        <div>
            <h1>Notes</h1>
            {noteData.map((ele, id) => (
                <>
                <div key={id}>
                    <p>{ele}</p>
                    <button onClick={() => setEditNotes(true)}>Edit</button>
                    </div>
                 {editNotes && 
                 <div>
                     <input type='text' value={ele} onChange={(e) => setUpdatedNotes(e.target.value)}/>
                     <button onClick={() => saveNotes(id)}>Save</button>
                 </div>
                 }
                </>
                 ))}
        </div>
        }
    </div>
  )
}

export default Todo