import * as S from './styles'
import { MouseEventHandler, useState } from "react"
import Image from "next/image"

interface Markup {
    date: Date,
    type: 'entrance' | 'exit'
  }

const FingerButton = (props: { onclick: MouseEventHandler<HTMLButtonElement>}) => {

    return(
        <S.Container>
            <S.Button onClick={props.onclick}>
                <Image
                    src={"/fingerprint.png"}
                    alt="Finger Img"
                    loading="lazy"
                    width={145}
                    height={180}
                />
            </S.Button>
        </S.Container>
    )

};

export default FingerButton;