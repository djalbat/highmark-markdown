"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FootnoteHTMLNode extends _html.default {
    getParagraphHTMLNode() {
        const paragraphHTMLNode = this.fromSecondChildNode((secondChildNode)=>{
            const paragraphHTMLNode = secondChildNode; ///
            return paragraphHTMLNode;
        });
        return paragraphHTMLNode;
    }
    matchIdentifier(identifier, context) {
        const identifierA = identifier; ///
        identifier = this.identifier(context);
        const identifierB = identifier, identifierMatches = identifierA === identifierB;
        return identifierMatches;
    }
    identifier(context) {
        const markdownNode = this.getMarkdownNode(), identifier = markdownNode.identifier(context);
        return identifier;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
    ///
    }
    asHTML(indent, context) {
        const html = _constants.EMPTY_STRING;
        return html;
    }
    asPlainText(context) {
        const plainText = _constants.EMPTY_STRING;
        return plainText;
    }
    static fromNothing() {
        return _html.default.fromNothing(FootnoteHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(FootnoteHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQge0VNUFRZX1NUUklOR30gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRQYXJhZ3JhcGhIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gIH1cblxuICBtYXRjaElkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXJBID0gaWRlbnRpZmllcjsgLy8vXG5cbiAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaWRlbnRpZmllckIgPSBpZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyTWF0Y2hlcyA9IChpZGVudGlmaWVyQSA9PT0gaWRlbnRpZmllckIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJNYXRjaGVzO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgLy8vXG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhGb290bm90ZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJwYXJhZ3JhcGhIVE1MTm9kZSIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJtYXRjaElkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwiY29udGV4dCIsImlkZW50aWZpZXJBIiwiaWRlbnRpZmllckIiLCJpZGVudGlmaWVyTWF0Y2hlcyIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwidW5tb3VudCIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImZyb21Ob3RoaW5nIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7Ozs2REFIQTsyQkFDTTs7Ozs7O0FBRVosTUFBTUEseUJBQXlCQyxhQUFRO0lBQ3BEQyx1QkFBdUI7UUFDckIsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQ0M7WUFDbEQsTUFBTUYsb0JBQW9CRSxpQkFBa0IsR0FBRztZQUUvQyxPQUFPRjtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBRyxnQkFBZ0JDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO1FBQ25DLE1BQU1DLGNBQWNGLFlBQVksR0FBRztRQUVuQ0EsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0M7UUFFN0IsTUFBTUUsY0FBY0gsWUFDZEksb0JBQXFCRixnQkFBZ0JDO1FBRTNDLE9BQU9DO0lBQ1Q7SUFFQUosV0FBV0MsT0FBTyxFQUFFO1FBQ2xCLE1BQU1JLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DTixhQUFhSyxhQUFhTCxVQUFVLENBQUNDO1FBRTNDLE9BQU9EO0lBQ1Q7SUFFQU8sTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFUixPQUFPLEVBQUU7UUFDbEQsT0FBT1E7SUFDVDtJQUVBQyxRQUFRRixnQkFBZ0IsRUFBRTtJQUN4QixHQUFHO0lBQ0w7SUFFQUcsT0FBT0MsTUFBTSxFQUFFWCxPQUFPLEVBQUU7UUFDdEIsTUFBTVksT0FBT0MsdUJBQVk7UUFFekIsT0FBT0Q7SUFDVDtJQUVBRSxZQUFZZCxPQUFPLEVBQUU7UUFDbkIsTUFBTWUsWUFBWUYsdUJBQVk7UUFFOUIsT0FBT0U7SUFDVDtJQUVBLE9BQU9DLGNBQWM7UUFBRSxPQUFPdkIsYUFBUSxDQUFDdUIsV0FBVyxDQUFDeEI7SUFBbUI7SUFFdEUsT0FBT3lCLGNBQWNDLFNBQVMsRUFBRTtRQUFFLE9BQU96QixhQUFRLENBQUN3QixhQUFhLENBQUN6QixrQkFBa0IwQjtJQUFZO0FBQ2hHIn0=