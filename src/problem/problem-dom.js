import React, { useContext, useRef, useEffect } from 'react';

import { ProblemContext } from './problem-context';

const Problem = () => {
  const inputRef = useRef();
  const [problems, dispatch] = useContext(ProblemContext);

  return (
    <>
      <div>
        {problems.map((problem) => (
          <div key={problem.id}>
            {problem.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Problem;
