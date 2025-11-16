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
        "dashes": "^-{3,}"
    },
    {
        "bullet": "^\\*"
    },
    {
        "marker": "^[1-9][0-9]*\\."
    },
    {
        "number": "^[1-9][0-9]*"
    },
    {
        "colons": "^:::"
    },
    {
        "backticks": "^```"
    },
    {
        "vertical-bar": "^\\|"
    },
    {
        "backticked-literal": "^`(?:\\\\[^\\s]|[^`\\\\\\r\\n])*`"
    },
    {
        "email-address": "^[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)*@[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)+"
    },
    {
        "url": "^[a-z]+:\\/\\/(?:localhost|[a-z\\-]+(?:\\.[a-z\\-]+)+)(?::\\d{4})?(?:\\/(?:[A-Za-z0-9\\-_]|%..)*)*(?:\\.(?:[A-Za-z0-9\\-_]|%..)+)?(?:#[a-z\\-]+)?"
    },
    {
        "path": "^[a-z0-9\\-_]+(?:\\/[a-z0-9\\-_]+)*\\.[a-z0-9\\-_]+"
    },
    {
        "reference": "\\[\\^[a-z]+(?:-[a-z]+)*\\]:"
    },
    {
        "link": "\\[\\^[a-z]+(?:-[a-z]+)*\\]"
    },
    {
        "directive": "@[a-z]+([A-Z][a-z]+)*"
    },
    {
        "identifier": "[a-z]+(?:-[a-z]+)*"
    },
    {
        "word": "^[\\w\\-]+"
    },
    {
        "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|!\\[|\\[\\^|\\]:|\\[|\\]|\\^|\\/|,|!|;|:|`|'|\""
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImFzdGVyaXNrc1wiOiBcIl5cXFxcKnsyLDR9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaGFzaGVzXCI6IFwiXiN7MSw0fVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImRhc2hlc1wiOiBcIl4tezMsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJ1bGxldFwiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1hcmtlclwiOiBcIl5bMS05XVswLTldKlxcXFwuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlsxLTldWzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29sb25zXCI6IFwiXjo6OlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrc1wiOiBcIl5gYGBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ2ZXJ0aWNhbC1iYXJcIjogXCJeXFxcXHxcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJiYWNrdGlja2VkLWxpdGVyYWxcIjogXCJeYCg/OlxcXFxcXFxcW15cXFxcc118W15gXFxcXFxcXFxcXFxcclxcXFxuXSkqYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVtYWlsLWFkZHJlc3NcIjogXCJeW2EtejAtOVxcXFwtX10rKD86XFxcXC5bYS16MC05XFxcXC1fXSspKkBbYS16MC05XFxcXC1fXSsoPzpcXFxcLlthLXowLTlcXFxcLV9dKykrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidXJsXCI6IFwiXlthLXpdKzpcXFxcL1xcXFwvKD86bG9jYWxob3N0fFthLXpcXFxcLV0rKD86XFxcXC5bYS16XFxcXC1dKykrKSg/OjpcXFxcZHs0fSk/KD86XFxcXC8oPzpbQS1aYS16MC05XFxcXC1fXXwlLi4pKikqKD86XFxcXC4oPzpbQS1aYS16MC05XFxcXC1fXXwlLi4pKyk/KD86I1thLXpcXFxcLV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwYXRoXCI6IFwiXlthLXowLTlcXFxcLV9dKyg/OlxcXFwvW2EtejAtOVxcXFwtX10rKSpcXFxcLlthLXowLTlcXFxcLV9dK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJlZmVyZW5jZVwiOiBcIlxcXFxbXFxcXF5bYS16XSsoPzotW2Etel0rKSpcXFxcXTpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJsaW5rXCI6IFwiXFxcXFtcXFxcXlthLXpdKyg/Oi1bYS16XSspKlxcXFxdXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZGlyZWN0aXZlXCI6IFwiQFthLXpdKyhbQS1aXVthLXpdKykqXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIlthLXpdKyg/Oi1bYS16XSspKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIndvcmRcIjogXCJeW1xcXFx3XFxcXC1dK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeXFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFw/fFxcXFwofFxcXFwpfCFcXFxcW3xcXFxcW1xcXFxefFxcXFxdOnxcXFxcW3xcXFxcXXxcXFxcXnxcXFxcL3wsfCF8O3w6fGB8J3xcXFwiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvRUE7OztlQUFBOzs7QUFsRUEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7UUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtRQUNFLGlCQUFpQjtJQUNuQjtJQUNBO1FBQ0UsT0FBTztJQUNUO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLGNBQWM7SUFDaEI7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9