import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';


const Out = styled.section`
  background-color: rgba(255,255,255, 0.3);
  z-index: 2000 !important;
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
    transform: translate(-50%,-50%);
    background-color: white;
    border: 5px solid powderblue;
    border-color: black !important;
    border-width: thin;
    border-radius: 12px;
    display: grid;
    grid-template-rows: 64px auto 74px;
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
  font-size: 14px;
  line-height: 14px;
  border-radius: 5px;
  border-width: thin;
  cursor: pointer !important;
  background: #F1F1F1;
  &:hover {
  background: rgba(255,255,0,0.3);
  font-weight: 600;
  font-size: 18px;
  overflow: hidden !important;
  }
`;

const Content = styled.div`
margin-left: 20%;
margin-right: 20%;
`
const Pic = styled.img`
  width: 120px !important;
  height: 80px !important;
  pointer-events: none;
  overflow: hidden;
  padding-left: 3px;
`;

const Frame = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  justify-content: space-between;
  padding-top:4px;
`;
const Des = styled.span`
  display: flex;
  margin-top: 30px;
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
            <Des>
              Street Tire: {entry.sTire}
            </Des>
            <Des>
              Track Tire: {entry.tTire}
            </Des>
          </Frame>
          <Frame>
            <Pic src={entry.coiloverPic} />
            <Des>
              Coilover:  {entry.coilover}
            </Des>
          </Frame>
          <Frame>
            <Des>
              Turbo: {entry.turbo}
            </Des>
            <Pic src={entry.turboPic} />
          </Frame>
          <Frame>
            <Des>

            <Pic src={entry.chargerPic} />
            </Des>
            <Des>
              Supercharger: {entry.charger}
            </Des>
          </Frame>
          <Frame>
            <Des>
              Spoiler: {entry.spoiler}
            </Des>
            <Pic src={entry.spoilerPic} />
          </Frame>
        </Content>
        <Exit type="button" onClick={(e) => { props.handleClick(e) }}>CLOSE</Exit>
      </Inner>
    </Out>
  )
}


export default Modal;