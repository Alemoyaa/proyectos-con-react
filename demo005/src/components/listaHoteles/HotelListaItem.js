import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import moment from 'moment';
require('moment/locale/es');

class HotelListaItem extends React.Component {
  render() {
    return(
      this.props.nota.map((key) =>{
        return <div key={key.id} className="note-list-item" onClick={this.props.selectNote}>
        {key.title}
        <p>{moment(key.created_at).locale('es').fromNow()}</p>
      </div>
      })
    )
  }
}

function mapStateToProps(state, props) {
  return {
    nota: state.nota.hotels,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelListaItem)