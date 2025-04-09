"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLNode;
    }
});
var _necessary = require("necessary");
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./plainText"));
var _constants = require("../../constants");
var _plainText1 = require("../../utilities/plainText");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var clear = _necessary.arrayUtilities.clear;
var LineHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(LineHTMLNode, HTMLNode);
    function LineHTMLNode() {
        _class_call_check(this, LineHTMLNode);
        return _call_super(this, LineHTMLNode, arguments);
    }
    _create_class(LineHTMLNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var content = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = indent !== null ? "".concat(indent).concat(startingTag).concat(content).concat(closingTag, "\n") : "".concat(startingTag).concat(content).concat(closingTag);
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var html;
                var htmls = [], htmlNode = this, plainTextHTMLNodes = [];
                this.forEachChildNode(function(childNode) {
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
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(LineHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(LineHTMLNode, outerNode);
            }
        }
    ]);
    return LineHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGxhaW5UZXh0SFRNTE5vZGUgZnJvbSBcIi4vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUGxhaW5UZXh0SFRNTE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wbGFpblRleHRcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IChpbmRlbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y29udGVudH0ke2Nsb3NpbmdUYWd9XG5gOiAgICAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NvbnRlbnR9JHtjbG9zaW5nVGFnfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGh0bWw7XG5cbiAgICBjb25zdCBodG1scyA9IFtdLFxuICAgICAgICAgIGh0bWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBsYWluVGV4dEhUTUxOb2RlcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dEhUTUxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGxhaW5UZXh0SFRNTE5vZGVzLnB1c2gocGxhaW5UZXh0SFRNTE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0SFRNTE5vZGVzKHBsYWluVGV4dEhUTUxOb2RlcywgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNsZWFyKHBsYWluVGV4dEhUTUxOb2Rlcyk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgICAgaHRtbCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dEhUTUxOb2RlcyhwbGFpblRleHRIVE1MTm9kZXMsIGh0bWxOb2RlLCBjb250ZXh0KTtcblxuICAgIGNsZWFyKHBsYWluVGV4dEhUTUxOb2Rlcyk7XG5cbiAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICBodG1scy5wdXNoKGh0bWwpO1xuICAgIH1cblxuICAgIGh0bWwgPSBodG1scy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKExpbmVIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoTGluZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiTGluZUhUTUxOb2RlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJhZGp1c3RJbmRlbnQiLCJjb250ZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJodG1scyIsImh0bWxOb2RlIiwicGxhaW5UZXh0SFRNTE5vZGVzIiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlIiwiUGxhaW5UZXh0SFRNTE5vZGUiLCJwbGFpblRleHRIVE1MTm9kZSIsInB1c2giLCJjb250ZW50RnJvbVBsYWluVGV4dEhUTUxOb2RlcyIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7MkRBRVY7Z0VBQ1M7eUJBRUQ7MEJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQkQsU0FBUyxJQUFJLENBQUNFLFlBQVksQ0FBQ0Y7Z0JBRTNCLElBQU1HLFVBQVUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0osUUFBUUMsVUFDeENJLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNKLFVBQy9CSyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTCxVQUM3Qk0sT0FBTyxBQUFDUCxXQUFXLE9BQ1gsQUFBQyxHQUFXSyxPQUFUTCxRQUF1QkcsT0FBZEUsYUFBd0JDLE9BQVZILFNBQXFCLE9BQVhHLFlBQVcsUUFDNUMsQUFBQyxHQUFnQkgsT0FBZEUsYUFBd0JDLE9BQVZILFNBQXFCLE9BQVhHO2dCQUU1QyxPQUFPQztZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosTUFBTSxFQUFFQyxPQUFPO2dCQUM5QixJQUFJTTtnQkFFSixJQUFNQyxRQUFRLEVBQUUsRUFDVkMsV0FBVyxJQUFJLEVBQ2ZDLHFCQUFxQixFQUFFO2dCQUU3QixJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyw2QkFBOEJELEFBQVMsWUFBVEEsV0FBcUJFLGtCQUFpQjtvQkFFMUUsSUFBSUQsNEJBQTRCO3dCQUM5QixJQUFNRSxvQkFBb0JILFdBQVksR0FBRzt3QkFFekNGLG1CQUFtQk0sSUFBSSxDQUFDRDtvQkFDMUIsT0FBTzt3QkFDTCxJQUFNWixVQUFVYyxJQUFBQSx5Q0FBNkIsRUFBQ1Asb0JBQW9CRCxVQUFVUjt3QkFFNUVKLE1BQU1hO3dCQUVOLElBQUlQLFlBQVksTUFBTTs0QkFDcEIsSUFBTUksT0FBT0osU0FBUyxHQUFHOzRCQUV6QkssTUFBTVEsSUFBSSxDQUFDVDt3QkFDYjt3QkFFQSxJQUFNUCxTQUFTLE1BQ1RPLFFBQU9LLFVBQVViLE1BQU0sQ0FBQ0MsUUFBUUM7d0JBRXRDLElBQUlNLFVBQVMsTUFBTTs0QkFDakJDLE1BQU1RLElBQUksQ0FBQ1Q7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBTUosVUFBVWMsSUFBQUEseUNBQTZCLEVBQUNQLG9CQUFvQkQsVUFBVVI7Z0JBRTVFSixNQUFNYTtnQkFFTixJQUFJUCxZQUFZLE1BQU07b0JBQ3BCLElBQU1JLFFBQU9KLFNBQVMsR0FBRztvQkFFekJLLE1BQU1RLElBQUksQ0FBQ1Q7Z0JBQ2I7Z0JBRUFBLE9BQU9DLE1BQU1VLElBQUksQ0FBQ0MsdUJBQVk7Z0JBRTlCLE9BQU9aO1lBQ1Q7Ozs7WUFFT2EsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQS9EL0J4QjtZQStEK0M7OztZQUUzRDBCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsYUFBUSxDQUFDQyxhQUFhLENBakU1QzFCLGNBaUUyRDJCO1lBQVk7OztXQWpFdkUzQjtFQUFxQnlCLGFBQVEifQ==