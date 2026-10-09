import React from 'react'
import styled from 'styled-components'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'

const Section = styled.div`
  margin-bottom: 3rem;
`

const DefinitionList = styled.dl`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 0;
  max-width: 48rem;
  margin: 0;
  border-top: 1px solid var(--rule);

  dt, dd {
    margin: 0;
    padding: 1rem 0;
    border-bottom: 1px solid var(--rule);
  }

  dt {
    font-weight: 600;
  }

  dd {
    color: var(--muted);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    dt {
      padding-bottom: 0.25rem;
      border-bottom: 0;
    }

    dd {
      padding-top: 0;
    }
  }
`

const Role = styled.span`
  display: block;
  font-weight: 400;
  color: var(--muted);
`

const skills = [
  { 'area': 'Integration', 'items': [ 'Integration-led solutions in Java', 'Partner and platform integrations', 'Near real-time and event-driven processing', 'OAuth2', 'Keycloak' ] },
  { 'area': 'Containers & Cloud', 'items': [ 'Kubernetes', 'AWS (Lambda, Lambda@Edge, CloudFront, Cognito, KMS, Amazon Lex, Organizations)', 'Azure' ] },
  { 'area': 'DevOps & Delivery', 'items': [ 'CI/CD adoption', 'Automated testing', 'GitOps', 'Terraform', 'AWS CDK', 'Git workflow', '12-factor methodology' ] },
  { 'area': 'Architecture', 'items': [ 'Microservices', 'Reactive stack', 'Serverless', 'Event-driven processing', 'Performance optimization', 'Cloud migration' ] },
  { 'area': 'Leadership', 'items': [ 'Team leadership', 'Kanban', 'Business KPIs', 'Technical community building', 'Conference speaking (TDC São Paulo)' ] },
]

const experience = [
  { 'company': 'API People', 'role': 'Cloud Solution Architect', 'period': 'Jul 2022 – Present', 'summary': 'Architecting integration-led solutions that connect banks, credit unions and fintechs to core banking systems and partner platforms on AWS and Azure. Led the company\'s SOC 2 cloud compliance effort with a multi-account AWS Organization run as Terraform/GitOps.' },
  { 'company': 'TAG – Experiências Literárias', 'role': 'Team Leader / Tech Lead', 'period': 'Mar 2020 – Jun 2022', 'summary': 'Led the entire IT department after leading the mobile and web teams. Drove adoption of automated testing and CI/CD, unified identity management with Keycloak and rebuilt the e-commerce on a static site generator.' },
  { 'company': 'SAP Labs Latin America', 'role': 'Software Developer', 'period': 'Nov 2013 – Feb 2020', 'summary': 'Worked on SAP Globalization products: Banking, Visual Harmonization and Tax Service. Architected the Tax Service microservices split, improved its performance by 2,400% by migrating to a reactive stack, and co-founded the BUG technical community.' },
  { 'company': 'Meta IT', 'role': 'SAP ABAP Consultant', 'period': 'May 2012 – Nov 2013', 'summary': 'Implemented and customized SAP ABAP solutions on-site at client locations.' },
]

const certifications = [
  'Certified Kubernetes Application Developer (CKAD)',
  'AWS Certified Solutions Architect – Associate',
  'AWS Certified Developer – Associate',
]

const AboutMePage = () => {
  return (
    <BasePage>
      <h1>About</h1>
      <Section className="prose">
        <p>I'm a Cloud Solution Architect with <strong>13+ years</strong> in software engineering.</p>
        <p>For the last four years I have been architecting integration-led solutions that connect banks, credit unions and fintechs to core banking systems and partner platforms, on AWS and Azure. Before that I worked on microservices, performance and cloud migration at SAP, held a DevOps role driving global test cycles, and championed CI/CD adoption.</p>
        <p>I have led an entire IT department and co-founded a technical community, and I'm a hands-on architect who stays close to the code, from early R&amp;D to production.</p>
      </Section>

      <h2>Experience</h2>
      <Section>
        <DefinitionList>
          { experience.map( job => (
            <React.Fragment key={ job.company }>
              <dt>{ job.company }<Role>{ job.period }</Role></dt>
              <dd><strong>{ job.role }</strong>. { job.summary }</dd>
            </React.Fragment>
          ) ) }
        </DefinitionList>
      </Section>

      <h2>Skills</h2>
      <Section>
        <DefinitionList>
          { skills.map( skill => (
            <React.Fragment key={ skill.area }>
              <dt>{ skill.area }</dt>
              <dd>{ skill.items.join( ', ' ) }</dd>
            </React.Fragment>
          ) ) }
        </DefinitionList>
      </Section>

      <h2>Certifications</h2>
      <Section className="prose">
        <ul>
          { certifications.map( certification => <li key={ certification }>{ certification }</li> ) }
        </ul>
      </Section>

      <h2>Education</h2>
      <Section className="prose">
        <p>Bachelor of Science in Computer Science, Centro Universitário La Salle (2010 – 2018)</p>
      </Section>
    </BasePage>
  )
}

export default AboutMePage

export const Head = () => <SEO title="About" description="Cloud Solution Architect with 13+ years in software engineering, architecting integration-led solutions for banks, credit unions and fintechs on AWS and Azure." />
