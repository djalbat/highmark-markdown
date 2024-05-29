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
        "url": "^[a-z]+:\\/\\/(?:localhost|[a-z\\-]+(?:\\.[a-z\\-]+)+)(?::\\d{4})?(?:\\/(?:[A-Za-z0-9\\-_]|%..)*)*(?:\\.(?:[A-Za-z0-9\\-_]|%..)+)?"
    },
    {
        "path": "^[a-z0-9\\-_]+(?:\\/[a-z0-9\\-_]+)*\\.[a-z0-9\\-_]+"
    },
    {
        "reference": "\\[\\^[a-z]+(?:-[a-z]+)*\\]:"
    },
    {
        "directive": "@[a-z]+"
    },
    {
        "identifier": "[a-z]+(?:-[a-z]+)*"
    },
    {
        "word": "^\\w+"
    },
    {
        "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|!\\[|\\[\\^|\\]:|\\[|\\]|\\^|\\/|,|!|;|:|`|'|\""
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImFzdGVyaXNrc1wiOiBcIl5cXFxcKnsyLDR9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaGFzaGVzXCI6IFwiXiN7MSw0fVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImRhc2hlc1wiOiBcIl4tezMsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJ1bGxldFwiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1hcmtlclwiOiBcIl5bMS05XVswLTldKlxcXFwuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlsxLTldWzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYmFja3RpY2tzXCI6IFwiXmBgYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInZlcnRpY2FsLWJhclwiOiBcIl5cXFxcfFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrZWQtbGl0ZXJhbFwiOiBcIl5gKD86XFxcXFxcXFxbXlxcXFxzXXxbXmBcXFxcXFxcXFxcXFxyXFxcXG5dKSpgXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZW1haWwtYWRkcmVzc1wiOiBcIl5bYS16MC05XFxcXC1fXSsoPzpcXFxcLlthLXowLTlcXFxcLV9dKykqQFthLXowLTlcXFxcLV9dKyg/OlxcXFwuW2EtejAtOVxcXFwtX10rKStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1cmxcIjogXCJeW2Etel0rOlxcXFwvXFxcXC8oPzpsb2NhbGhvc3R8W2EtelxcXFwtXSsoPzpcXFxcLlthLXpcXFxcLV0rKSspKD86OlxcXFxkezR9KT8oPzpcXFxcLyg/OltBLVphLXowLTlcXFxcLV9dfCUuLikqKSooPzpcXFxcLig/OltBLVphLXowLTlcXFxcLV9dfCUuLikrKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwYXRoXCI6IFwiXlthLXowLTlcXFxcLV9dKyg/OlxcXFwvW2EtejAtOVxcXFwtX10rKSpcXFxcLlthLXowLTlcXFxcLV9dK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJlZmVyZW5jZVwiOiBcIlxcXFxbXFxcXF5bYS16XSsoPzotW2Etel0rKSpcXFxcXTpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkaXJlY3RpdmVcIjogXCJAW2Etel0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIlthLXpdKyg/Oi1bYS16XSspKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIndvcmRcIjogXCJeXFxcXHcrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl5cXFxcLlxcXFwuXFxcXC58XFxcXC58XFxcXD98XFxcXCh8XFxcXCl8IVxcXFxbfFxcXFxbXFxcXF58XFxcXF06fFxcXFxbfFxcXFxdfFxcXFxefFxcXFwvfCx8IXw7fDp8YHwnfFxcXCJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7QUE1REEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLGdCQUFnQjtJQUNsQjtJQUNBO1FBQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7UUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFLE9BQU87SUFDVDtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=