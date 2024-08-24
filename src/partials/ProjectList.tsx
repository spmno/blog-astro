import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="rust sdk for volcengine llm api"
        description="字节LLM的rust sdk封装"
        link="https://github.com/spmno/volcengine-llm-rust-sdk"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Rust</Tags>
            <Tags color={ColorTags.LIME}>volcengine</Tags>
            <Tags color={ColorTags.SKY}>LLM</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
