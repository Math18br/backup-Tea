import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #ed4f6b;
`

export const MusicCard = styled.View`
  width: 107px;
  height: 100px;
  background: #51b5ad;
  border: 1px solid #54928d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2px;
  margin-left: 10px;
  margin-bottom: 15px;
`

export const MusicCardConteiner = styled.View`
  padding: 10px;
  top: 120px;
  display: flex;
  justify-content: center;
  align-content: space-around;

  flex-direction: row;
  flex-wrap: wrap;
`

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))``
