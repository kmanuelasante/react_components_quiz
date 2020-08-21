import React from "react";

// Convert to class based component

//const ApprovalCard = (props) => {
//  return (
//    <div className="ui card">
//      <div className="content">{props.children}</div>
//      <div className="extra content">
//        <div className="ui two buttons">
//          <div className="ui basic green button">Approve</div>
//          <div className="ui basic red button">Reject</div>
//        </div>
//      </div>
//    </div>
//  );
//};

//export default ApprovalCard;

class ApprovalCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;