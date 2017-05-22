//@flow

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./data/actions/actionCreators";

import Main from "./scenes/Main";

function mapStateToProps(): {} {
  return {};
}

export function mapDispatchToProps(dispatch: {}) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
