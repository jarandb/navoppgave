// Checks the job component gets the right info according to a mock
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Job from "../components/Job/Job";
import IJob from "../Interfaces/IJob";

let container;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders job data", async () => {
  const fakeJob: IJob = {
    uuid: "a05b0105-7855-4c73-833f-3e8e25014a97",
    published: "2021-09-01T06:59:21.506473Z",
    expires: "2021-10-16T22:00:00Z",
    updated: "2021-09-01T06:59:23.009203Z",
    workLocations: [
      {
        country: "NORGE",
        address: "Bankplassen 2",
        city: "OSLO",
        postalCode: "1179",
        county: "OSLO",
        municipal: "OSLO",
      },
    ],
    title: "Summer Internship 2022",
    description:
      '<p>Org. nr: - Stillingsident: 4425497792 Presentasjon av stillingen:</p>\n<p>The summer internship is a unique opportunity to gain\nhands-on experience in one of the largest sovereign wealth funds in the world! Join an excellent environment for professional development and growth -- every role in our organisation plays a\nrole in delivering on our mission, and our summer internships are no different.</p>\n<p>As an intern you get a unique opportunity to contribute to the fund early on and to learn from top professionals. You will get a variety of\ndevelopment opportunities including skills-based boot camps, team projects, networking\nand a lunchtime lecture series. During the\ninternship you will receive a full introduction to the organisation, with high\nexposure to- and engagement with top management. There will also be social\nevents and team activities. In our organisation we\nnurture a culture where our employees have fun at work.</p>\n<p>As an intern, you will work on your own project within a specific department. Just a few examples of previous projects were “Machine\nlearning”, “Annual sustainability disclosure assessment” and “Analysis of the\napparel retail e-commerce sector in Europe”.</p>\n<p>Our summer internships last for eight weeks between June and August, and they are based in Oslo or London.</p>\n<h3>Qualifications (heading)</h3>\n<p><strong>Who are you?</strong><br />\nWe are looking for students from a range of different academic disciplines, who take initiative, are curious and have the desire to learn. You should demonstrate flexibility, be eager to work in teams, and be interested in an internationally focused job with a real purpose.<br />\nWe are looking for a group of students with different mindsets, who are comfortable in taking risks. We encourage people from different socio-economic and minority backgrounds to apply. It is important to us that you can demonstrate a knowledge and understanding of the fund’s mission and mandate, as well as its importance to the Norwegian people and how you think you can support this.</p>\n<p><strong>Application process</strong><br />\nTo apply please use the application form to fill in your resume. Other relevant documents can be uploaded.</p>\n<p>Our internship programme will start summer 2022.</p>\n<p>Please note: Application deadline is 17 of October at 11:59 CET.</p>\n<p>Read more about the programme and the selection process <a href="https://www.nbim.no/en/organisation/career/summer-internship/" rel="nofollow"><strong>here.</strong></a></p>\n<p><strong>Other requirements</strong><br />\nApplicants must be of sound character with personal finances in order and must be security approved in accordance with Norges Bank’s rules. Applicants will be required to submit a police certificate of conduct. Education and work experience will be verified.</p>\n<p><strong>What we offer</strong><br />\nNorges Bank Investment Management offers a rewarding, international fast-paced working\nenvironment, and the opportunity to play a role in safeguarding and building\nfinancial wealth for future generations as part of one of the world’s largest\nfunds. Norges Bank Investment Management has a performance culture that values\nthe contribution of every individual and focuses on professional growth.</p>\n<p>Our core values of excellence, innovation, integrity, and team spirit underpin our culture and how\nwe operate across all our offices. We collaborate and share information within\nour organisation where 38 nationalities are represented. English is our common\nworking language. Our organisation is grounded in trust, high ethical\nstandards, a flat hierarchy, and diversity. The more diverse we are, the more\ncreative we can be and the better the results we can achieve.</p>\n<h3>Contacts</h3>\n<p>HR Department, 22 31 60 00, talent&#64;nbim.no</p>\n<h3>Location</h3>\n<p>Bankplassen 2<br />\n1179 OSLO</p>\n<p>Apply for position:<a href="https://candidate.webcruiter.com/cv?advertid&#61;4425497792&amp;language&#61;nb&amp;link_source_id&#61;17" rel="nofollow">Click here</a></p>\n<h3>Key information:</h3>\n<p>Employer:Norges Bank Investment Management</p>\n<p>Reference number:4425497792<br />\nPercentage of full-time: 100%<br />\nSommerjobb<br />\nApplication deadline: 17.10.2021</p>\n',
    source: "XML_STILLING",
    applicationDue: "2021-10-17T00:00",
    occupations: [
      {
        level1: "Kontor og økonomi",
        level2: "Økonomi, statistikk og regnskap",
      },
    ],
    link: "https://arbeidsplassen.nav.no/stillinger/stilling/a05b0105-7855-4c73-833f-3e8e25014a97",
    employer: {
      name: "Norges Bank Investment Management",
      orgnr: "974554798",
      description:
        "<p>Norges Bank Investment Management manages assets worth more than 12,000 billion kroner, or about 1.4 trillion dollar. It&#39;s invested in international equity and fixed-income markets, real estate and renewable energy infrastructure. As one of the world&#39;s largest investment funds we have a highly skilled investment organisation with a global outlook. We are more than 500 people from 33 countries based in Oslo, London, New York, Singapore and Shanghai.</p>\n<p>Norges Bank Investment Management is subject to the Freedom of Information Act, and the list of applicants for the position is subject to public disclosure. An applicant requesting to have his or her name or other information exempt from public disclosure must provide grounds for this request. Please note that information about an applicant may be disclosed to the public even if the applicant has requested that such information be exempt.</p>\n",
    },
    engagementtype: "Feriejobb",
    extent: "Heltid",
    positioncount: "1",
    sector: "Offentlig",
  };

  const mockJsonPromise = Promise.resolve(fakeJob);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  var globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Job job={fakeJob} />, container);
  });

  expect(container.querySelector(".title").textContent).toBe(fakeJob.title);
  expect(container.querySelector(".employer").textContent).toBe(
    fakeJob.employer.name
  );
  expect(container.querySelector(".workplace").textContent).toBe(
    `${fakeJob.workLocations[0].city}, ${fakeJob.workLocations[0].country}`
  );
});
