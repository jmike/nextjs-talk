// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Fit,
  // Table,
  // TableHeader,
  // TableRow,
  // TableHeaderItem,
  // TableBody,
  // TableItem,
  Code,
  Appear,
  S,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  nextLogo: require('../assets/nextjs-logo.svg'),
  causalyLogo: require('../assets/causaly-logo-w-wordmark--white.svg'),
  yeepLogo: require('../assets/yeep-logo--white.svg'),
  greecejsLogo: require('../assets/greecejs-logo.png'),
  dimitris: require('../assets/dm-profile-3.jpg'),
  fielding: require('../assets/roy-fielding.jpg'),
  phpLogo: require('../assets/php-logo.png'),
  reactLogo: require('../assets/reactjs-logo.png'),
  angularLogo: require('../assets/angularjs-logo.png'),
  backboneLogo: require('../assets/backbonejs-logo.png'),
  vueLogo: require('../assets/vuejs-logo.svg'),
  jekyllLogo: require('../assets/jekyll-logo.svg'),
  expressLogo: require('../assets/expressjs-logo.png'),
  tweet1: require('../assets/tweet-985647320313167872.png'),
  georgakis: require('../assets/george-papandreou.jpg'),
  babyGuitarist: require('../assets/baby-guitarist.gif'),
  bassToss: require('../assets/bass-toss.gif'),
  brianMay: require('../assets/brian-may.gif'),
  brendanPolyglot: require('../assets/brendan-polyglot.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#D7D7D7'
  },
  {
    primary: 'Helvetica Neue',
    secondary: {
      name: 'GFS Didot',
      googleFont: true,
      styles: ['400']
    }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide id="cover" transition={['fade']} bgColor="primary">
          <Image src={images.nextLogo} width={400} />
          <Text caps textColor="secondary" margin="30px 0 0">
            and the pursuit of happiness 😄
          </Text>
          <Text margin="60px 0 0" textColor="secondary" textSize="22px">
            Dimitrios C. Michalakos
          </Text>
        </Slide>

        <Slide id="toc" transition={['fade']} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Table of Contents
          </Heading>
          <List>
            <ListItem>Introduction</ListItem>
            <ListItem margin="15px 0 0">
              Part A: The mechanics of Next.js
              <br />
              <S type="italic" textSize="24px" margin="0 0 0 60px">
                i.e. what is Next.js
              </S>
            </ListItem>
            <ListItem margin="15px 0">
              Part B: The pursuit of happiness
              <br />
              <S type="italic" textSize="24px" margin="0 0 0 60px">
                i.e. why use Next.js and how do we make decisions
              </S>
            </ListItem>
            <ListItem margin="15px 0 0">Q&A</ListItem>
          </List>
        </Slide>

        <Slide id="about" transition={['fade']} bgColor="secondary" textColor="primary">
          <Layout>
            <Fill>
              <div
                style={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <Image src={images.dimitris} width={400} margin="0" />
              </div>
            </Fill>
            <Fill>
              <Text textColor="primary" margin="60px 0 30px">
                Dimitrios C. Michalakos
              </Text>
              <div style={{ marginBottom: '15px' }}>
                <Link href="https://github.com/jmike" textColor="quaternary">
                  github.com/jmike
                </Link>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <Link
                  href="https://twitter.com/dmichalakos"
                  textColor="quaternary"
                  margin="15px 0 0"
                >
                  twitter.com/dmichalakos
                </Link>
              </div>
              <div>
                <Link
                  href="https://twitter.com/dmichalakos"
                  textColor="quaternary"
                  margin="15px 0 0"
                >
                  greecejs slack: @jmike
                </Link>
              </div>
            </Fill>
          </Layout>
          <br />
          <br />
          <Layout>
            <Fill>
              <Image src={images.causalyLogo} width={180} />
            </Fill>
            <Fill>
              <Image src={images.greecejsLogo} width={90} />
            </Fill>
            <Fill>
              <Image src={images.yeepLogo} width={150} margin="25px auto 0" />
            </Fill>
          </Layout>
        </Slide>

        <Slide id="part1-intro" transition={['fade']} bgColor="primary">
          <Heading size={6} caps textColor="secondary" margin="0 auto 60px">
            Part A: The mechanics of
          </Heading>
          <Image src={images.nextLogo} width={300} />
        </Slide>

        <Slide id="next-inspiration" transition={['fade']} bgColor="secondary">
          <Image src={images.tweet1} width={520} />
        </Slide>

        <Slide id="next-ingridients" transition={['fade']} bgColor="primary">
          <Heading size={6} caps fit lineHeight={1.3} margin="0 0 30px">
            3 key technologies of next.js
          </Heading>
          <Layout>
            <Fit>foo</Fit>
            <Fill>
              <List ordered>
                <ListItem margin="70px 0 15px" textColor="tertiary">
                  SSR
                </ListItem>
                <ListItem margin="15px 0" textColor="tertiary">
                  React
                </ListItem>
                <ListItem margin="15px 0" textColor="tertiary">
                  Convention over Configuration
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide id="ssr-intro" transition={['fade']} bgColor="secondary">
          <Text caps textColor="quaternary" textSize="24px">
            Key Technology #1
          </Text>
          <Heading size={4} textColor="primary">
            SSR
          </Heading>
        </Slide>

        <Slide id="rest-524" transition={['fade']} bgColor="secondary" textColor="primary">
          <Layout>
            <Fit>
              <div
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <Image src={images.fielding} width={200} margin="0" />
              </div>
            </Fit>
            <Fill>
              <BlockQuote>
                <Quote textSize="42px">
                  A distributed hypermedia architect has only three (3) fundamental options...
                </Quote>
                <Cite margin="10px 0 30px 30px">Roy T. Fielding</Cite>
              </BlockQuote>
            </Fill>
          </Layout>
          <List ordered>
            <Appear>
              <ListItem>
                Render the data where it is located;
                <br />
                <S type="italic" textColor="quaternary" textSize="24px">
                  i.e. any given dynamic web-page
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="30px 0">
                Encapsulate data with rendering engine;
                <br />
                <S type="italic" textColor="quaternary" textSize="24px">
                  a.k.a. Single Page Application (SPA)
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Send raw data.
                <br />
                <S type="italic" textColor="quaternary" textSize="24px">
                  e.g. XML, JSON, CSV
                </S>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>
                Roy Fielding is the principal author of HTTP 1.1. (his name comes before the name of
                Tim Berners-Lee) and secondary author of HTTP 1.0.
              </li>
              <li>Fielding wrote REST in 2000</li>
              <li>
                So SPAs where essentially conceived in 2000, even earlier. What took them so long?
              </li>
              <li>XSLT preceded SPAs</li>
            </ol>
          </Notes>
        </Slide>

        <Slide id="technology-landscape" transition={['fade']} bgColor="primary">
          <Heading size={6} caps fit lineHeight={1.3} margin="0 0 30px">
            Technology landscape based on Fielding's taxonomy
          </Heading>
          <Layout>
            <Fill>
              <S type="bold" textColor="tertiary">
                Pre-render data
              </S>
              <br />
              <br />
              <div>
                <Image src={images.phpLogo} height={40} margin="15px auto" />
                <Image src={images.jekyllLogo} height={50} margin="15px auto" />
                <Image src={images.expressLogo} height={45} margin="15px auto" />
                <Appear>
                  <Image src={images.nextLogo} height={50} margin="15px auto" />
                </Appear>
              </div>
            </Fill>
            <Fill>
              <S type="bold" textColor="tertiary">
                Encapsulate rendering engine
              </S>
              <br />
              <br />
              <Text caps textSize="28px" margin="15px auto">
                XSLT
              </Text>
              <Image src={images.backboneLogo} height={30} margin="15px auto 0" />
              <Image src={images.angularLogo} height={65} margin="0 auto" />
              <Image src={images.reactLogo} height={40} margin="5px auto 15px" />
              <Image src={images.vueLogo} height={50} margin="15px auto" />
              <Appear>
                <Image src={images.nextLogo} height={50} margin="15px auto" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide id="ssr" transition={['fade']} bgColor="primary">
          <Heading size={6} caps lineHeight={1.3} textColor="secondary">
            SSR is just another word for "isomorphic execution"
          </Heading>
          <S type="italic" textColor="quaternary">
            i.e. code that runs both on server and client.
          </S>
        </Slide>

        <Slide id="react-intro" transition={['fade']} bgColor="secondary">
          <Text caps textColor="quaternary" textSize="24px" margin="0 0 30px">
            Key Technology #2
          </Text>
          <Image src={images.reactLogo} width="400" />
        </Slide>

        <Slide id="react-why" transition={['fade']} bgColor="secondary">
          <Heading size={6} caps fit lineHeight={1.3} textColor="primary" margin="0 0 60px">
            What problem does react solve?
          </Heading>
          <Appear>
            <div>
              <Text textColor="primary">React takes care of DOM updates</Text>
              <Text textColor="quaternary" textSize="36px" margin="0 0 30px">
                You just specify were you want to go and React updates the DOM accordingly in the
                most optimal way.
              </Text>
              <Code textColor="primary">Α → Α΄</Code>
            </div>
          </Appear>
        </Slide>

        <Slide id="react-perf" transition={['fade']} bgColor="secondary">
          <Heading size={6} caps fit lineHeight={1.3} textColor="primary" margin="0 0 60px">
            Is Virtual DOM faster than the DOM?
          </Heading>
          <Text textColor="primary">[Perf Test]</Text>
        </Slide>

        <Slide id="react-is" transition={['fade']} bgColor="secondary">
          <Heading size={6} caps fit lineHeight={1.3} textColor="primary" margin="0 0 60px">
            What is React?
          </Heading>
          <List>
            <ListItem textColor="primary" margin="15px 0">
              DOM abstraction layer
            </ListItem>
            <ListItem textColor="primary" margin="15px 0">
              Event management
            </ListItem>
            <ListItem textColor="primary" margin="15px 0">
              Sensible component API
            </ListItem>
          </List>
        </Slide>

        <Slide id="coc-intro" transition={['fade']} bgColor="secondary">
          <Text caps textColor="quaternary" textSize="24px">
            Key Technology #3
          </Text>
          <Heading size={4} textColor="primary">
            Convention over Configuration
          </Heading>
        </Slide>

        <Slide id="part2-intro" transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps textColor="primary" margin="0 auto 60px">
            Part B: The pursuit of happiness
          </Heading>
          <BlockQuote>
            <Quote>Εκτός από τα φράγκα υπάρχει κι η αγάπη.</Quote>
          </BlockQuote>
        </Slide>

        <Slide id="junior-hapiness-intro" transition={['fade']} bgColor="secondary">
          <Text caps textColor="quaternary" textSize="24px">
            Recipes for happiness
          </Text>
          <Heading size={4} textColor="primary" margin="0 auto 30px">
            Junior devs
          </Heading>
          <Image src={images.babyGuitarist} margin="15px auto" height="400px" />
        </Slide>

        <Slide id="junior-hapiness" transition={['fade']} bgColor="secondary">
          <Heading size={4} caps fit textColor="primary" margin="0 auto 30px">
            Recipes for happiness: Junior devs
          </Heading>
          <List ordered>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Choose your team
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  it's the only choice you really have as a junior dev
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Do not be opinionated
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  you are not ready to make decisions yet
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Hard work
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  be prepared to study outside work hours
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                "Λεφτά υπάρχουν"
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  but you shouldn't care about money at this stage
                </S>
                <Image src={images.georgakis} margin="15px 0 15px 50px" height="140px" />
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide id="mid-level-hapiness-intro" transition={['fade']} bgColor="secondary">
          <Text caps textColor="quaternary" textSize="24px">
            Recipes for happiness
          </Text>
          <Heading size={4} textColor="primary" margin="0 auto 30px">
            Mid-level devs
          </Heading>
          <Image src={images.bassToss} margin="15px auto" height="400px" />
        </Slide>

        <Slide id="mid-level-hapiness" transition={['fade']} bgColor="secondary">
          <Heading size={4} caps fit textColor="primary" margin="0 auto 30px">
            Recipes for happiness: Mid-level devs
          </Heading>
          <List ordered>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Be humble
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  you are not the first, nor the last who managed to learn a technology
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Try to focus on the why
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Expand your horizons
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  learn new languages, tools, patterns
                </S>
                <Image src={images.brendanPolyglot} margin="15px 0 15px 50px" height="200px" />
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Do not be opportunistic
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  you are not ready for big money just yet
                </S>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide id="senior-hapiness-intro" transition={['fade']} bgColor="secondary">
          <Text caps textColor="quaternary" textSize="24px">
            Recipes for happiness
          </Text>
          <Heading size={4} textColor="primary" margin="0 auto 30px">
            Senior devs
          </Heading>
          <Image src={images.brianMay} margin="15px auto" height="400px" />
        </Slide>

        <Slide id="senior-hapiness" transition={['fade']} bgColor="secondary">
          <Heading size={4} caps fit textColor="primary" margin="0 auto 30px">
            Recipes for happiness: Senior devs
          </Heading>
          <List ordered>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Everything clicks
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  when you make the right technology choice
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Fair payment
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  get what you deserve
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" margin="15px 0">
                Give back to the community
                <br />
                <S type="italic" textColor="quaternary" textSize="24px" margin="0 0 0 50px">
                  you are not alone and you got here by standing on the shoulders of giants
                </S>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide id="pantelis" transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            Ο κυρ Παντελής
          </Heading>
          <Heading size={6} textColor="tertiary" margin="15px 0 60px 0">
            Πάνος Τζαβέλλας (1925-2009)
          </Heading>
          <Appear>
            <Text textColor="primary">
              Ξέρεις πως δώσανε, κυρ-Παντελή,
              <br />
              άλλοι τα νιάτα τους και τη ζωή
              <br />
              να γίνει τ’ όνειρο φέτα ψωμί
              <br />
              να φας κι εσύ, κυρ-Παντελή;
              <br />
              <br />
              Κι εσύ τι έδωσες, κυρ-Παντελή;
              <br />
              Πες μας τι έκανες σ’ αυτή τη γη.
              <br />
              Πες μας τι άφησες κληρονομιά
              <br />
              που να εμπνέει τη νέα γενιά.
            </Text>
          </Appear>
        </Slide>

        <Slide id="thats-all-folks" transition={['fade']} bgColor="secondary">
          <Heading size={1} textColor="primary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
