//@flow

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./data/actions/actionCreators";

import { Main } from "./scenes/Main/Main";

function mapStateToProps<O: { [string]: mixed }, S: { cards: O, ui: O }>(
  state: S
) {
  return {
    cards: state.cards,
    ui: state.ui
  };
}

export function mapDispatchToProps(dispatch: *) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
