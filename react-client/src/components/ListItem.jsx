import React, { useState } from 'react';
import Modal from './Modal.jsx';


const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className="itemcontain">
        {!isOpen ?
          (
         <div>
            { this.props.item.car.name }
            <img  src={this.props.item.car.pic} onClick={this.handleClick}/>
            </div>
         )
:
(
  <Modal item={this.props.item} handleClick={this.handleClick}/>
  )}
      </div>
)
}
}




export default ListItem;