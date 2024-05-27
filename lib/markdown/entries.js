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
        "asterisks": "^\\*{2,4}"
    },
    {
        "hashes": "^#{1,4}"
    },
    {
        "many-dashes": "^-{3,}"
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
        "url": "^[a-z]+:\\/\\/(?:localhost|[a-z\\-]+(?:\\.[a-z\\-]+)+)(?::\\d{4})?(?:\\/(?:[A-Za-z0-9\\-_]|%..)*)*(?:\\.(?:[A-Za-z0-9\\-_]|%..)+)?"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImFzdGVyaXNrc1wiOiBcIl5cXFxcKnsyLDR9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaGFzaGVzXCI6IFwiXiN7MSw0fVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1hbnktZGFzaGVzXCI6IFwiXi17Myx9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2luZ2xlLWRhc2hcIjogXCJeLVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInZlcnRpY2FsLWJhclwiOiBcIl5cXFxcfFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrc1wiOiBcIl5gYGBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJiYWNrdGlja2VkLWxpdGVyYWxcIjogXCJeYCg/OlxcXFxcXFxcW15cXFxcc118W15gXFxcXFxcXFxcXFxcclxcXFxuXSkqYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5bMS05XVswLTldKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVtYWlsLWFkZHJlc3NcIjogXCJeW2EtejAtOVxcXFwtX10rKD86XFxcXC5bYS16MC05XFxcXC1fXSspKkBbYS16MC05XFxcXC1fXSsoPzpcXFxcLlthLXowLTlcXFxcLV9dKykrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidXJsXCI6IFwiXlthLXpdKzpcXFxcL1xcXFwvKD86bG9jYWxob3N0fFthLXpcXFxcLV0rKD86XFxcXC5bYS16XFxcXC1dKykrKSg/OjpcXFxcZHs0fSk/KD86XFxcXC8oPzpbQS1aYS16MC05XFxcXC1fXXwlLi4pKikqKD86XFxcXC4oPzpbQS1aYS16MC05XFxcXC1fXXwlLi4pKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicGF0aFwiOiBcIl5bYS16MC05XFxcXC1fXSsoPzpcXFxcL1thLXowLTlcXFxcLV9dKykqXFxcXC5bYS16MC05XFxcXC1fXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiW2Etel0rKD86LVthLXpdKykqXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwid29yZFwiOiBcIl5cXFxcdytcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXlxcXFwuXFxcXC5cXFxcLnxcXFxcLnxcXFxcP3xcXFxcKHxcXFxcKXwhXFxcXFt8XFxcXFtcXFxcXnxcXFxcXTp8XFxcXFt8XFxcXF18XFxcXF58XFxcXC98QHwsfCF8O3w6fGB8J3xcXFwiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcURBOzs7ZUFBQTs7O0FBbkRBLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGdCQUFnQjtJQUNsQjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRSxPQUFPO0lBQ1Q7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=