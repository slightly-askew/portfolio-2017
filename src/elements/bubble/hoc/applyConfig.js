//@flow
import defaultConfig from "../config";

export default (props: {}) =>
  Object.assign({}, { ...defaultConfig }, { ...props });
