import { connect } from "react-redux";

import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    navbar: state.messagesPage.messagesData,
  };
};

let mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
