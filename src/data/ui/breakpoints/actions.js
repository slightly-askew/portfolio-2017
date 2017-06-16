//@flow

export default (component: string, newLayout: string) => ({
  type: "CHANGE_MAIN_LAYOUT",
  component,
  newLayout
});
