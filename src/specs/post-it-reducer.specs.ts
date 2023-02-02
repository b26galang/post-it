import { PostItState, postItReducer } from "../post-it-reducer"

test("SET_NOTE", ()=>{
    const PostItState = {
        currentNote: "",
        allNotes: []
    }

    const nextState = postItReducer(PostItState, {type: "SET_NOTE", payload: "Hello"});
    expect(nextState.currentNote)
})

