import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      server: this.props.server
    }
  }

  componentDidMount() {
    if (this.props.match.params.serverId){
      this.props.fetchServer(this.props.match.params.serverId)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.serverId !== nextProps.match.params.serverId) {
      this.props.fetchServer(nextProps.match.params.serverId)
    }
  }

  render () {
    let serverName;
    if (this.props.server) {
      serverName = this.props.server.name
    } else {
      serverName = "No Server Selected"
    }

    return (
    <header className="serverHeader">
      <div className="bg-box">
          <Link to={`/servers/@me/${this.props.currentUser.id}`}><div className="userIcon">UserIcon</div></Link>
      </div>
      <div className="shadow-box">
        <div className="menu-box">
          <div className="serverMenu">{serverName}</div>
        </div>
        <div className="channelName">#Channel</div>
        <div className="leftDivide"></div>
        <div className="channelTopic">Topic Goes Here</div>
        <div className="muteChannel">M</div>
        <div className="pinMessage">P</div>
        <div className="memberListToggle">L</div>
        <div className="search">Search Magic</div>
        <div className="leftDivide"></div>
        <div className="mentions">@</div>
        <div className="help">?</div>
      </div>
    </header>);
  }
}

export default withRouter(ServerHeader);
