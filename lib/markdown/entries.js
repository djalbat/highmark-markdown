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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRyaXBsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlxcXFwqXFxcXCpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtYXN0ZXJpc2tcIjogXCJeXFxcXCpcXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1YWRydXBsZS1oYXNoXCI6IFwiXiMjIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0cmlwbGUtaGFzaFwiOiBcIl4jIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtaGFzaFwiOiBcIl4jI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1oYXNoXCI6IFwiXiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYW55LWRhc2hlc1wiOiBcIl4tezMsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInR3by1kYXNoZXNcIjogXCJeLS1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzaW5nbGUtZGFzaFwiOiBcIl4tXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidmVydGljYWwtYmFyXCI6IFwiXlxcXFx8XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYmFja3RpY2tzXCI6IFwiXmBgYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrZWQtbGl0ZXJhbFwiOiBcIl5gKD86XFxcXFxcXFxbXlxcXFxzXXxbXmBcXFxcXFxcXFxcXFxyXFxcXG5dKSpgXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlsxLTldWzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZW1haWwtYWRkcmVzc1wiOiBcIl5bYS16MC05XFxcXC1fXSsoPzpcXFxcLlthLXowLTlcXFxcLV9dKykqQFthLXowLTlcXFxcLV9dKyg/OlxcXFwuW2EtejAtOVxcXFwtX10rKStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1cmxcIjogXCJeW2Etel0rOlxcXFwvXFxcXC9bYS16XFxcXC1dKyg/OlxcXFwuW2EtelxcXFwtXSspKyg/OlxcXFwvKD86W0EtWmEtejAtOVxcXFwtX118JS4uKSopKig/OlxcXFwuKD86W0EtWmEtejAtOVxcXFwtX118JS4uKSspP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInBhdGhcIjogXCJeW2EtejAtOVxcXFwtX10rKD86XFxcXC9bYS16MC05XFxcXC1fXSspKlxcXFwuW2EtejAtOVxcXFwtX10rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16XSsoPzotW2Etel0rKSpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ3b3JkXCI6IFwiXlxcXFx3K1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeXFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFw/fFxcXFwofFxcXFwpfCFcXFxcW3xcXFxcW1xcXFxefFxcXFxdOnxcXFxcW3xcXFxcXXxcXFxcXnxcXFxcL3xAfCx8IXw7fDp8YHwnfFxcXCJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1RUE7OztlQUFBOzs7QUFyRUEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxrQkFBa0I7SUFDcEI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGNBQWM7SUFDaEI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGdCQUFnQjtJQUNsQjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRSxPQUFPO0lBQ1Q7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=