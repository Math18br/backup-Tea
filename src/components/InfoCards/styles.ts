import styled from 'styled-components/native'

export const CardBox = styled.View`
  box-sizing: border-box;

  width: 330px;
  height: 505px;
  /* left: 34px;
  top: 130px; */
  top: -60px;

  background: #ffffff;
  border: 2px solid #54928d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`
export const CarBoxText = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
`

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #51b5ad;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;
`

export const NameCardInfo = styled.View`
  box-sizing: border-box;

  display: flex;
  background: #ffffff;
  border: 1px solid #54928d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  top: 5px;
`

export const NameIntoCardInfo = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
`
