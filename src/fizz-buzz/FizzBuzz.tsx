import React from "react";
import { FC } from "react";

type Props = {
  startAt?: number;
};

const fizzBuzz = (count: number): string => {
  if (count % 3 == 0 && count % 5 == 0) {
    return "FizzBuzz";
  }
  if (count % 3 == 0) {
    return "Fizz";
  }
  if (count % 5 == 0) {
    return "Buzz";
  }
  return `${count}`;
};

const FizzBuzz: FC<Props> = ({ startAt }) => {
  const [count, setCount] = React.useState(startAt || 1);

  React.useEffect(() => {
    let counter = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => clearInterval(counter);
  });

  return <h1>{fizzBuzz(count)}</h1>;
};

export default FizzBuzz;
