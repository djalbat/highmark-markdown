"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ImageMarkdownNode extends _markdown.default {
    src(context) {
        const { pathToURL = null } = context, src = this.fromSecondLastChildNode((secondLastChildNode)=>{
            const pathMarkdownNode = secondLastChildNode, path = pathMarkdownNode.path(context), src = pathToURL === null ? path : pathToURL(path);
            return src;
        });
        return src;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(ImageMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgc3JjKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhdGhUb1VSTCA9IG51bGwgfSA9IGNvbnRleHQsXG4gICAgICAgICAgc3JjID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aE1hcmtkb3duTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoTWFya2Rvd25Ob2RlLnBhdGgoY29udGV4dCksIC8vL1xuICAgICAgICAgICAgICAgICAgc3JjID0gKHBhdGhUb1VSTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFRvVVJMKHBhdGgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNyYztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoSW1hZ2VNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkltYWdlTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwic3JjIiwiY29udGV4dCIsInBhdGhUb1VSTCIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsInBhdGhNYXJrZG93bk5vZGUiLCJwYXRoIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkk7Ozs7OztBQUVWLE1BQU1BLDBCQUEwQkMsaUJBQVk7SUFDekRDLElBQUlDLE9BQU8sRUFBRTtRQUNYLE1BQU0sRUFBRUMsWUFBWSxJQUFJLEVBQUUsR0FBR0QsU0FDdkJELE1BQU0sSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQyxDQUFDQztZQUNsQyxNQUFNQyxtQkFBbUJELHFCQUNuQkUsT0FBT0QsaUJBQWlCQyxJQUFJLENBQUNMLFVBQzdCRCxNQUFNLEFBQUNFLGNBQWMsT0FDWkksT0FDRUosVUFBVUk7WUFFM0IsT0FBT047UUFDVDtRQUVOLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLGlCQUFZLENBQUNRLDBDQUEwQyxDQUFDVCxtQkFBbUJVLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDL04ifQ==