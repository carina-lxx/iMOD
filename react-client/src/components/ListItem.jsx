import React, { useState } from 'react';
import Modal from './Modal.jsx';
import styled, {ThemeProvider} from 'styled-components';

const Pic = styled.img`
  display: flex;
  transition: .5s cubic-bezier(.5,.03,.41,1);
  &:hover{
    transform: translate(-18px, -18px);
    transition: .5s cubic-bezier(.5,.03,.41,1);
    overflow: hidden;
  }
`;
const Title = styled.p`
    height: 20px;
		padding: 0;
		position: absolute;
		font-weight: 400;
		line-height: 60px;
		color: #2c3e50;
		font-size: 25px;
		margin-left: 0px;
    transform: translateX(-50%);
    color: orange;

		&:hover {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: 10px;
			left: 0;
      transition: .5s cubic-bezier(.5,.03,.41,1);
      color: red;
		}
`;

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
           <Title className="title">
            { this.props.item.car.name }
           </Title>
            <Pic  className="main-image" src={this.props.item.car.pic} onClick={this.handleClick}/>
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