import React from 'react';
import styled from 'styled-components';

const Out = styled.section`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
`;
const Inner = styled.div`
  position: fixed;
    z-index: 10;
    min-height: 600px;
    padding-top: 8px;
    width: 640px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: white;
    border-color: black;
    border-radius: 1px;
    border-radius: 12px;
    display: grid;
    grid-template-rows: 64px auto 74px;
    color: #222222 !important;
font-weight: 600 !important;
font-size: 20px;
line-height: 30px;
`;

const Exit = styled.button`
  margin-top: 80%;
  margin-left: 20%;
  margin-right: 20%;
  font-weight: 400;
  border-color: black;
  font-size: 16px;
  line-height: 14px;
  border-radius: 5px;
  border-width: thin;
  cursor: pointer !important;

`;

const Content = styled.div`
margin-left: 20%;
margin-right: 20%;
`
const Pic = styled.img`
  width: 120px !important;
  height: 80px !important;
  border-radius: 8px;
  pointer-events: none;
  overflow: hidden;
  padding-left: 3px;
`;

const Frame = styled.div`
  position: relative;
  margin: 2px;
`;

const Modal = (props) => {
  const { item } = props
  const entry = item.car
  console.log(entry)
  return (
    <Out>
      <Inner>
        <Content>
          <Frame>
            <label>
              Wheel: {entry.wheel}
            </label>
            <Pic src={entry.wheelPic} />
          </Frame>
          <Frame>
            <div>
              Street Tire: {entry.sTire}
            </div>
            <div>
              Track Tire: {entry.tTire}
            </div>
          </Frame>
          <Frame>
            <span>
              Coilover:  {entry.coilover}
            </span>
            <Pic src={entry.coiloverPic} />
          </Frame>
          <Frame>
            <span>
              Turbo: {entry.turbo}
            </span>
            <Pic src={entry.turboPic} />
          </Frame>
          <Frame>
            <span>
              Supercharger: {entry.charger}
            </span>
            <Pic src={entry.chargerPic} />
          </Frame>
          <Frame>
            <span>
              Spoiler: {entry.spoiler}
            </span>
            <Pic src={entry.spoilerPic} />
          </Frame>
        </Content>
        <Exit type="button" onClick={(e) => { props.handleClick(e) }}>CLOSE</Exit>
      </Inner>
    </Out>
  )
}


export default Modal;