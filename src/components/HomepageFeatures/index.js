import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Multi-AI Interaction',
    description: (
      <>
        With HubAI, the future of AI chat is at your fingertips. Engage with
        multiple AIs simultaneously and toggle between them with ease. No matter
        which platform you're on - Windows, macOS, or Linux - HubAI provides a
        fluid experience that's tailored to your needs.
      </>
    ),
  },
  {
    title: 'An Expanding Universe of Extensions',
    description: (
      <>
        Unlock endless possibilities with our built-in package store. Browse,
        install, and interact with thousands of extensions and AIs (brains)
        crafted by our ever-growing community. From specialized prompts to
        innovative chat interfaces, discover something new every day.
      </>
    ),
  },
  {
    title: 'Secure and Open-Source',
    description: (
      <>
        Trust is our priority. HubAI is 100% open-source, granting you full
        access to inspect, modify, and adapt the source code to your preferences
      </>
    ),
  },
  {
    title: 'Privacy First',
    description: (
      <>
        Your privacy is paramount: all chats are encrypted and stored only on
        your device. We will never read or sell your data.
      </>
    ),
  },
  {
    title: 'Theme and UI customization',
    description: (
      <>
        Personalize your AI chat environment with HubAI’s theme system. Whether
        you're a fan of sleek dark modes, classic light interfaces, or something
        entirely unique, our community-driven themes ensure that you chat in
        style. Express yourself and even craft your own themes to share with the
        world!
      </>
    ),
  },
  {
    title: 'Elevate Your AI Experience with Custom Prompt',
    description: (
      <>
       Access thousands of AI prompts tailored to enhance your interaction and usability. Whether
        you're looking to refine your AI's responses, navigate specific topics,
        or explore new conversational avenues, our vast collection ensures a
        continually evolving and enriched chat experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {!!Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
