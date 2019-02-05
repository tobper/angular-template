import { Action } from '@ngrx/store'

export function patchArray<T, K>(items: T[], select: (item: T) => boolean, transform: (item: T) => T) {
  return items.map(item => select(item) ? transform(item) : item)
}

export type Reducer<State, Actions> = (state: Readonly<State>, action: Actions) => State

export type ReducerMap<State, Actions, ActionTypes extends keyof any> = {
  [ActionType in ActionTypes]?: Reducer<State, Extract<Actions, { type: ActionType }>>
}

export function reduce<State, Actions extends Action, ActionTypes extends string>(
  state: State,
  action: Actions,
  reducers: ReducerMap<State, Actions, ActionTypes>): State {
  const reducer = reducers[action.type]
  return reducer ? reducer(state, action) : state
}
