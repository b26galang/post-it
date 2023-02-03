import { PostItState, postItReducer } from "../post-it-reducer"

test("SET_NOTE", () => {
    const PostItState = {
        currentNote: "hi hello",
        allNotes: []
    }

    const nextState = postItReducer(PostItState, { type: "SET_NOTE", payload: "goodbye" });
    expect(nextState.currentNote).toBe("goodbye");
    console.log(PostItState);
    console.log(nextState);
})

test("ADD_NOTE", () => {
    const PostItState = {
        currentNote: "greetings",
        allNotes: []
    }

    const nextState = postItReducer(PostItState, { type: "ADD_NOTE" });
    expect(nextState.allNotes.length).toBe(1);
})

test("ADD_NOTE", () => {
    const PostItState = {
        currentNote: "hi",
        allNotes: ["hello", "greetings", "salutations"]
    }

    const nextState = postItReducer(PostItState, { type: "ADD_NOTE" });
    expect(nextState.allNotes.length).toBe(3);
})

test("CLEAR_NOTES", () => {
    const PostItState = {
        currentNote: "",
        allNotes: ["red", "blue", "green", "yellow", "orange"]
    }
    const nextState = postItReducer(PostItState, { type: "CLEAR_NOTES" });
    expect(nextState.allNotes.length).toBe(0);
    expect(nextState.currentNote).toBe("");
})

test("REMOVE_LAST_NOTE", () => {
    const PostItState = {
        currentNote: "",
        allNotes: ["red", "blue", "green", "yellow", "orange"]
    }
    const nextState = postItReducer(PostItState, { type: "REMOVE_LAST_NOTE" });
    expect(nextState.allNotes.length).toBe(4);
    expect(nextState.currentNote).toBe("");
})