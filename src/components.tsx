import React from 'reactn';
import { useHistory } from 'react-router-dom';

export const LinkButton: React.FC<{ path: string, buttonText: string }> = (props: { path: string, buttonText: string }) => {
  const history = useHistory();
  return (
    <button onClick={() => history.push(props.path)}>{props.buttonText}</button>
  )
}