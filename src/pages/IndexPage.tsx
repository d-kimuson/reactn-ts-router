import React, { createContext } from 'reactn';
import { LinkButton } from '../components';

const IndexPage: React.FC = () => {
  return (
    <>
      <h1>Hello Index</h1>
      <LinkButton path="/sample/hello" buttonText="Go To Sample" />
    </>
  );
}

export default IndexPage;