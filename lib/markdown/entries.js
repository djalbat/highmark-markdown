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
        "path": "^(?:\\/(?:[A-Za-z_\\-.]|%..)+)+\\/?"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRyaXBsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlxcXFwqXFxcXCpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtYXN0ZXJpc2tcIjogXCJeXFxcXCpcXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1hc3Rlcmlza1wiOiBcIl5cXFxcKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1YWRydXBsZS1oYXNoXCI6IFwiXiMjIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0cmlwbGUtaGFzaFwiOiBcIl4jIyNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkb3VibGUtaGFzaFwiOiBcIl4jI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNpbmdsZS1oYXNoXCI6IFwiXiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYW55LWRhc2hlc1wiOiBcIl4tezQsfVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZldy1kYXNoZXNcIjogXCJeLXsyLDN9XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2luZ2xlLWRhc2hcIjogXCJeLVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInZlcnRpY2FsLWJhclwiOiBcIl5cXFxcfFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJhY2t0aWNrc1wiOiBcIl5gYGBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJiYWNrdGlja2VkLWxpdGVyYWxcIjogXCJeYCg/OlxcXFxcXFxcW15cXFxcc118W15gXFxcXFxcXFxcXFxcclxcXFxuXSkqYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5bMS05XVswLTldKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInBhdGhcIjogXCJeKD86XFxcXC8oPzpbQS1aYS16X1xcXFwtLl18JS4uKSspK1xcXFwvP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImRvbWFpblwiOiBcIl5bYS16XSsoPzotW2Etel0rKSooPzpcXFxcLlthLXpdKyg/Oi1bYS16XSspKikrXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2NoZW1lXCI6IFwiXlthLXpdKzpcXFxcL1xcXFwvXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16XSsoPzotW2Etel0rKSpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ3b3JkXCI6IFwiXlxcXFx3K1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeXFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFw/fFxcXFwofFxcXFwpfCFcXFxcW3xcXFxcW1xcXFxefFxcXFxdOnxcXFxcW3xcXFxcXXxcXFxcXnxcXFxcL3xAfCx8IXw7fDp8YHwnfFxcXCJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1RUE7OztlQUFBOzs7QUFyRUEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxrQkFBa0I7SUFDcEI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGNBQWM7SUFDaEI7SUFDQTtRQUNFLGVBQWU7SUFDakI7SUFDQTtRQUNFLGdCQUFnQjtJQUNsQjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=