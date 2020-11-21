import React, { useContext, useRef, useEffect } from 'react';

import 'antd/dist/antd.css';
import { Typography } from 'antd';

import './problem.css'
import { ProblemContext } from './problem-context';

const { Title } = Typography;

const Problem = () => {
  const inputRef = useRef();
  const [problems, dispatch] = useContext(ProblemContext);

  return (
    <div>
      <div style={{ padding: 36 }}>
        {problems.map((problem) => (
          <div key={problem.id}>
            <div className="problem-title">
              <Title level={5}>{problem.title}</Title>
            </div>
            <div className="problem-paragraphs">
              {problem.paragraphs.map((paragraph, index) => (
                <div className="problem-paragraph" key={index}>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
            <div className="problem-citation">
              <p><i>{problem.citation&&'—'} {problem.citation}</i></p>
            </div>
            {problem.type=='set' && (
              <div className="problem-questions">
                {problem.questions.map((question) => (
                  <div className="problem-question" key={question.sub_id}>
                    <p>{question.narration}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
