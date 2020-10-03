import { Commit } from "../../types"

export const Actions = {
    SEARCH: "SEARCH"
}

export const searchParam = (payload: string, commits: Commit[]) => ({
    type: Actions.SEARCH,
    payload,
    commits,
})
