import React, { useReducer } from "react";
import { postItReducer } from "./post-it-reducer"
import "./font.css";

const mainDivStyle: React.CSSProperties = {
    display: "flex",
}

const btnStyle: React.CSSProperties = {
    height: "50px",
    width: "200px",
    fontSize: "20px",
    fontFamily: "Raleway, sans-serif",
    backgroundColor: "#f9ada0",
    margin: "10px",
    fontWeight: "bold",
    color: "#1b264f"
}

const inputFieldStyle: React.CSSProperties = {
    height: "50px",
    width: "670px",
    fontSize: "25px",
    border: "2px solid black",
    backgroundColor: "white",
    fontWeight: "bold",
    fontFamily: "Raleway', sans-serif"
}

const tableStyle: React.CSSProperties = {
    padding: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px"
}

const headerStyle: React.CSSProperties = {
    fontFamily: "Raleway, sans-serif",
    color: "white",
    textAlign: "center"
}

const listStyle: React.CSSProperties = {
    listStyle: "none",
    padding: "15px",
    margin: "20px",
    backgroundColor: "white",
    width: "500px",
    fontSize: "25px",
    fontFamily: "Raleway', sans-serif"


}

export function PostIt() {

    const [postItState, dispatch] = useReducer(postItReducer, { currentNote: "", allNotes: [] });

    function handleNoteChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_NOTE", payload: String(event.target.value) })
    }

    return <div style={{ backgroundColor: "#1b264f", height: "100vh" }}>
        <div style={mainDivStyle}>
            <table style={tableStyle}>
                <tr>
                    <td>
                        <h1 style={headerStyle}>Enter a note :</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input style={inputFieldStyle} id="note" type="text" onInput={handleNoteChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button style={btnStyle} onClick={() => dispatch({ type: "ADD_NOTE" })}>Add note</button>
                        <button style={btnStyle} onClick={() => dispatch({ type: "REMOVE_LAST_NOTE" })}>Remove last note</button>
                        <button style={btnStyle} onClick={() => dispatch({ type: "CLEAR_NOTES" })}>Clear all notes</button>
                    </td>
                </tr>

                <ul style={{ textAlign: "center", margin: "auto" }}>
                    {postItState.allNotes.map(note => <li style={listStyle}>{note}</li>)}
                </ul>
            </table>
        </div>
    </div>
}