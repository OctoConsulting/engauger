
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Nav_Bar from '../../Nav_Bar';
import _ from 'lodash';
let data;
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      init: this.props.users
    }
  }
  componentWillMount(){
    this.props.retrieveDashboard();
  }

  componentWillReceiveProps(nextProps){
    console.log("LOGGING nextProps");
    console.log(nextProps.users);
    console.log(nextProps.dash !== this.props.dash);
    this.setState({
      init: nextProps.users
    });
  }

  imageFormatter(cell, row){
    return "<img class='dashboard-table-avatar' src='"+cell+"'/>" ;
  }
  render(){
    data = this.props.users;
    return(
      <div>
        <div className="navbar">
          <Nav_Bar/>
        </div>
        <div  className="container personal-profile-container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="panel rounded shadow">
                    <BootstrapTable data={ this.state.init }  search={ true } pagination striped hover bordered>
                        <TableHeaderColumn dataField='avatar' isKey={ true } dataFormat={this.imageFormatter}>Avatar</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort={ true }>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='lai' dataFormat={this.imageFormatter}>Last Action Icon</TableHeaderColumn>
                        <TableHeaderColumn dataField='actions' dataSort={ true }># of Actions</TableHeaderColumn>
                        <TableHeaderColumn dataField='points' dataSort={true}>Points</TableHeaderColumn>
                    </BootstrapTable>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.auth.dash
  };
}

export default connect(mapStateToProps,actions)(Dashboard);
