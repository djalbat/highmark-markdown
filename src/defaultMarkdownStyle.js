"use strict";

const defaultMarkdownStyle = `
colour: black;
display: grid;
padding: 24pt;
row-gap: 18pt;
position: relative;
min-height: 100%;
font-family: "Computer Modern Serif";
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
  font-weight: normal;
  font-family: "Computer Modern Sans";
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

orderedItem,
unorderedItem {
  margin: 6pt 0 6pt 0;
  margin-left: 13pt;

  :first-child {
    margin-top: 0;
  }
  
  :last-child {
    margin-bottom: 0;
  }
}

inlineListing {
  margin: 0;
}

paragraph,
orderedItem,
unorderedItem {
  text-align: justify;
}

blockListing,
inlineListing {
  colour: white;
  background-colour: black;
  font-family: "Computer Modern Typewriter";
}

blockListing {
  display: block;
  padding: 6pt 12pt;
  overflow-x: scroll;
}

inlineListing {
  display: inline-block;
  padding: 0 3pt 0 3pt;
}

footnoteLink {
  cursor: pointer;
  font-size: 9pt;
  margin-left: 3pt;
  line-height: 13pt;
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
    margin-left: 13pt;
  }
}

contentsItem {
  margin: 13pt;
  margin-left: 0;
}

contentsLink {
  cursor: pointer;
  font-size: 16pt;
  text-decoration: none;
}

footnotesList {
  align-self: end;
  border-top: 1pt solid black;
  padding-top: 13pt;
}

footnoteItem {
  font-size: 11pt;
  text-align: justify;
  line-height: 17pt;
  margin-left: 13pt;
}

indexList {
  margin: 0;
  list-style-type: none;
}

indexHeading {
  font-size: 17pt;
  line-height: 1;
  font-weight: normal;
  font-family: "Computer Modern Sans";
  text-transform: uppercase;
}

indexHeading {
  margin: 13pt 0 0 0;

  :first-child {
    margin-top: 0;
  }
}

indexItem {
  margin: 0;
}

indexLink {
  cursor: pointer;
  margin-left: 3pt;
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
