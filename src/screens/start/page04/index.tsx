import {
  BtnNext,
  ContentsWrapper,
  HomeContainer,
  Title,
  TitleWrapper,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import HeadFone from '../../../assets/start/SVG/HeadFone.svg'
import TeaIcon from '../../../assets/start/SVG/TeaIcon.svg'

export function Start04() {
  const navigation = useNavigation()

  const next = () => {
    navigation.navigate('mainMenu')
  }

  return (
    <HomeContainer>
      <TeaIcon width={150} height={100} />
      <ContentsWrapper>
        <HeadFone width={320} height={320} />
        <TitleWrapper>
          <Title>
            Caso a criança se sinta confortável, recomenda-se o uso de fones de
            ouvido para uma melhor experiência ao acessar as músicas
            selecionadas pelos profissionais como ferramenta auxiliar.
          </Title>
        </TitleWrapper>
      </ContentsWrapper>

      <BtnNext onPress={next}>
        <Title>Seguinte</Title>
      </BtnNext>
    </HomeContainer>
  )
}
