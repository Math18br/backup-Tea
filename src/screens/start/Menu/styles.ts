import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #51b5ad;
`
export const Line = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 30px;
  top: 150px;
`
export const Collum = styled.View`
  flex-direction: column;
  padding: 20px;
`
export const MenuBnt = styled.TouchableOpacity`
  width: 136px;
  height: 136px;
  background: #ed4f6b;
  border: 2px solid #e12a4b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.body};
`
