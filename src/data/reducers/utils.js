// @flow

export const updateObject = <O: { [string]: any }, N: {}>(
  oldObj: O,
  newVals: N
): O => Object.assign({}, oldObj, newVals);

export const updateObjectInArray = <A: {}[]>(
  array: A,
  id: number,
  updateCallback: ({}) => {}
): A => [
  ...array.slice(0, id),
  updateCallback(array[id]),
  ...array.slice(id + 1)
];

export const createReducer = <S: {}, A: { type: string }>(
  initialState: S,
  handlers: { [string]: (S, A) => S }
) => (state: S = initialState, action: A): S => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
