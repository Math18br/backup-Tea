import {
  BtnNext,
  ContentsWrapper,
  HomeContainer,
  Title,
  TitleWrapper,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import Thinkin from '../../../assets/start/SVG/Thinkin.svg'
import TeaIcon from '../../../assets/start/SVG/TeaIcon.svg'

export function Start03() {
  const navigation = useNavigation()

  const next = () => {
    navigation.navigate('start04')
  }

  return (
    <HomeContainer>
      <TeaIcon width={150} height={100} />
      <ContentsWrapper>
        <Thinkin width={300} height={320} />
        <TitleWrapper>
          <Title>
            Nele você encontrará informações de profissionais especialistas no
            assunto sobre nutrição adequada e principais sinais apresentados
            pela criança com autismo.
          </Title>
        </TitleWrapper>
      </ContentsWrapper>

      <BtnNext onPress={next}>
        <Title>Seguinte</Title>
      </BtnNext>
    </HomeContainer>
  )
}
