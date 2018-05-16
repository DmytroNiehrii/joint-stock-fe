//ToDo: use reselected for memorized selectors
/*import {createSelector} from 'reselect'

export const filterSelector = state => state.filters
export const communitiesSelector = state => state.communities

export const filtratedCommunitiesSelectorMemoized = createSelector(communitiesSelector, filterSelector, (communities, filters) => {
    return communities.items
})*/

export function filtratedCommunitiesSelector(state) {
    return state.communities.items
}

