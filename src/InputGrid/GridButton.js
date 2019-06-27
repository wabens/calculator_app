import React from 'react';

export default function Button(props) {
  return <button onClick = {() => props.handleInput(props.value)}><h2>{props.value}</h2></button>;
}