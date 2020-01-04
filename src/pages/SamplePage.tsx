import React, { useState, useEffect, useContext, createContext, setGlobal, getGlobal } from 'reactn';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { LinkButton } from '../components';
import { BasicContext } from '../App';

// Sample

const SamplePage: React.FC = () => {
  const { arg } = useParams();  // /sample/:arg => { arg: "hoge" }
  const history = useHistory();

  setGlobal({
    argument: arg
  })

  return (
    <>
      <h1>Hello Sample, Arguement is {arg}</h1>
      <Counter />
      <LinkButton path="/" buttonText="Back To Index" />
    </>
  );
}

// define context
const CountContext = createContext({
  count: 0
})

const Counter: React.FC = () => {
  // Effect
  console.log('Start Rendering');
  useEffect(() => console.log('End Rendering'));

  // State
  const [count, setCount] = useState(0);

  // context value
  const contextValue = { count: count };

  return (
    <>
      <p>Clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>

      <CountContext.Provider value={contextValue}>
        <ChildCounter />
      </CountContext.Provider>
    </>
  )
}

const ChildCounter: React.FC = () => {
  const { count } = useContext(CountContext);
  const global: { argument: string } = getGlobal();  // Access from anyware global value

  return (
    <>
      <p>argument called from global value is {global.argument}</p>
      <ul>
        {(count > 0) ? '○'.repeat(count).split('').map(s => <span>{s}</span>) : null}
      </ul>
    </>
  )
}

export default SamplePage;