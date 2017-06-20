//@flow

export default (component: string, query: { [string]: string }) => ({
  type: "CHANGE_BREAKPOINTS",
  component,
  query
});
