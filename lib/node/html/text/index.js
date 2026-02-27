"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexTextHTMLNode;
    }
});
const _text = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text"));
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexTextHTMLNode extends _text.default {
    constructor(outerNode, parentNode, childNodes, domElement, wordOrPhrase){
        super(outerNode, parentNode, childNodes, domElement, wordOrPhrase);
        this.wordOrPhrase = wordOrPhrase;
    }
    getWordOrPhrase() {
        return this.wordOrPhrase;
    }
    getRuleName() {
        const ruleName = _markdown.INDEX_TEXT_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    text(context) {
        const text = this.wordOrPhrase; ///
        return text;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; //.
        return string;
    }
    static tagName = null;
    static className = null;
    static fromWordOrPhrase(wordOrPhrase) {
        const indexTextHTMLNode = _text.default.fromNothing(IndexTextHTMLNode, wordOrPhrase);
        return indexTextHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHRcIjtcblxuaW1wb3J0IHsgSU5ERVhfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4VGV4dEhUTUxOb2RlIGV4dGVuZHMgVGV4dEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCB3b3JkT3JQaHJhc2UpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHdvcmRPclBocmFzZSk7XG5cbiAgICB0aGlzLndvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZTtcbiAgfVxuXG4gIGdldFdvcmRPclBocmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy53b3JkT3JQaHJhc2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgdGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMud29yZE9yUGhyYXNlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy5cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Xb3JkT3JQaHJhc2Uod29yZE9yUGhyYXNlKSB7XG4gICAgY29uc3QgaW5kZXhUZXh0SFRNTE5vZGUgPSBUZXh0SFRNTE5vZGUuZnJvbU5vdGhpbmcoSW5kZXhUZXh0SFRNTE5vZGUsIHdvcmRPclBocmFzZSk7XG5cbiAgICByZXR1cm4gaW5kZXhUZXh0SFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleFRleHRIVE1MTm9kZSIsIlRleHRIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9URVhUX01BUktET1dOX1JVTEVfTkFNRSIsInRleHQiLCJjb250ZXh0IiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbVdvcmRPclBocmFzZSIsImluZGV4VGV4dEhUTUxOb2RlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkk7MEJBRXFCOzs7Ozs7QUFFL0IsTUFBTUEsMEJBQTBCQyxhQUFZO0lBQ3pELFlBQVlDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxDQUFFO1FBQ3ZFLEtBQUssQ0FBQ0osV0FBV0MsWUFBWUMsWUFBWUMsWUFBWUM7UUFFckQsSUFBSSxDQUFDQSxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0QsWUFBWTtJQUMxQjtJQUVBRSxjQUFjO1FBQ1osTUFBTUMsV0FBV0MsdUNBQTZCO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQUUsS0FBS0MsT0FBTyxFQUFFO1FBQ1osTUFBTUQsT0FBTyxJQUFJLENBQUNMLFlBQVksRUFBRSxHQUFHO1FBRW5DLE9BQU9LO0lBQ1Q7SUFFQUUsV0FBVztRQUNULE1BQU1KLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCTSxTQUFTTCxVQUFXLEdBQUc7UUFFN0IsT0FBT0s7SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLEtBQUs7SUFFeEIsT0FBT0MsaUJBQWlCWCxZQUFZLEVBQUU7UUFDcEMsTUFBTVksb0JBQW9CakIsYUFBWSxDQUFDa0IsV0FBVyxDQUFDbkIsbUJBQW1CTTtRQUV0RSxPQUFPWTtJQUNUO0FBQ0YifQ==