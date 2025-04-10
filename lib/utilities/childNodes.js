"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    childNodesAsDOMElements: function() {
        return childNodesAsDOMElements;
    },
    childNodesAsHTML: function() {
        return childNodesAsHTML;
    },
    childNodesAsPlainText: function() {
        return childNodesAsPlainText;
    }
});
var _necessary = require("necessary");
var _plainText = /*#__PURE__*/ _interop_require_default(require("../node/html/plainText"));
var _constants = require("../constants");
var _plainText1 = require("../utilities/plainText");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var clear = _necessary.arrayUtilities.clear;
function childNodesAsHTML(htmlNode, context) {
    var html;
    var htmls = [], plainTextHTMLNodes = [];
    htmlNode.forEachChildNode(function(childNode) {
        var childNodePlainTextHTMLNode = _instanceof(childNode, _plainText.default);
        if (childNodePlainTextHTMLNode) {
            var plainTextHTMLNode = childNode; ///
            plainTextHTMLNodes.push(plainTextHTMLNode);
        } else {
            var content = (0, _plainText1.contentFromPlainTextHTMLNodes)(plainTextHTMLNodes, htmlNode, context);
            clear(plainTextHTMLNodes);
            if (content !== null) {
                var html = content; ///
                htmls.push(html);
            }
            var indent = null, html1 = childNode.asHTML(indent, context);
            if (html1 !== null) {
                htmls.push(html1);
            }
        }
    });
    var content = (0, _plainText1.contentFromPlainTextHTMLNodes)(plainTextHTMLNodes, htmlNode, context);
    clear(plainTextHTMLNodes);
    if (content !== null) {
        var html1 = content; ///
        htmls.push(html1);
    }
    html = htmls.join(_constants.EMPTY_STRING);
    return html;
}
function childNodesAsPlainText(htmlNode, context) {
    var plainText;
    var plainTexts = [], plainTextHTMLNodes = [];
    htmlNode.forEachChildNode(function(childNode) {
        var childNodePlainTextHTMLNode = _instanceof(childNode, _plainText.default);
        if (childNodePlainTextHTMLNode) {
            var plainTextHTMLNode = childNode; ///
            plainTextHTMLNodes.push(plainTextHTMLNode);
        } else {
            var content = (0, _plainText1.contentFromPlainTextHTMLNodes)(plainTextHTMLNodes, htmlNode, context);
            clear(plainTextHTMLNodes);
            if (content !== null) {
                var plainText = content; ///
                plainTexts.push(plainText);
            }
            var plainText1 = childNode.asPlainText(context);
            if (plainText1 !== null) {
                plainTexts.push(plainText1);
            }
        }
    });
    var content = (0, _plainText1.contentFromPlainTextHTMLNodes)(plainTextHTMLNodes, htmlNode, context);
    clear(plainTextHTMLNodes);
    if (content !== null) {
        var plainText1 = content; ///
        plainTexts.push(plainText1);
    }
    plainText = plainTexts.join(_constants.EMPTY_STRING);
    return plainText;
}
function childNodesAsDOMElements(htmlNode, context) {
    var domElements = [], plainTextHTMLNodes = [];
    htmlNode.forEachChildNode(function(childNode) {
        var childNodePlainTextHTMLNode = _instanceof(childNode, _plainText.default);
        if (childNodePlainTextHTMLNode) {
            var plainTextHTMLNode = childNode; ///
            plainTextHTMLNodes.push(plainTextHTMLNode);
        } else {
            var content = (0, _plainText1.contentFromPlainTextHTMLNodes)(plainTextHTMLNodes, htmlNode, context);
            clear(plainTextHTMLNodes);
            if (content !== null) {
                var textNode = document.createTextNode(content), domElement = textNode; ///
                domElements.push(domElement);
            }
            var domElement1 = childNode.createDOMElement(context);
            domElements.push(domElement1);
        }
    });
    var content = (0, _plainText1.contentFromPlainTextHTMLNodes)(plainTextHTMLNodes, htmlNode, context);
    clear(plainTextHTMLNodes);
    if (content !== null) {
        var textNode = document.createTextNode(content), domElement = textNode; ///
        domElements.push(domElement);
    }
    return domElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi4vbm9kZS9odG1sL3BsYWluVGV4dFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVBsYWluVGV4dEhUTUxOb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGxhaW5UZXh0XCI7XG5cbmNvbnN0IHsgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGROb2Rlc0FzSFRNTChodG1sTm9kZSwgY29udGV4dCkge1xuICBsZXQgaHRtbDtcblxuICBjb25zdCBodG1scyA9IFtdLFxuICAgICAgICBwbGFpblRleHRIVE1MTm9kZXMgPSBbXTtcblxuICBodG1sTm9kZS5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgIGNvbnN0IHBsYWluVGV4dEhUTUxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHBsYWluVGV4dEhUTUxOb2Rlcy5wdXNoKHBsYWluVGV4dEhUTUxOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0SFRNTE5vZGVzKHBsYWluVGV4dEhUTUxOb2RlcywgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjbGVhcihwbGFpblRleHRIVE1MTm9kZXMpO1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgIGh0bWwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRIVE1MTm9kZXMocGxhaW5UZXh0SFRNTE5vZGVzLCBodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgY2xlYXIocGxhaW5UZXh0SFRNTE5vZGVzKTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGh0bWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwbGFpblRleHQ7XG5cbiAgY29uc3QgcGxhaW5UZXh0cyA9IFtdLFxuICAgICAgICBwbGFpblRleHRIVE1MTm9kZXMgPSBbXTtcblxuICBodG1sTm9kZS5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgIGNvbnN0IHBsYWluVGV4dEhUTUxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHBsYWluVGV4dEhUTUxOb2Rlcy5wdXNoKHBsYWluVGV4dEhUTUxOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0SFRNTE5vZGVzKHBsYWluVGV4dEhUTUxOb2RlcywgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjbGVhcihwbGFpblRleHRIVE1MTm9kZXMpO1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAvLy9cblxuICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0SFRNTE5vZGVzKHBsYWluVGV4dEhUTUxOb2RlcywgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNsZWFyKHBsYWluVGV4dEhUTUxOb2Rlcyk7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAvLy9cblxuICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICB9XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0cy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTm9kZXNBc0RPTUVsZW1lbnRzKGh0bWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dEhUTUxOb2RlcyA9IFtdO1xuXG4gIGh0bWxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgIGlmIChjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgY29uc3QgcGxhaW5UZXh0SFRNTE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcGxhaW5UZXh0SFRNTE5vZGVzLnB1c2gocGxhaW5UZXh0SFRNTE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRIVE1MTm9kZXMocGxhaW5UZXh0SFRNTE5vZGVzLCBodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNsZWFyKHBsYWluVGV4dEhUTUxOb2Rlcyk7XG5cbiAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjaGlsZE5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dEhUTUxOb2RlcyhwbGFpblRleHRIVE1MTm9kZXMsIGh0bWxOb2RlLCBjb250ZXh0KTtcblxuICBjbGVhcihwbGFpblRleHRIVE1MTm9kZXMpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZG9tRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY2hpbGROb2Rlc0FzRE9NRWxlbWVudHMiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImh0bWxOb2RlIiwiY29udGV4dCIsImh0bWwiLCJodG1scyIsInBsYWluVGV4dEhUTUxOb2RlcyIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSIsIlBsYWluVGV4dEhUTUxOb2RlIiwicGxhaW5UZXh0SFRNTE5vZGUiLCJwdXNoIiwiY29udGVudCIsImNvbnRlbnRGcm9tUGxhaW5UZXh0SFRNTE5vZGVzIiwiaW5kZW50IiwiYXNIVE1MIiwiam9pbiIsIkVNUFRZX1NUUklORyIsInBsYWluVGV4dCIsInBsYWluVGV4dHMiLCJhc1BsYWluVGV4dCIsImRvbUVsZW1lbnRzIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBHZ0JBLHVCQUF1QjtlQUF2QkE7O0lBL0ZBQyxnQkFBZ0I7ZUFBaEJBOztJQWdEQUMscUJBQXFCO2VBQXJCQTs7O3lCQXpEZTtnRUFFRDt5QkFFRDswQkFDaUI7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRixpQkFBaUJJLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxJQUFJQztJQUVKLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxxQkFBcUIsRUFBRTtJQUU3QkosU0FBU0ssZ0JB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