//@flow

export default (component: string, query: { [string]: string }) => ({
  type: "CHANGE_MAIN_LAYOUT",
  component,
  query
});
