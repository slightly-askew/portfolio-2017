//@flow

export const updateObject = (
  oldObj: { [string]: any },
  newVals: { [string]: any }
): { [string]: any } => Object.assign({}, oldObj, newVals);

export const updateObjectInArray = (
  array: mixed[],
  id: number,
  updateCallback: (*) => mixed
): mixed[] => [
  ...array.slice(0, id),
  updateCallback(array[id]),
  ...array.slice(id + 1)
];

export const createReducer = (
  initialState: any,
  handlers: { [string]: (*, *) => any }
) => (state: any = initialState, action: { type: string }): mixed => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
