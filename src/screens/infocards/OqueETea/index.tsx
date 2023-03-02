import React from 'react'
import {
  CarBoxText,
  CardBox,
  HomeContainer,
  NameCardInfo,
  NameIntoCardInfo,
} from '../../../components/InfoCards/styles'
import { NavigaterMenu } from '../../../components/MenuDeNav'
import { TeaIcon } from '../../../components/TEAICON'

export function FoodInfo() {
  return (
    <HomeContainer>
      <TeaIcon />
      <NameCardInfo>
        <NameIntoCardInfo>ALIMENTAÇÃO</NameIntoCardInfo>
      </NameCardInfo>
      <CardBox>
        <CarBoxText>
          A seletividade alimentar refere-se à sensibilidade sensorial que pode
          estar presente em algumas pessoas com autismo.{' '}
        </CarBoxText>
        <CarBoxText>
          Apresenta-se com o indivíduo tendo aversão a cores, cheiros,
          temperatura ou textura dos alimentos.
        </CarBoxText>
        <CarBoxText>
          O padrão alimentar relatado da seletividade alimentar é uma
          alimentação com baixa variedade de alimentos.
        </CarBoxText>
        <CarBoxText>
          Cerca de 90% dos indivíduos autistas manifestam a seletividade
          alimentar.
        </CarBoxText>
        <CarBoxText>
          O comportamento alimentar no autismo pode acarretar carências
          nutricionais em relação aos micronutrientes, micronutrientes,
          vitaminas e minerais da alimentação.
        </CarBoxText>
      </CardBox>
      <NavigaterMenu />
    </HomeContainer>
  )
}

export function InfoSobreTEA() {
  return (
    <HomeContainer>
      <TeaIcon />
      <NameCardInfo>
        <NameIntoCardInfo>INFORMACOES</NameIntoCardInfo>
      </NameCardInfo>
      <CardBox>
        <CarBoxText>
          O TEA é dividido em três níveis de comprometimento do desenvolvimento
          do indivíduo, que vai do leve, morado ao grave, sendo o grave o que
          tem maior comprometimento do desenvolvimento.
        </CarBoxText>
        <CarBoxText>
          Os sinais apareceram na infância, os mais comuns não olhar no olho,
          brincar sem dar uma utilidade ao brinquedo, andar na ponta dos pés
          entre outros.
        </CarBoxText>
        <CarBoxText>
          As crianças também costumam apresentar os flaps que são comportamentos
          repetitivos de autorregulação.
        </CarBoxText>
        <CarBoxText>
          São comuns os comportamentos de balançar a mãos, balançar a cabeça,
          sentar e ficar de movimentando para frente e para trás, entre outros.
        </CarBoxText>
        <CarBoxText>
          Para que a criança tenha o desenvolvimento necessário é importante
          começar a intervenção logo após o diagnóstico.
        </CarBoxText>
        <CarBoxText>
          As intervenções são multiprofissionais e vão envolver várias áreas
          como terapia ocupacional, psicologia, fonoaudiologia e pedagogia.
        </CarBoxText>
      </CardBox>
      <NavigaterMenu />
    </HomeContainer>
  )
}

export function OueEoTEA() {
  return (
    <HomeContainer>
      <TeaIcon />
      <NameCardInfo>
        <NameIntoCardInfo>TEA</NameIntoCardInfo>
      </NameCardInfo>
      <CardBox>
        <CarBoxText>
          O autismo é uma síndrome genética, portanto não tem cura.
        </CarBoxText>
        <CarBoxText>
          É de difícil diagnóstico e vem geralmente acompanhado por deficiência
          intelectual ou tdha.
        </CarBoxText>
        <CarBoxText>
          Os sintomas aparecem no início da infância, geralmente a criança com
          TEA desenvolve hiperfoco, ou seja, ela gosta muito de algum
          determinado assunto ou brinquedo e sempre vai querer conversar sobre
          isso.
        </CarBoxText>
        <CarBoxText>
          Criança com TEA apresentam dificuldades na comunicação, podendo ou não
          ser verbais.
        </CarBoxText>
        <CarBoxText>
          Também apresentam dificuldades nas relações sociais por não entenderam
          muito bem as regras sociais. Uma das maiores dificuldades é a
          regulação emocional, quando estão chateadas com alguma coisa não
          conseguem se acalmar ou falar sobre o que a está incomodando.
        </CarBoxText>
      </CardBox>
      <NavigaterMenu />
    </HomeContainer>
  )
}
