import Image from "next/image";
import { useRouter } from "next/router";
import { Scroll, Timer } from "phosphor-react";
import * as S from "./styled";


const Header = () =>{
    const {pathname} = useRouter()
    console.info({pathname})
    return (
      <S.Container>
        <Image
          src={"/Brand.svg"}
          alt="Brand img"
          loading="lazy"
          width={140}
          height={50}
        />
        <S.Navigation>
          <S.Link href={"/"} isActive={pathname === "/"}>
            <Timer size={36} />
          </S.Link>
          <S.Link href={"/history"} isActive={pathname === "/history"}>
            <Scroll size={36} />
          </S.Link>
        </S.Navigation>
      </S.Container>
    );
}

export default Header;