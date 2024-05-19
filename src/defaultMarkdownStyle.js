"use strict";

const defaultMarkdownStyle = `
@media preview {
  padding: 12pt;
  min-height: 100%;
}
  
colour: black;
font-family: "Computer Modern Serif";
background-colour: white;

primaryHeading {
  font-size: 32pt;
  margin: 12pt 0 12pt 0;
}

secondaryHeading {
  font-size: 24pt;
  margin: 12pt 0 12pt 0;
}

tertiaryHeading {
  font-size: 16pt;
  margin: 12pt 0 12pt 0;
}

table,
paragraph,
orderedList,
unorderedList,
blockListing,
quaternaryHeading {
  font-size: 12pt;
  line-height: 15pt;
  margin: 12pt 0 12pt 0;
}

orderedListItem,
unorderedListItem {
  margin: 6pt 0 6pt 0;z
  margin-left: 12pt;
}

table,
paragraph,
orderedList,
unorderedList,
orderedListItem,
unorderedListItem,
blockListing,
primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  :first-child {
    margin-top: 0;
  }
  
  :last-child {
    margin-bottom: 0;
  }
}

primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  font-weight: bold;
}

blockListing,
inlineListing {
  colour: white;
  background-colour: black;
  font-family: "Computer Modern Typewriter";
}

blockListing {
  padding: 6pt;
  overflow-x: scroll;
}

inlineListing {
  display: inline-block;
  padding: 0 3pt 0 3pt;
  font-size: 12pt;
  line-height: 15pt;
}

table {
  border-collapse: collapse;
}

tableHead {
  border: 1pt solid black;
}

tableBodyCell,
tableHeadCell {
  padding: 12pt;
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

footnotesList {
  border-top: 1pt solid black;
  padding-top: 12pt;
}

footnoteItem {
  font-size: 9pt;
  line-height: 12pt;
  margin-left: 12pt;
  
  paragraph {
    margin: 0;
    font-size: 9pt;
    line-height: 12pt;
  }
}

link {
  font-size: 9pt;
  line-height: 12pt;
  margin-left: 3pt;
  vertical-align: super;
}

error {
  text-decoration: underline red;
}
`;

export default defaultMarkdownStyle;
