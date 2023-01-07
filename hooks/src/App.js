import React, { useState, useEffect, useCallback, useMemo } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((val) => val + 1)}>Increase</button>
        <button onClick={() => setValue((val) => (val > 1 ? val - 1 : 1))}>
          Decrease
        </button>
        <button onClick={() => setVisible(false)}>Hide</button>
        {/* <ClassCounter value={value} /> */}
        <HookCounter value={value} />
        <PlanetName id={value} />
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setVisible(true)}>Show</button>
    </div>
  );
}

// class ClassCounter extends Component {
//   componentDidMount() {
//     console.log("class component did mount");
//   }
//   componentDidUpdate() {
//     console.log("class component did update");
//   }
//   componentWillUnmount() {
//     console.log("component will unmount");
//   }
//   render() {
//     return <div>{this.props.value}</div>;
//   }
// }
function HookCounter({ value }) {
  useEffect(() => {
    return () => console.log("");
  });
  return <div>{value}</div>;
}
const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((data) => data.json())
    .then((data) => data);
};

const useRequest = (request) => {
  const initialVal = useMemo(
    () => ({
      data: null,
      loading: true,
      hasError: false,
    }),
    []
  );
  const [planetData, setPlanetData] = useState(initialVal);
  useEffect(() => {
    setPlanetData(initialVal);
    let canceled = false;
    request()
      .then((data) => {
        !canceled &&
          setPlanetData({
            data: data,
            loading: false,
            hasError: false,
          });
      })
      .catch((err) => {
        !canceled &&
          setPlanetData({
            data: null,
            loading: false,
            hasError: true,
          });
      });
    return () => (canceled = true);
  }, [request, initialVal]);
  return planetData;
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  return useRequest(request);
};

function PlanetName({ id }) {
  const { data, hasError, loading } = usePlanetInfo(id);
  if (hasError) {
    return <div>Something went wrong</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <h1>
      {id} - {data.name}
    </h1>
  );
}
export default App;
