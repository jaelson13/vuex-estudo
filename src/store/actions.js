export const actions = {
    addPerson({commit}, person){
        commit('ADD_PERSON', person)
    },
    removePerson({commit}, person){
        commit('REMOVE_PERSON', person)
    }
}