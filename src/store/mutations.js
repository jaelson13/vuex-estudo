export const mutations =  {
    ADD_PERSON(state, payload){
        state.persons = [...state.persons, payload]
    },
    REMOVE_PERSON(state, payload){
        state.persons.splice(state.persons.indexOf(payload),1)
    }
}