"use strict";

const defaultMarkdownStyle = `

\`\`\`web
width: 100%;
display: flex;
position: relative;
max-width: 600pt;
min-height: 100%;
flex-direction: column;
justify-content: flex-start;
\`\`\`

colour: black;
padding: 24pt;
font-family: "STIXTwoText";
padding-bottom: 64pt;
background-colour: white;

primaryHeading {
  font-size: 32pt;
}

secondaryHeading {
  font-size: 24pt;
}

tertiaryHeading {
  font-size: 17pt;
}

quaternaryHeading {
  font-size: 13pt;
}

primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  line-height: 1;
  font-weight: bold;
  padding-top: 8pt
  
  :first-child {
    padding-top: 0;
  }
}

paragraph,
blockListing,
inlineListing,
tableHeadCell,
tableBodyCell,
orderedItem,
unorderedItem {
  font-size: 13pt;
  line-height: 20pt;
}

paragraph,
orderedList,
unorderedList,
primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  padding-bottom: 16pt;

  :last-child {
    padding-bottom: 0;
  }
}

orderedList,
unorderedList {
  padding-left: 16pt;
}

orderedItem,
unorderedItem {
  padding-bottom: 8pt;

  :last-child {
    padding-bottom: 0;
  }
}

paragraph,
orderedItem,
unorderedItem {
  text-align: justify;
}

blockListing,
inlineListing {
  colour: white;
  font-family: "Inconsolata";
  background-colour: black;
}

blockListing {
  display: block;
  overflow-x: scroll;
  padding-top: 6pt;
  padding-left: 6pt;
  padding-right: 6pt;
  padding-bottom: 6pt;
}

inlineListing {
  display: inline-block;
  padding-left: 3pt;
  padding-right: 3pt;
}

footnoteLink {
  cursor: pointer;
  font-size: 9pt;
  line-height: 13pt;
  padding-left: 3pt;
  vertical-align: super;
}

table {
  border-collapse: collapse;
}

tableHead {
  border-bottom: 2pt solid black;
}

tableBodyCell,
tableHeadCell {
  padding: 13pt;
}

strongText {
  font-weight: bold;
}

emphasisedText {
  font-style: italic;
}

stronglyEmphasisedText {
  font-style: italic;
  font-weight: bold;
}

contentsList {
  list-style-type: none;

  contentsList {
    padding-top: 13pt;
    padding-left: 13pt;
  }
}

contentsItem {
  padding-left: 0;
  padding-bottom: 13pt;
  
  :last-child {
    padding-bottom: 0;
  }
}

contentsLink {
  cursor: pointer;
  font-size: 16pt;
  text-decoration: none;
}

footnotesList {
  border-top: 1pt solid black;
  padding-top: 13pt;
  padding-bottom: 0;
}

footnoteItem {
  font-size: 11pt;

  paragraph {
    font-size: 11pt;
    text-align: justify;
    line-height: 17pt;
    padding-left: 3pt;
  }
}

indexList {
  padding: 0;
  list-style-type: none;
}

indexHeading {
  font-size: 17pt;
  line-height: 1;
  font-weight: normal;
  text-transform: uppercase;

  padding-top: 13pt;
  padding-bottom: 6pt;

  :first-child {
    padding-top: 0;
  }
}

indexItem {
  padding: 0;
}

indexLink {
  cursor: pointer;
  padding-left: 3pt;
}

pageNumber {

  \`\`\`web
  
  left: 0;
  width: 100%;
  bottom: 0;
  display: block;
  position: absolute;
  font-size: 13pt;
  text-align: center;
  padding-bottom: 24pt;
  
  \`\`\`
  
}

error {
  colour: red;
  font-size: 13pt;
}

`;

export default defaultMarkdownStyle;
