import { useEffect, useState } from "react";
import * as S from "./styles"


const TimePiece = () => {
    const [time, SetTime] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
          SetTime(new Date());
        }, 1000);
    });

    const monthPT = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const dayPT = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    let newData = (dayPT[time.getDay()] + " - " + (time.getDate()) + ' de ' + monthPT[(time.getMonth())] + ', ' + (time.getFullYear()) );
    let newHours = String(time.getHours()).padStart(2, "0")
    let newMinutes = String(time.getMinutes()).padStart(2, "0")
    

    return(
        <S.Container>
            <S.TypeText>{newData}</S.TypeText>
            <S.TimeContent>
                <span>{newHours}</span>
                <strong>:</strong>
                <span>{newMinutes}</span>
            </S.TimeContent>
        </S.Container>
    );
};

export default TimePiece;