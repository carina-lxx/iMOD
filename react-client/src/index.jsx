import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import styled from 'styled-components';


const Gentitle = styled.div`
  display: flex;
  margin: 2px;
  font-size: 30px;
  font-weight: 600;
`;
const Top = styled.div`
  display: flex;
  margin-left: 10%;
  margin-right: 15%;
  justify-content: space-between;
`;
const Logo = styled.span`
  display: flex;
  margin-top: 2%;
  margin-right: 15%;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.getAll = this.getAll.bind(this)
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  render () {
    return (<div className="container">
      <Top>
      <span>
      <img src='./name.png' />
      </span>
      <Logo>
      <img className="logo" src='./logo.png' />
      </Logo>
      </Top>
      <List  className="main" items={this.state.items}/>
        <Gentitle>Most liked pictures from forum</Gentitle>
      <div className="general">
        <img src='../g01.png' />
        <img src='../g02.png' />
        <img src='../g03.png' />
        <img src='../g04.png' />
        <img src='../g05.png' />
        <img src='../g06.png' />
        <img src='../g07.png' />
        <img src='../g08.png' />
        <img src='../g09.png' />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));