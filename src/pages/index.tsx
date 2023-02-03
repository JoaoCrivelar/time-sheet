import Header from '@/components/Header'
import TimePiece from '@/components/TimePiece'
import FingerButton from '@/components/FingerButton'
import IndicatorItem from '@/components/IndicatorItem'
import * as S from './index.styles'
import { useState } from 'react'

type Markup = {
  date:Date,
  type: 'entrance' | 'exit'
}

type Props = {
  markup: Markup;
};

export default function Home() {

  const [count, setCount] = useState(0);
  const [markups, setMarkups] = useState<Markup[]>([]);

    function values() {
        let markup: Markup =  {
            date: new Date,
            type: 'entrance'
        }

        if(count % 2 != 0){
            markup = {
            date: new Date,
            type: 'exit'
            }   
        }
        setCount(count + 1);
        setMarkups(prevMarkups => [...prevMarkups, markup]);
    }

  return (
    <S.Container>
      <Header />
      <S.IndicatorStack>
        {markups.map((markup, index) => (
          <IndicatorItem key={index} markup={markup} />
        ))}
      </S.IndicatorStack>
      <TimePiece/>
      <FingerButton onclick = {values} />
    </S.Container>
  );
}
