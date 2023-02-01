import Header from '@/components/Header'
import IndicatorItem from '@/components/IndicatorItem'
import * as S from './index.styles'

type Markup = {
  date:Date,
  type: 'entrance' | 'exit'
}

export default function Home() {
  const currentDate = new Date()

  const markups: Markup[] = [
    {
      date: currentDate,
      type: "entrance",
    },
    {
      date: currentDate,
      type: "exit",
    },
    {
      date: currentDate,
      type: "entrance",
    },
    {
      date: currentDate,
      type: "exit",
    },
  ];

  return (
    <S.Container>
      <Header />
      <S.IndicatorStack>
        {markups.map((markup, index) => (
          <IndicatorItem key={index} markup={markup} />
        ))}
      </S.IndicatorStack>
    </S.Container>
  );
}
