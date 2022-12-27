import { SSConsumer } from "../swapiContext";
const SSconsumer = (Wrapper) => {
  return (props) => {
    return (
      <SSConsumer>
        {(swapi) => {
          return <Wrapper {...props} swapi={swapi}></Wrapper>;
        }}
      </SSConsumer>
    );
  };
};

export default SSconsumer;
