// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// const images = {
// };

// preloader(images);

const theme = createTheme({
  primary: "#556b2f",
  secondary: "black"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              So you want to
            </Heading>
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              Learn Javascript
            </Heading>
            <Text lineHeight={2} textColor="white">
              A basic course by Edwin && Brian
            </Text>
          </Slide>
          <Slide transition={["zoom", "slide"]} bgColor="primary" notes="Talk about History and what problems it solved">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              A little History of Javascript
            </Heading>
            <List>
              <Appear><ListItem textColor="white">JavaScript was Created in 10 days in 1995 by Brenden Eich while working at NetScape (Mozilla)</ListItem></Appear>
              <Appear><ListItem textColor="white">Originally called Mocha then changed to LiveScript and then JavaScript</ListItem></Appear>
              <Appear><ListItem textColor="white">In 1997 JS was taken to ECMA to create a standard and from that point forward every implementation
                 of JavaScript has really been ECMAScript</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              VARIABLES
            </Heading>
            <Text lineHeight={2} textColor="white">
                <Layout>var name = "Brian"</Layout>
                var tells JS to set data aside
                name is the name of the variable
                in this case it's Brian
                console.log(name) => "Brian"
                convention is camelCase
                var firstName = "Brian"
                var lastName = "Phelps"
            </Text>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
                VARIABLE NAMING RULES
            </Heading>
            <List textColor="white">
                <ListItem>No spaces</ListItem>
                <ListItem>Can't start with digits</ListItem>
                <ListItem>underscores are permitted, not convention</ListItem>
                <ListItem>camelCase is first word lowercase and rest capitalized</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              OPERATORS
            </Heading>
            <List textColor="white">
              <ListItem>standard JS operators are +, -, *, /, %</ListItem>
              <ListItem>Follows PEMDAS (6 + 2) * 3</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              COMPARATORS
            </Heading>
            <Text>comparators return booleans</Text>
            <List textColor="white">
                <ListItem>3 > 2 TRUE</ListItem>
                <ListItem>5 = 5 TRUE</ListItem>
                <ListItem>2 >=3 FALSE</ListItem>
                <ListItem>3===2 FALSE</ListItem>
                <ListItem>2== 3 FALSE</ListItem>
                <ListItem>5!=4 TRUE</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Strings
            </Heading>
            <CodePane lang="jsx" source={require("raw!../assets/stringExm.example")} />
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Strings continued
            </Heading>
            <CodePane lang="jsx" source={require("raw!../assets/stringCont.example")} />
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Math with Javascript
            </Heading>
            <Text>Numbers in JS must be parsed from strings to do math</Text>
            <List textColor="white">
              <ListItem>Math.random()</ListItem>
              <ListItem>Math.min(1, 4, 9)</ListItem>
              <ListItem>Math.max(11, 9, 21)</ListItem>
              <ListItem>Math.round(8.3)</ListItem>
              <ListItem>Math.floor(4.8)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Putting the Func in Functions
            </Heading>
            <CodePane lang="jsx" source={require("raw!../assets/functionExm.example")} />
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Arrays
            </Heading>
            <CodePane lang="jsx" source={require("raw!../assets/arrExm.example")} />
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              JavaScript Objects
            </Heading>
            <CodePane lang="jsx" source={require("raw!../assets/objExm.example")} />
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Heading size={1} Fill Fit lineHeight={1} textColor="secondary">
              Lets talk about Loops
            </Heading>
            <Appear>
              <List>
                <ListItem textColor="white">for</ListItem>
                <ListItem textColor="white">forEach</ListItem>
                <ListItem textColor="white">do ..while</ListItem>
                <ListItem textColor="white">while</ListItem>
                <ListItem textColor="white">for ..in</ListItem>
                <ListItem textColor="white">for ..of</ListItem>
                <ListItem textColor="white">map</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgColor="White">
            <Text size={1} Fit cap lineHeight={2} textColor="#ff4081">
              THE FOR LOOP IS THE MOST COMMONLY USED LOOP
            </Text>
            <CodePane lang="jsx" source={require("raw!../assets/forLoop.example")} />
          </Slide>
          <Slide transition={["zoom"]} bgColor="White">
            <Text size={1} Fit cap lineHeight={2} textColor="#ff4081">
              DO & DO ..WHILE, THERE IS NO TRY
            </Text>
            <Text size={1} Fit cap lineHeight={1.5} textColor="#ff4081">
              This loop will run while a condition is true!
            </Text>
            <CodePane lang="jsx" source={require("raw!../assets/doWhile.example")} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
