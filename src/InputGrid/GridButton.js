import React from 'react';

export default function Button(props) {
  return <button onClick = {() => props.handleInput(props.value)}>{props.value}</button>;
}