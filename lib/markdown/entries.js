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
        "path": "^(?:\\/(?:[A-Za-z_-]|%..)+)+\\/?"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRyaXBsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlxcXFwqXFxcXCpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtYXN0ZXJpc2tcIjogXCJeXFxcXCpcXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1YWRydXBsZS1oYXNoXCI6IFwiXiMjIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0cmlwbGUtaGFzaFwiOiBcIl4jIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtaGFzaFwiOiBcIl4jI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1oYXNoXCI6IFwiXiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYW55LWRhc2hlc1wiOiBcIl4tezQsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZldy1kYXNoZXNcIjogXCJeLXsyLDN9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2luZ2xlLWRhc2hcIjogXCJeLVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInZlcnRpY2FsLWJhclwiOiBcIl5cXFxcfFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrc1wiOiBcIl5gYGBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJiYWNrdGlja2VkLWxpdGVyYWxcIjogXCJeYCg/OlxcXFxcXFxcW15cXFxcc118W15gXFxcXFxcXFxcXFxcclxcXFxuXSkqYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5bMS05XVswLTldKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInBhdGhcIjogXCJeKD86XFxcXC8oPzpbQS1aYS16Xy1dfCUuLikrKStcXFxcLz9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb21haW5cIjogXCJeW2Etel0rKD86LVthLXpdKykqKD86XFxcXC5bYS16XSsoPzotW2Etel0rKSopK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNjaGVtZVwiOiBcIl5bYS16XSs6XFxcXC9cXFxcL1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJeW2Etel0rKD86LVthLXpdKykqXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwid29yZFwiOiBcIl5cXFxcdytcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXlxcXFwuXFxcXC5cXFxcLnxcXFxcLnxcXFxcP3xcXFxcKHxcXFxcKXwhXFxcXFt8XFxcXFtcXFxcXnxcXFxcXTp8XFxcXFt8XFxcXF18XFxcXF58XFxcXC98QHwsfCF8O3w6fGB8J3xcXFwiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUVBOzs7ZUFBQTs7O0FBckVBLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7UUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLGNBQWM7SUFDaEI7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9