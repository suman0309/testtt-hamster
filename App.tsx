import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { CelebrationView } from './components/CelebrationView';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {!accepted ? (
        <QuestionCard onYes={() => setAccepted(true)} />
      ) : (
        <CelebrationView />
      )}
    </>
  );
};

export default App;