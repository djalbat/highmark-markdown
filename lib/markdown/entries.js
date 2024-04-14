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
var entries = [
    {
        "escaped": "^\\\\[^\\s]"
    },
    {
        "triple-asterisk": "^\\*\\*\\*"
    },
    {
        "double-asterisk": "^\\*\\*"
    },
    {
        "single-asterisk": "^\\*"
    },
    {
        "quadruple-hash": "^####"
    },
    {
        "triple-hash": "^###"
    },
    {
        "double-hash": "^##"
    },
    {
        "single-hash": "^#"
    },
    {
        "many-dashes": "^-{3,}"
    },
    {
        "two-dashes": "^--"
    },
    {
        "single-dash": "^-"
    },
    {
        "vertical-bar": "^\\|"
    },
    {
        "backticks": "^```"
    },
    {
        "backticked-literal": "^`(?:\\\\[^\\s]|[^`\\\\\\r\\n])*`"
    },
    {
        "number": "^[1-9][0-9]*"
    },
    {
        "email-address": "^[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)*@[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)+"
    },
    {
        "url": "^[a-z]+:\\/\\/[a-z\\-]+(?:\\.[a-z\\-]+)+(?:\\/(?:[A-Za-z0-9\\-_]|%..)*)*(?:\\.(?:[A-Za-z0-9\\-_]|%..)+)?"
    },
    {
        "path": "^[a-z0-9\\-_]+(?:\\/[a-z0-9\\-_]+)*\\.[a-z0-9\\-_]+"
    },
    {
        "identifier": "[a-z]+(?:-[a-z]+)*"
    },
    {
        "word": "^\\w+"
    },
    {
        "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|!\\[|\\[\\^|\\]:|\\[|\\]|\\^|\\/|@|,|!|;|:|`|'|\""
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRyaXBsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlxcXFwqXFxcXCpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtYXN0ZXJpc2tcIjogXCJeXFxcXCpcXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1YWRydXBsZS1oYXNoXCI6IFwiXiMjIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0cmlwbGUtaGFzaFwiOiBcIl4jIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtaGFzaFwiOiBcIl4jI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1oYXNoXCI6IFwiXiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYW55LWRhc2hlc1wiOiBcIl4tezMsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInR3by1kYXNoZXNcIjogXCJeLS1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzaW5nbGUtZGFzaFwiOiBcIl4tXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidmVydGljYWwtYmFyXCI6IFwiXlxcXFx8XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYmFja3RpY2tzXCI6IFwiXmBgYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrZWQtbGl0ZXJhbFwiOiBcIl5gKD86XFxcXFxcXFxbXlxcXFxzXXxbXmBcXFxcXFxcXFxcXFxyXFxcXG5dKSpgXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlsxLTldWzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZW1haWwtYWRkcmVzc1wiOiBcIl5bYS16MC05XFxcXC1fXSsoPzpcXFxcLlthLXowLTlcXFxcLV9dKykqQFthLXowLTlcXFxcLV9dKyg/OlxcXFwuW2EtejAtOVxcXFwtX10rKStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1cmxcIjogXCJeW2Etel0rOlxcXFwvXFxcXC9bYS16XFxcXC1dKyg/OlxcXFwuW2EtelxcXFwtXSspKyg/OlxcXFwvKD86W0EtWmEtejAtOVxcXFwtX118JS4uKSopKig/OlxcXFwuKD86W0EtWmEtejAtOVxcXFwtX118JS4uKSspP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInBhdGhcIjogXCJeW2EtejAtOVxcXFwtX10rKD86XFxcXC9bYS16MC05XFxcXC1fXSspKlxcXFwuW2EtejAtOVxcXFwtX10rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIlthLXpdKyg/Oi1bYS16XSspKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIndvcmRcIjogXCJeXFxcXHcrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl5cXFxcLlxcXFwuXFxcXC58XFxcXC58XFxcXD98XFxcXCh8XFxcXCl8IVxcXFxbfFxcXFxbXFxcXF58XFxcXF06fFxcXFxbfFxcXFxdfFxcXFxefFxcXFwvfEB8LHwhfDt8OnxgfCd8XFxcIlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVFQTs7O2VBQUE7OztBQXJFQSxJQUFNQSxVQUFVO0lBQ2Q7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLGtCQUFrQjtJQUNwQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLHNCQUFzQjtJQUN4QjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFLE9BQU87SUFDVDtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUEifQ==