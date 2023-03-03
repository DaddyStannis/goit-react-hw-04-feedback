import Section from './shared/components/Section/Section';
import FeedbackOptions from './modules/FeedbackOptions/FeedbackOptions';
import Statistics from './modules/Statistics/Statistics';
import Notification from './shared/components/Notification/Notification';
import { useState } from 'react';
import { useCallback } from 'react';

const App = () => {
  const [statistics, setStatistics] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = useCallback(
    btnKey => {
      const normalizedButtonKey = btnKey.toLowerCase();
      setStatistics({
        ...statistics,
        [normalizedButtonKey]: statistics[normalizedButtonKey] + 1,
      });
    },
    [statistics]
  );

  const { good, neutral, bad } = statistics;
  const total = good + neutral + bad;

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          keys={Object.keys(statistics)}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics goodScore={good} neutralScore={neutral} badScore={bad} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
