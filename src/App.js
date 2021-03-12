import { useState } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

const FEEDBACK_OPTIONS = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setStatistics] = useState({ ...FEEDBACK_OPTIONS });

  function onLeaveFeedback(option) {
    setStatistics({ ...feedbacks, [option]: feedbacks[option] + 1 });
  }

  function countTotalFeedback() {
    return Object.values(feedbacks).reduce(
      (total, amount) => total + amount,
      0
    );
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((feedbacks.good / countTotalFeedback()) * 100);
  }

  const [good, neutral, bad] = Object.keys(feedbacks);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={good} onLeaveFeedback={onLeaveFeedback} />
        <FeedbackOptions options={neutral} onLeaveFeedback={onLeaveFeedback} />
        <FeedbackOptions options={bad} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          total={countTotalFeedback()}
          positivePersentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App;
