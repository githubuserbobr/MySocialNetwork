import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  addMessage,
  handleInputMessage,
} from "../../Redux/Reducers/dialogs-Reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    inputMessage: state.messagesPage.inputMessage,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage, handleInputMessage }),
  withAuthRedirect
)(Dialogs);
