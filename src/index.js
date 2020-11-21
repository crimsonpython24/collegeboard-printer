import React from 'react';
import ReactDOM from 'react-dom';

import { ProblemContextProvider } from './problem/problem-context';
import Problem from './problem/problem-dom'

import * as constants from './constants';


const initState = [...constants.PROBLEMS]

const App = () => {
  <ProblemContextProvider initState={initState}>
    <Problem />
  </ProblemContextProvider>
}

ReactDOM.render(<App />, document.getElementById('root'));
