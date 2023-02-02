import React, { useReducer } from "react";
import { postItReducer } from "./post-it-reducer"

export function PostIt() {

    const [postItState, dispatch] = useReducer(postItReducer, { currentNote: "", allNotes: [] });

    function handleNoteChange(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_NOTE", payload: String(event.target.value)})
    }

    return <>

        <input id="note" type="text" onInput={handleNoteChange}/>
        <button onClick={() => dispatch({ type: "ADD_NOTE" })}>Add Note</button>
        <button onClick={() => dispatch({type: "REMOVE_LAST_NOTE"})}>Remove last Note</button>

        <button onClick={() => dispatch({ type: "CLEAR_NOTES" })}>Clear all Notes</button>

        <h4>Notes</h4>
        <ul>
            {postItState.allNotes.map(note => <li>{note}</li>)}
        </ul>


    </>
}