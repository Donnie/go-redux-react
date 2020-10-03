export const Actions = {
    SEARCH: "SEARCH"
}

export const searchParam = (payload: string) => ({
    type: Actions.SEARCH,
    payload,
})
