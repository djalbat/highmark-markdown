"use strict";

const defaultMarkdownStyle = `

\`\`\`otf
display: flex;
position: relative;
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
primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  padding-top: 13pt;
  padding-bottom: 13pt;

  :first-child {
    padding-top: 0;
  }
  
  :last-child {
    padding-bottom: 0;
  }
}

orderedItem,
unorderedItem {
  padding-top: 6pt;
  padding-bottom: 6pt;

  :first-child {
    padding-top: 0;
  }
  
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
    padding-left: 13pt;
  }
}

contentsItem {
  padding: 13pt;
  padding-left: 0;
}

contentsLink {
  cursor: pointer;
  font-size: 16pt;
  text-decoration: none;
}

footnotesList {
  margin-top: auto;
  border-top: 1pt solid black;
  padding-top: 13pt;
}

footnoteItem {
  font-size: 11pt;
  text-align: justify;
  line-height: 17pt;
  padding-left: 13pt;
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
}

indexHeading {
  padding-top: 0;
  padding-top: 13pt;

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
  left: 0;
  width: 100%;
  bottom: 0;
  display: block;
  position: absolute;
  font-size: 13pt;
  text-align: center;
  padding-bottom: 24pt;
}

error {
  colour: red;
  font-size: 13pt;
}
`;

export default defaultMarkdownStyle;
