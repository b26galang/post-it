

export type PostItState = {
    currentNote: string,
    allNotes: string[]
}

export type SetCurrentNoteAction = { type: "SET_NOTE", payload: string};
export type AddNoteAction = { type: "ADD_NOTE"};
export type ClearNotesAction = { type: "CLEAR_NOTES"};
export type RemoveLastNote = {type: "REMOVE_LAST_NOTE"};
export type PostItAction = SetCurrentNoteAction | AddNoteAction | ClearNotesAction | RemoveLastNote;

export function postItReducer(state: PostItState, action: PostItAction): PostItState {
    const newState: PostItState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ADD_NOTE": {
            if (newState.currentNote.length < 3) {
                alert("Your note must be at least 3 characters long.");
                return newState;
            } else {
                newState.allNotes.push(newState.currentNote);
                return newState;
            }
        }
        case "CLEAR_NOTES": {
            newState.allNotes = [];
            return newState;
        }
        case "REMOVE_LAST_NOTE": {
            newState.allNotes.pop();
            return newState;
        }
        case "SET_NOTE": {
            newState.currentNote = action.payload;
            return newState;
        }
    }
}