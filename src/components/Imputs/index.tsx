import * as S from "./styled";
import {CaretCircleUp, CaretCircleDown} from "phosphor-react";

const Imputs = () => {
    return (    
        <>
        <S.Container>
            <S.Card>
            <S.H1> 12 <S.H3>:</S.H3> 12 </S.H1>
                <S.H2>Entrada <CaretCircleUp size={15} color="#27AE60"/> </S.H2>
            </S.Card><S.Card>
                <S.H1> 12 <S.H3>:</S.H3> 15 </S.H1>
                <S.H2>Saída <CaretCircleDown size={15} color="#EB5757"/></S.H2>
            </S.Card><S.Card>
            <S.H1> 12 <S.H3>:</S.H3> 12 </S.H1>
                <S.H2>Saída <CaretCircleDown size={15} color="#EB5757"/></S.H2>
            </S.Card><S.Card>
            <S.H1> 12 <S.H3>:</S.H3> 12 </S.H1>
                <S.H2>Entrada <CaretCircleUp size={15} color="#27AE60"/></S.H2>
            </S.Card>
        </S.Container>
            </>
    );
};

export default Imputs;