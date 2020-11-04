import React from 'react';
import ListItem from './ListItem.jsx';
import styled from 'styled-components';

const Head = styled.div`
margin-left: 20%;
margin-right: 20%;
`

const List = (props) => (
  <div>
    <Head> Select your model </Head>
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;