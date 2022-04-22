import React, { useCallback, useState } from "react";
import { Input, InputContainer, SearchButton } from "./input.style";
import { BsSearch } from "react-icons/bs";
import SwitchState from "./SwitchState";
import { SpringConfig } from "react-spring";

type Props = {
  searchEvent?: (...props: any) => void;
  width?: string;
  config?: SpringConfig;
} & React.HTMLAttributes<HTMLInputElement>;

function AnimatedSearch({
  searchEvent,
  style,
  width = "300px",
  ...props
}: Props) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const search = useCallback(() => {
    setIsHover(!isHover);
    if (!isHover) {
      searchEvent && searchEvent();
    }
  }, [isHover, searchEvent]);
  return (
    <InputContainer style={style}>
      <SwitchState isHover={isHover} width={width} >
        <Input {...props} />
      </SwitchState>
      <SearchButton onClick={search}>
        <BsSearch color="white" size={18} />
      </SearchButton>
    </InputContainer>
  );
}

export default AnimatedSearch;
