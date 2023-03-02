import { Collum, HomeContainer, Line, MenuBnt, Title } from './styles'
import Confusion from '../../../assets/menu/confusion.svg'
import Food from '../../../assets/menu/food.svg'
import Information from '../../../assets/menu/information.svg'
import Music from '../../../assets/menu/music.svg'
import { TeaIcon } from '../../../components/TEAICON'
import { useNavigation } from '@react-navigation/native'

export function Menu01() {
  const navigation = useNavigation()

  const MusicaMenu = () => {
    navigation.navigate('musicaMenu')
  }
  const FoodInfo = () => {
    navigation.navigate('foodInfo')
  }
  const InfoSobreTEA = () => {
    navigation.navigate('teaInfo')
  }
  const OueEoTEA = () => {
    navigation.navigate('oQueInfo')
  }
  return (
    <HomeContainer>
      <TeaIcon />
      <Line>
        <MenuBnt onPress={OueEoTEA}>
          <Confusion />
          <Title>O que é o Tea</Title>
        </MenuBnt>
        <MenuBnt onPress={InfoSobreTEA}>
          <Information />
          <Title>Informações sobre o TEA</Title>
        </MenuBnt>
      </Line>
      <Line>
        <MenuBnt onPress={MusicaMenu}>
          <Music />
          <Title>Suas Musicas</Title>
        </MenuBnt>
        <MenuBnt onPress={FoodInfo}>
          <Food />

          <Title>Seletividade</Title>
          <Title>Alimentar</Title>
        </MenuBnt>
      </Line>

      <Collum></Collum>
    </HomeContainer>
  )
}
