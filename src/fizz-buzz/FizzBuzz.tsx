import React from "react";

interface Props {
  startAt?: number;
}

function fizzBuzz(input: number): string {
  if (input % 3 == 0 && input % 5 == 0) {
    return "FizzBuzz";
  }
  if (input % 3 == 0) {
    return "Fizz";
  }
  if (input % 5 == 0) {
    return "Buzz";
  }
  return `${input}`;
}

const FizzBuzz: React.FC<Props> = ({ startAt = 1 }) => {
  const [count, setCount] = React.useState(startAt);

  React.useEffect(() => {
    const counter = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    );
    return () => clearInterval(counter);
  });
  return <h1>{fizzBuzz(count)}</h1>;
};

export default FizzBuzz;
