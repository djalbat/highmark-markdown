"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const defaultMarkdownStyle = `

\`\`\`web
width: 600pt;
display: flex;
position: relative;
min-height: 848pt;
flex-shrink: 0;
flex-direction: column;
justify-content: flex-start;
\`\`\`

colour: black;
font-family: "STIXTwoText";
padding-top: 56pt;
padding-left: 56pt;
padding-right: 56pt;
padding-bottom: 88pt;
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
  text-align: left;
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
quaternaryHeading,
container.listing {
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
  padding-bottom: 4pt;

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
  padding-left: 12pt;
  padding-right: 12pt;
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
  padding-left: 0;
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
const _default = defaultMarkdownStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWZhdWx0TWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGRlZmF1bHRNYXJrZG93blN0eWxlID0gYFxuXG5cXGBcXGBcXGB3ZWJcbndpZHRoOiA2MDBwdDtcbmRpc3BsYXk6IGZsZXg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5taW4taGVpZ2h0OiA4NDhwdDtcbmZsZXgtc2hyaW5rOiAwO1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxcYFxcYFxcYFxuXG5jb2xvdXI6IGJsYWNrO1xuZm9udC1mYW1pbHk6IFwiU1RJWFR3b1RleHRcIjtcbnBhZGRpbmctdG9wOiA1NnB0O1xucGFkZGluZy1sZWZ0OiA1NnB0O1xucGFkZGluZy1yaWdodDogNTZwdDtcbnBhZGRpbmctYm90dG9tOiA4OHB0O1xuYmFja2dyb3VuZC1jb2xvdXI6IHdoaXRlO1xuXG5wcmltYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMzJwdDtcbn1cblxuc2Vjb25kYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRwdDtcbn1cblxudGVydGlhcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxN3B0O1xufVxuXG5xdWF0ZXJuYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbn1cblxucHJpbWFyeUhlYWRpbmcsXG5zZWNvbmRhcnlIZWFkaW5nLFxudGVydGlhcnlIZWFkaW5nLFxucXVhdGVybmFyeUhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA4cHRcbiAgXG4gIDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbn1cblxucGFyYWdyYXBoLFxuYmxvY2tMaXN0aW5nLFxuaW5saW5lTGlzdGluZyxcbnRhYmxlSGVhZENlbGwsXG50YWJsZUJvZHlDZWxsLFxub3JkZXJlZEl0ZW0sXG51bm9yZGVyZWRJdGVtIHtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBsaW5lLWhlaWdodDogMjBwdDtcbn1cblxucGFyYWdyYXBoLFxub3JkZXJlZExpc3QsXG51bm9yZGVyZWRMaXN0LFxucHJpbWFyeUhlYWRpbmcsXG5zZWNvbmRhcnlIZWFkaW5nLFxudGVydGlhcnlIZWFkaW5nLFxucXVhdGVybmFyeUhlYWRpbmcsXG5jb250YWluZXIubGlzdGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB0O1xuXG4gIDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuXG5vcmRlcmVkTGlzdCxcbnVub3JkZXJlZExpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHQ7XG59XG5cbm9yZGVyZWRJdGVtLFxudW5vcmRlcmVkSXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHQ7XG5cbiAgOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG5cbnBhcmFncmFwaCxcbm9yZGVyZWRJdGVtLFxudW5vcmRlcmVkSXRlbSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmJsb2NrTGlzdGluZyxcbmlubGluZUxpc3Rpbmcge1xuICBjb2xvdXI6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YVwiO1xuICBiYWNrZ3JvdW5kLWNvbG91cjogYmxhY2s7XG59XG5cbmJsb2NrTGlzdGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHBhZGRpbmctdG9wOiA2cHQ7XG4gIHBhZGRpbmctbGVmdDogMTJwdDtcbiAgcGFkZGluZy1yaWdodDogMTJwdDtcbiAgcGFkZGluZy1ib3R0b206IDZwdDtcbn1cblxuaW5saW5lTGlzdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAzcHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDNwdDtcbn1cblxuZm9vdG5vdGVMaW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDlwdDtcbiAgbGluZS1oZWlnaHQ6IDEzcHQ7XG4gIHBhZGRpbmctbGVmdDogM3B0O1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGVIZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB0IHNvbGlkIGJsYWNrO1xufVxuXG50YWJsZUJvZHlDZWxsLFxudGFibGVIZWFkQ2VsbCB7XG4gIHBhZGRpbmc6IDEzcHQ7XG59XG5cbnN0cm9uZ1RleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZW1waGFzaXNlZFRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnN0cm9uZ2x5RW1waGFzaXNlZFRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5jb250ZW50c0xpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICBjb250ZW50c0xpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAxM3B0O1xuICAgIHBhZGRpbmctbGVmdDogMTNwdDtcbiAgfVxufVxuXG5jb250ZW50c0l0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B0O1xuICBcbiAgOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG5cbmNvbnRlbnRzTGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmZvb3Rub3Rlc0xpc3Qge1xuICBib3JkZXItdG9wOiAxcHQgc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiAxM3B0O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuZm9vdG5vdGVJdGVtIHtcbiAgZm9udC1zaXplOiAxMXB0O1xuXG4gIHBhcmFncmFwaCB7XG4gICAgZm9udC1zaXplOiAxMXB0O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHQ7XG4gIH1cbn1cblxuaW5kZXhMaXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5pbmRleEhlYWRpbmcge1xuICBmb250LXNpemU6IDE3cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIHBhZGRpbmctdG9wOiAxM3B0O1xuICBwYWRkaW5nLWJvdHRvbTogNnB0O1xuXG4gIDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbn1cblxuaW5kZXhJdGVtIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW5kZXhMaW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNwdDtcbn1cblxucGFnZU51bWJlciB7XG5cbiAgXFxgXFxgXFxgd2ViXG4gIFxuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDI0cHQ7XG4gIFxuICBcXGBcXGBcXGBcbiAgXG59XG5cbmVycm9yIHtcbiAgY29sb3VyOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbn1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE1hcmtkb3duU3R5bGU7XG4iXSwibmFtZXMiOlsiZGVmYXVsdE1hcmtkb3duU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdQQTs7O2VBQUE7OztBQXRQQSxNQUFNQSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9QOUIsQ0FBQztNQUVELFdBQWVBIn0=