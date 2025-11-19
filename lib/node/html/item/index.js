"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _comma = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/comma"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../../node/html/link/index"));
var _markdown = require("../../../ruleNames/markdown");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var IndexItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexItemHTMLNode, HTMLNode);
    function IndexItemHTMLNode() {
        _class_call_check(this, IndexItemHTMLNode);
        return _call_super(this, IndexItemHTMLNode, arguments);
    }
    _create_class(IndexItemHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_ITEM_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html;
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context);
                var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromIndexItem",
            value: function fromIndexItem(indexItem) {
                var wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), indexSpanHTMLNode = _index.default.fromWordOrPhrase(wordOrPhrase), childNHTMLodes = [
                    indexSpanHTMLNode
                ];
                pageNumbers.forEach(function(pageNumber) {
                    var indexLinkHTMLNOde = _index1.default.fromPageNumber(pageNumber);
                    childNHTMLodes.push(indexLinkHTMLNOde);
                    var commaTextHTMLNode = _comma.default.fromNothing();
                    childNHTMLodes.push(commaTextHTMLNode);
                });
                childNHTMLodes.pop();
                var indexItemHTMLNode = _html.default.fromChildHTMLNodes(IndexItemHTMLNode, childNHTMLodes);
                return indexItemHTMLNode;
            }
        }
    ]);
    return IndexItemHTMLNode;
}(_html.default);
_define_property(IndexItemHTMLNode, "tagName", "li");
_define_property(IndexItemHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBDb21tYVRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvY29tbWFcIjtcbmltcG9ydCBJbmRleFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvaW5kZXhcIjtcbmltcG9ydCBJbmRleExpbmtIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmsvaW5kZXhcIjtcblxuaW1wb3J0IHsgSU5ERVhfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaW5kZXhcIjtcblxuICBzdGF0aWMgZnJvbUluZGV4SXRlbShpbmRleEl0ZW0pIHtcbiAgICBjb25zdCB3b3JkT3JQaHJhc2UgPSBpbmRleEl0ZW0uZ2V0V29yZE9yUGhyYXNlKCksXG4gICAgICAgICAgcGFnZU51bWJlcnMgPSBpbmRleEl0ZW0uZ2V0UGFnZU51bWJlcnMoKSxcbiAgICAgICAgICBpbmRleFNwYW5IVE1MTm9kZSA9IEluZGV4VGV4dEhUTUxOb2RlLmZyb21Xb3JkT3JQaHJhc2Uod29yZE9yUGhyYXNlKSxcbiAgICAgICAgICBjaGlsZE5IVE1Mb2RlcyA9IFtcbiAgICAgICAgICAgIGluZGV4U3BhbkhUTUxOb2RlXG4gICAgICAgICAgXTtcblxuICAgIHBhZ2VOdW1iZXJzLmZvckVhY2goKHBhZ2VOdW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4TGlua0hUTUxOT2RlID0gSW5kZXhMaW5rSFRNTE5vZGUuZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgIGNoaWxkTkhUTUxvZGVzLnB1c2goaW5kZXhMaW5rSFRNTE5PZGUpO1xuXG4gICAgICBjb25zdCBjb21tYVRleHRIVE1MTm9kZSA9IENvbW1hVGV4dEhUTUxOb2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGNoaWxkTkhUTUxvZGVzLnB1c2goY29tbWFUZXh0SFRNTE5vZGUpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROSFRNTG9kZXMucG9wKCk7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZEhUTUxOb2RlcyhJbmRleEl0ZW1IVE1MTm9kZSwgY2hpbGROSFRNTG9kZXMpO1xuXG4gICAgcmV0dXJuIGluZGV4SXRlbUhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhJdGVtSFRNTE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSU5ERVhfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiZ2V0UGFnZU51bWJlcnMiLCJpbmRleFNwYW5IVE1MTm9kZSIsIkluZGV4VGV4dEhUTUxOb2RlIiwiZnJvbVdvcmRPclBocmFzZSIsImNoaWxkTkhUTUxvZGVzIiwiZm9yRWFjaCIsInBhZ2VOdW1iZXIiLCJpbmRleExpbmtIVE1MTk9kZSIsIkluZGV4TGlua0hUTUxOb2RlIiwiZnJvbVBhZ2VOdW1iZXIiLCJwdXNoIiwiY29tbWFUZXh0SFRNTE5vZGUiLCJDb21tYVRleHRIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwicG9wIiwiaW5kZXhJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBBOzREQUNTOzREQUNBOzZEQUNBO3dCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHVDQUE2QjtnQkFFOUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCLElBQUlDO2dCQUVKRixTQUFTLElBQUksQ0FBQ0csWUFBWSxDQUFDSDtnQkFFM0IsSUFBTUksaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNMLFFBQVFDO2dCQUVyRCxJQUFNSyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDTCxVQUMvQk0sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ047Z0JBRW5DQyxPQUFPLEFBQUMsR0FBV0ksT0FBVE4sUUFBdUJJLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLFlBQVc7Z0JBRzdELE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JhLFNBQVNaLFVBQVcsR0FBRztnQkFFN0IsT0FBT1k7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUM1QixJQUFNQyxlQUFlRCxVQUFVRSxlQUFlLElBQ3hDQyxjQUFjSCxVQUFVSSxjQUFjLElBQ3RDQyxvQkFBb0JDLGNBQWlCLENBQUNDLGdCQUFnQixDQUFDTixlQUN2RE8saUJBQWlCO29CQUNmSDtpQkFDRDtnQkFFUEYsWUFBWU0sT0FBTyxDQUFDLFNBQUNDO29CQUNuQixJQUFNQyxvQkFBb0JDLGVBQWlCLENBQUNDLGNBQWMsQ0FBQ0g7b0JBRTNERixlQUFlTSxJQUFJLENBQUNIO29CQUVwQixJQUFNSSxvQkFBb0JDLGNBQWlCLENBQUNDLFdBQVc7b0JBRXZEVCxlQUFlTSxJQUFJLENBQUNDO2dCQUN0QjtnQkFFQVAsZUFBZVUsR0FBRztnQkFFbEIsSUFBTUMsb0JBQW9CQyxhQUFRLENBQUNDLGtCQUFrQixDQXREcENyQyxtQkFzRHdEd0I7Z0JBRXpFLE9BQU9XO1lBQ1Q7OztXQXpEbUJuQztFQUEwQm9DLGFBQVE7QUE4QnJELGlCQTlCbUJwQyxtQkE4QlpzQyxXQUFVO0FBRWpCLGlCQWhDbUJ0QyxtQkFnQ1p1QyxhQUFZIn0=