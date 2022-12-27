import { SSConsumer } from "../swapiContext";

const SSconsumer = (Wrapper, mapData) => {
  return (props) => {
    return (
      <SSConsumer>
        {(swapi) => {
          const swapiData = mapData(swapi);
          return <Wrapper {...props} {...swapiData}></Wrapper>;
        }}
      </SSConsumer>
    );
  };
};

export default SSconsumer;
