import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>sunqp</GradientText> 👋
        </>
      }
      description={<>This is My Blog.</>}
    />
  </Section>
);

export { Hero };
