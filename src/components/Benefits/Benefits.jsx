import React from 'react';
import Benefit from './Benefit';
import css from 'components/Benefits/Benefits.module.scss';

const benefits = [
  {
    id: 1,
    title: 'Improves cellular health',
    description:
      'Cacao nibs have more antioxidants than other superfoods, including green tea, acai, blueberries and pomegranates! Antioxidants are vital to our health because they fight damage to our cells done by free radicals.',
  },
  {
    id: 2,
    title: 'Provides feel-good chemicals',
    description:
      'Cacao nibs prompt the brain to release serotonin, a feel-good hormone. They also contain anandamide, an amino acid often referred to as the “bliss molecule” and the compound phenylethylamine. Phenethylamine triggers the release of endorphins and other happy chemicals in the brain. These brain chemicals elevate mood and stabilize it, including during a woman’s menstrual cycle.',
  },
  {
    id: 3,
    title: 'Protects cardiovascular system and heart',
    description:
      'Cacao nibs contain flavonoids, which are anti-inflammatory antioxidants that protect the heart and the arteries in your heart and brain. Flavonoids thin the blood and prevent clots. They help prevent heart disease, stroke, lower blood pressure and improve circulation. Cacao also contains over 700 compounds and the complex antioxidant polyphenol, which together lowers LDL or “bad” cholesterol and raises HDL or “good” cholesterol. In fact, cacao is actually better at protecting your heart than any heart drug on the market. Shocking, huh? Not really, Mother Nature knows her stuff!',
  },
  {
    id: 4,
    title: 'Prevents premature aging',
    description:
      'The polyphenols that protect your heart are in the same family as the antioxidants found in red wine and green tea. They protect cells from oxidation, which keeps you feeling and looking young. Wine and chocolate anyone?',
  },
  {
    id: 5,
    title: 'Fights fat',
    description:
      'The cacao nib contains MAO which naturally suppresses your appetite. MAO is often added to weight loss products. The additional benefit is that naturally-occurring MAO allows serotonin to continue circulating at a higher rate than other appetite suppressants. That’s good for keeping you from getting grumpy while working to lose weight.',
  },
  {
    id: 6,
    title: 'Resets metabolism',
    description:
      'We now know that the pesky stress hormone, cortisol, makes us retain fat that we would rather shed. The properties in cacao nibs reduce cortisol in the bloodstream, heighten fat-burning and even improve the microbial activity in the gut.',
  },
  {
    id: 7,
    title: 'Prevents tooth decay',
    description:
      'The crystalline extract found in cacao nibs strengthens tooth enamel and is even more effective than fluoride at preventing cavities.',
  },
  {
    id: 8,
    title: 'Improves cognitive function',
    description:
      'Various compounds, including flavonoids, found in cacao nibs increase blood flow to the brain, which improves memory, reaction time, problem-solving and attention span. This additional blood flow lowers the risk of Alzheimer’s and dementia as we age. Also, cacao nibs are high in magnesium, which is vital for mental health and a healthy, active brain. Deficiencies in magnesium have been linked to ADHD, bipolar disorder, anxiety, panic attacks, and schizophrenia.',
  },
  {
    id: 9,
    title: 'High in fiber',
    description:
      'The amount of fiber in cacao nibs is astounding! There’re 9 grams in just a one-ounce serving! Of course, this stimulates bowels and your digestive enzymes, but fiber is also important for keeping your blood pressure at a healthy level and your blood glucose levels stable.',
  },
  {
    id: 10,
    title: 'Magnesium-rich food',
    description:
      'Thanks to the magnesium found in cacao, eating it raises energy levels and reduces fatigue. Cacao is one of the highest natural sources of magnesium. Magnesium also fights type II diabetes and osteoporosis and naturally lowers blood pressure. Magnesium is vital to over 300 functions in the body, including controlling blood glucose, synthesizing proteins and regulating blood pressure.',
  },
  {
    id: 11,
    title: 'Potassium-rich food',
    description:
      'Potassium has been proven to help regulate blood pressure and lower risk of heart disease, stroke, arthritis, and cancer.',
  },
];

function Benefits() {
  return (
    <div id="benefits" className={css.container}>
      <h2 className={css.title}>Cacao nibs are packed with health benefits!</h2>
      {benefits.map((benefit) => (
        <Benefit
          key={benefit.id}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
}

export default Benefits;
