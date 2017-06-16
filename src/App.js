//@flow

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./data/actions/actionCreators";

import { Main } from "./scenes/Main";

function mapStateToProps(state) {
  return {
    cards: state.cards,
    ui: state.ui
  };
}

export function mapDispatchToProps(dispatch: {}) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
