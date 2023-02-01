
import * as S from './styles';
type Markup = {
  date: Date;
  type: 'entrance' | 'exit';
}; 

type Props = {
  markup: Markup;
};

const IndicatorItem= ({ markup }:Props) => {

    const translateType = {
        entrance:'Entrada',
        exit:'Saída'        
    }

    const translateColors = {
      entrance: "green",
      exit: "red",
    } as const

  return (
    <S.Container>
      <S.TimeContent>
        <span>{String(markup.date.getHours()).padStart(2, "0")}</span>
        <strong>:</strong>
        <span>{String(markup.date.getMinutes()).padStart(2, "0")}</span>
      </S.TimeContent>
      <S.TypeText color={translateColors[markup.type]}>
        {translateType[markup.type]}
      </S.TypeText>
    </S.Container>
  );
}

export default IndicatorItem;