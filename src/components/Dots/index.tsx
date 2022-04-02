import React, { useMemo } from "react";

import { DotsBox, Dot } from "./styles";
import { Props } from "./types";

const Dots = ({ amount }: Props) => {
  const listDots = useMemo(() => {
    return Array(amount).fill(0, 0, amount);
  }, [amount]);

  return (
    <DotsBox amount={amount}>
      {listDots.map((_, index) => (
        <Dot key={index} />
      ))}
    </DotsBox>
  );
};

export { Dots };
