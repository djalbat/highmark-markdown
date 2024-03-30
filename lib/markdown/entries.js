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
        "many-dashes": "^-{4,}"
    },
    {
        "few-dashes": "^-{2,3}"
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
        "path": "^\\/(?:[A-Za-z\\-]+\\/)*(?:[A-Za-z\\-]+(?:\\.[A-Za-z\\-]+)?)?"
    },
    {
        "domain": "^[a-z]+(?:-[a-z]+)*(?:\\.[a-z]+(?:-[a-z]+)*)+"
    },
    {
        "scheme": "^[a-z]+:\\/\\/"
    },
    {
        "identifier": "^[a-z]+(?:-[a-z]+)*"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRyaXBsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlxcXFwqXFxcXCpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtYXN0ZXJpc2tcIjogXCJeXFxcXCpcXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1YWRydXBsZS1oYXNoXCI6IFwiXiMjIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0cmlwbGUtaGFzaFwiOiBcIl4jIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtaGFzaFwiOiBcIl4jI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1oYXNoXCI6IFwiXiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYW55LWRhc2hlc1wiOiBcIl4tezQsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZldy1kYXNoZXNcIjogXCJeLXsyLDN9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2luZ2xlLWRhc2hcIjogXCJeLVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInZlcnRpY2FsLWJhclwiOiBcIl5cXFxcfFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrc1wiOiBcIl5gYGBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJiYWNrdGlja2VkLWxpdGVyYWxcIjogXCJeYCg/OlxcXFxcXFxcW15cXFxcc118W15gXFxcXFxcXFxcXFxcclxcXFxuXSkqYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5bMS05XVswLTldKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInBhdGhcIjogXCJeXFxcXC8oPzpbQS1aYS16XFxcXC1dK1xcXFwvKSooPzpbQS1aYS16XFxcXC1dKyg/OlxcXFwuW0EtWmEtelxcXFwtXSspPyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZG9tYWluXCI6IFwiXlthLXpdKyg/Oi1bYS16XSspKig/OlxcXFwuW2Etel0rKD86LVthLXpdKykqKStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzY2hlbWVcIjogXCJeW2Etel0rOlxcXFwvXFxcXC9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXlthLXpdKyg/Oi1bYS16XSspKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIndvcmRcIjogXCJeXFxcXHcrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl5cXFxcLlxcXFwuXFxcXC58XFxcXC58XFxcXD98XFxcXCh8XFxcXCl8IVxcXFxbfFxcXFxbXFxcXF58XFxcXF06fFxcXFxbfFxcXFxdfFxcXFxefFxcXFwvfEB8LHwhfDt8OnxgfCd8XFxcIlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVFQTs7O2VBQUE7OztBQXJFQSxJQUFNQSxVQUFVO0lBQ2Q7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLGtCQUFrQjtJQUNwQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLHNCQUFzQjtJQUN4QjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUEifQ==