import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/skills';
import ProjectHighlights from '../components/projectHighlights';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <Hero />
      <Skills />
      <ProjectHighlights />
      <Contact />
      <Footer />
    </Layout>
  );
}
