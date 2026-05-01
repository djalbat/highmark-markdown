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
const entries = [
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
        "primary-identifier": "^[a-z0-9]+(?:-[a-z0-9]+)*"
    },
    {
        "secondary-identifier": "^[A-Z][a-zA-Z0-9]*"
    },
    {
        "xml-delimiter": "^(?:=|<\\/|\\/>|<|>|\\/)"
    },
    {
        "special": "^(?:\\(|\\)|!\\[|\\[|\\])"
    },
    {
        "unassigned": "^[^\\s<>]+"
    }
];
const _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImFzdGVyaXNrc1wiOiBcIl5cXFxcKnsyLDR9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaGFzaGVzXCI6IFwiXiN7MSw0fVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImRhc2hlc1wiOiBcIl4tezMsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJ1bGxldFwiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1hcmtlclwiOiBcIl5bMS05XVswLTldKlxcXFwuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlsxLTldWzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29sb25zXCI6IFwiXjo6OlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrc1wiOiBcIl5gYGBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ2ZXJ0aWNhbC1iYXJcIjogXCJeXFxcXHxcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJiYWNrdGlja2VkLWxpdGVyYWxcIjogXCJeYCg/OlxcXFxcXFxcW15cXFxcc118W15gXFxcXFxcXFxcXFxcclxcXFxuXSkqYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVtYWlsLWFkZHJlc3NcIjogXCJeW2EtejAtOVxcXFwtX10rKD86XFxcXC5bYS16MC05XFxcXC1fXSspKkBbYS16MC05XFxcXC1fXSsoPzpcXFxcLlthLXowLTlcXFxcLV9dKykrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidXJsXCI6IFwiXlthLXpdKzpcXFxcL1xcXFwvKD86bG9jYWxob3N0fFthLXpcXFxcLV0rKD86XFxcXC5bYS16XFxcXC1dKykrKSg/OjpcXFxcZHs0fSk/KD86XFxcXC8oPzpbQS1aYS16MC05XFxcXC1fXXwlLi4pKikqKD86XFxcXC4oPzpbQS1aYS16MC05XFxcXC1fXXwlLi4pKyk/KD86I1thLXpcXFxcLV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwYXRoXCI6IFwiXlthLXowLTlcXFxcLV9dKyg/OlxcXFwvW2EtejAtOVxcXFwtX10rKSpcXFxcLlthLXowLTlcXFxcLV9dK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJlZmVyZW5jZVwiOiBcIlxcXFxbXFxcXF5bYS16XSsoPzotW2Etel0rKSpcXFxcXTpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJsaW5rXCI6IFwiXFxcXFtcXFxcXlthLXpdKyg/Oi1bYS16XSspKlxcXFxdXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZGlyZWN0aXZlXCI6IFwiQFthLXpdKyhbQS1aXVthLXpdKykqXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicHJpbWFyeS1pZGVudGlmaWVyXCI6IFwiXlthLXowLTldKyg/Oi1bYS16MC05XSspKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNlY29uZGFyeS1pZGVudGlmaWVyXCI6IFwiXltBLVpdW2EtekEtWjAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwieG1sLWRlbGltaXRlclwiOiBcIl4oPzo9fDxcXFxcL3xcXFxcLz58PHw+fFxcXFwvKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86XFxcXCh8XFxcXCl8IVxcXFxbfFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcczw+XStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcblxyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUVBOzs7ZUFBQTs7O0FBckVBLE1BQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLGdCQUFnQjtJQUNsQjtJQUNBO1FBQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7UUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFLE9BQU87SUFDVDtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtRQUNFLHdCQUF3QjtJQUMxQjtJQUNBO1FBQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtNQUVELFdBQWVBIn0=