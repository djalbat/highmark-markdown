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
var defaultMarkdownStyle = '\n@media preview {\n  padding: 12pt;\n  min-height: 100%;\n}\n  \ncolour: black;\nfont-family: "Computer Modern Serif";\nbackground-colour: white;\n\nprimaryHeading {\n  font-size: 32pt;\n  margin: 12pt 0 12pt 0;\n}\n\nsecondaryHeading {\n  font-size: 24pt;\n  margin: 12pt 0 12pt 0;\n}\n\ntertiaryHeading {\n  font-size: 16pt;\n  margin: 12pt 0 12pt 0;\n}\n\ntable,\nparagraph,\norderedList,\nunorderedList,\nblockListing,\nquaternaryHeading {\n  font-size: 12pt;\n  line-height: 15pt;\n  margin: 12pt 0 12pt 0;\n}\n\norderedListItem,\nunorderedListItem {\n  margin: 6pt 0 6pt 0;z\n  margin-left: 12pt;\n}\n\ntable,\nparagraph,\norderedList,\nunorderedList,\norderedListItem,\nunorderedListItem,\nblockListing,\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  :first-child {\n    margin-top: 0;\n  }\n  \n  :last-child {\n    margin-bottom: 0;\n  }\n}\n\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  font-weight: bold;\n}\n\nblockListing,\ninlineListing {\n  colour: white;\n  background-colour: black;\n  font-family: "Computer Modern Typewriter";\n}\n\nblockListing {\n  padding: 6pt;\n  overflow-x: scroll;\n}\n\ninlineListing {\n  display: inline-block;\n  padding: 0 3pt 0 3pt;\n  font-size: 12pt;\n  line-height: 15pt;\n}\n\ntable {\n  border-collapsed: collapse;\n}\n\ntableHead {\n  border: 1pt solid black;\n}\n\ntableBodyCell,\ntableHeadCell {\n  padding: 12pt;\n}\n\nstrongText {\n  font-weight: bold;\n}\n\nemphasisedText {\n  font-style: italic;\n}\n\nstronglyEmphasisedText {\n  font-style: italic;\n  font-weight: bold;\n}\n\nfootnotesList {\n  border-top: 1pt solid black;\n  padding-top: 12pt;\n}\n\nfootnoteItem {\n  font-size: 9pt;\n  line-height: 12pt;\n  margin-left: 12pt;\n  \n  paragraph {\n    margin: 0;\n    font-size: 9pt;\n    line-height: 12pt;\n  }\n}\n\nlink {\n  font-size: 9pt;\n  line-height: 12pt;\n  margin-left: 3pt;\n  vertical-align: super;\n}\n\nerror {\n  text-decoration: underline red;\n}\n';
var _default = defaultMarkdownStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0TWFya2Rvd25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZGVmYXVsdE1hcmtkb3duU3R5bGUgPSBgXG5AbWVkaWEgcHJldmlldyB7XG4gIHBhZGRpbmc6IDEycHQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4gIFxuY29sb3VyOiBibGFjaztcbmZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTZXJpZlwiO1xuYmFja2dyb3VuZC1jb2xvdXI6IHdoaXRlO1xuXG5wcmltYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMzJwdDtcbiAgbWFyZ2luOiAxMnB0IDAgMTJwdCAwO1xufVxuXG5zZWNvbmRhcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB0O1xuICBtYXJnaW46IDEycHQgMCAxMnB0IDA7XG59XG5cbnRlcnRpYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgbWFyZ2luOiAxMnB0IDAgMTJwdCAwO1xufVxuXG50YWJsZSxcbnBhcmFncmFwaCxcbm9yZGVyZWRMaXN0LFxudW5vcmRlcmVkTGlzdCxcbmJsb2NrTGlzdGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBsaW5lLWhlaWdodDogMTVwdDtcbiAgbWFyZ2luOiAxMnB0IDAgMTJwdCAwO1xufVxuXG5vcmRlcmVkTGlzdEl0ZW0sXG51bm9yZGVyZWRMaXN0SXRlbSB7XG4gIG1hcmdpbjogNnB0IDAgNnB0IDA7elxuICBtYXJnaW4tbGVmdDogMTJwdDtcbn1cblxudGFibGUsXG5wYXJhZ3JhcGgsXG5vcmRlcmVkTGlzdCxcbnVub3JkZXJlZExpc3QsXG5vcmRlcmVkTGlzdEl0ZW0sXG51bm9yZGVyZWRMaXN0SXRlbSxcbmJsb2NrTGlzdGluZyxcbnByaW1hcnlIZWFkaW5nLFxuc2Vjb25kYXJ5SGVhZGluZyxcbnRlcnRpYXJ5SGVhZGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG5wcmltYXJ5SGVhZGluZyxcbnNlY29uZGFyeUhlYWRpbmcsXG50ZXJ0aWFyeUhlYWRpbmcsXG5xdWF0ZXJuYXJ5SGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5ibG9ja0xpc3RpbmcsXG5pbmxpbmVMaXN0aW5nIHtcbiAgY29sb3VyOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvdXI6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlclwiO1xufVxuXG5ibG9ja0xpc3Rpbmcge1xuICBwYWRkaW5nOiA2cHQ7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuaW5saW5lTGlzdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAzcHQgMCAzcHQ7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbGluZS1oZWlnaHQ6IDE1cHQ7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlZDogY29sbGFwc2U7XG59XG5cbnRhYmxlSGVhZCB7XG4gIGJvcmRlcjogMXB0IHNvbGlkIGJsYWNrO1xufVxuXG50YWJsZUJvZHlDZWxsLFxudGFibGVIZWFkQ2VsbCB7XG4gIHBhZGRpbmc6IDEycHQ7XG59XG5cbnN0cm9uZ1RleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZW1waGFzaXNlZFRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnN0cm9uZ2x5RW1waGFzaXNlZFRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5mb290bm90ZXNMaXN0IHtcbiAgYm9yZGVyLXRvcDogMXB0IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLXRvcDogMTJwdDtcbn1cblxuZm9vdG5vdGVJdGVtIHtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB0O1xuICBtYXJnaW4tbGVmdDogMTJwdDtcbiAgXG4gIHBhcmFncmFwaCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB0O1xuICB9XG59XG5cbmxpbmsge1xuICBmb250LXNpemU6IDlwdDtcbiAgbGluZS1oZWlnaHQ6IDEycHQ7XG4gIG1hcmdpbi1sZWZ0OiAzcHQ7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuZXJyb3Ige1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZWQ7XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TWFya2Rvd25TdHlsZTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0TWFya2Rvd25TdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUpBOzs7ZUFBQTs7O0FBL0lBLElBQU1BLHVCQUF3QjtJQStJOUIsV0FBZUEifQ==