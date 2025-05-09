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
var _ruleNames = require("../../../ruleNames");
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
    function IndexItemHTMLNode(outerNode, parentNode, childNodes, domElement, pageNumbers, wordOrPhrase) {
        _class_call_check(this, IndexItemHTMLNode);
        var _this;
        _this = _call_super(this, IndexItemHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement,
            pageNumbers,
            wordOrPhrase
        ]);
        _this.pageNumbers = pageNumbers;
        _this.wordOrPhrase = wordOrPhrase;
        return _this;
    }
    _create_class(IndexItemHTMLNode, [
        {
            key: "getPageNumbers",
            value: function getPageNumbers() {
                return this.pageNumbers;
            }
        },
        {
            key: "getWordOrPhrase",
            value: function getWordOrPhrase() {
                return this.wordOrPhrase;
            }
        },
        {
            //   asHTML(indent, context) {
            //     indent = this.adjustIndent(indent);
            //
            //     const childNodesHTML = this.childNodesAsHTML(indent, context),
            //           startingTag = this.startingTag(context),
            //           closingTag = this.closingTag(context),
            //           html = `${indent}${startingTag}${childNodesHTML}${closingTag}
            // `;
            //
            //   pageNumbersContent = pageNumbers.join(COMMA),
            //   content = `${wordOrPhrase},${pageNumbersContent}`,
            //     return html;
            //   }
            //   childNodesAsHTML(indent, context) {
            //     indent = null;
            //
            //     const childNodesHTML = super.childNodesAsHTML(indent, context);
            //
            //     return childNodesHTML;
            //   }
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.INDEX_ITEM_RULE_NAME;
                return ruleName;
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
                var pageNumbers = indexItem.getPageNumbers(), wordOrPhrase = indexItem.getWordOrPhrase(), indexItemHTMLNode = _html.default.fromNothing(IndexItemHTMLNode, pageNumbers, wordOrPhrase);
                return indexItemHTMLNode;
            }
        }
    ]);
    return IndexItemHTMLNode;
}(_html.default);
_define_property(IndexItemHTMLNode, "tagName", "li");
_define_property(IndexItemHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXJzLCB3b3JkT3JQaHJhc2UpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXJzLCB3b3JkT3JQaHJhc2UpO1xuXG4gICAgdGhpcy5wYWdlTnVtYmVycyA9IHBhZ2VOdW1iZXJzO1xuICAgIHRoaXMud29yZE9yUGhyYXNlID0gd29yZE9yUGhyYXNlO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcnM7XG4gIH1cblxuICBnZXRXb3JkT3JQaHJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZE9yUGhyYXNlO1xuICB9XG5cbi8vICAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuLy8gICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG4vL1xuLy8gICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4vLyAgICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuLy8gICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4vLyAgICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuLy8gYDtcbi8vXG4vLyAgIHBhZ2VOdW1iZXJzQ29udGVudCA9IHBhZ2VOdW1iZXJzLmpvaW4oQ09NTUEpLFxuLy8gICBjb250ZW50ID0gYCR7d29yZE9yUGhyYXNlfSwke3BhZ2VOdW1iZXJzQ29udGVudH1gLFxuLy8gICAgIHJldHVybiBodG1sO1xuLy8gICB9XG5cbi8vICAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbi8vICAgICBpbmRlbnQgPSBudWxsO1xuLy9cbi8vICAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcbi8vXG4vLyAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuLy8gICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBJTkRFWF9JVEVNX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaW5kZXhcIjtcblxuICBzdGF0aWMgZnJvbUluZGV4SXRlbShpbmRleEl0ZW0pIHtcbiAgICBjb25zdCBwYWdlTnVtYmVycyA9IGluZGV4SXRlbS5nZXRQYWdlTnVtYmVycygpLFxuICAgICAgICAgIHdvcmRPclBocmFzZSA9IGluZGV4SXRlbS5nZXRXb3JkT3JQaHJhc2UoKSxcbiAgICAgICAgICBpbmRleEl0ZW1IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEluZGV4SXRlbUhUTUxOb2RlLCBwYWdlTnVtYmVycywgd29yZE9yUGhyYXNlKTtcblxuICAgIHJldHVybiBpbmRleEl0ZW1IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SXRlbUhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwicGFnZU51bWJlcnMiLCJ3b3JkT3JQaHJhc2UiLCJnZXRQYWdlTnVtYmVycyIsImdldFdvcmRPclBocmFzZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9JVEVNX1JVTEVfTkFNRSIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsImluZGV4SXRlbUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tTm90aGluZyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBO3lCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0NBRGpFTjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7WUFBWUM7WUFBYUM7O1FBRWxFLE1BQUtELFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQUxITjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUYsOEJBQThCO1lBQzlCLDBDQUEwQztZQUMxQyxFQUFFO1lBQ0YscUVBQXFFO1lBQ3JFLHFEQUFxRDtZQUNyRCxtREFBbUQ7WUFDbkQsMEVBQTBFO1lBQzFFLEtBQUs7WUFDTCxFQUFFO1lBQ0Ysa0RBQWtEO1lBQ2xELHVEQUF1RDtZQUN2RCxtQkFBbUI7WUFDbkIsTUFBTTtZQUVOLHdDQUF3QztZQUN4QyxxQkFBcUI7WUFDckIsRUFBRTtZQUNGLHNFQUFzRTtZQUN0RSxFQUFFO1lBQ0YsNkJBQTZCO1lBQzdCLE1BQU07WUFFSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQjtnQkFFckMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQkksU0FBU0gsVUFBVyxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQzVCLElBQU1WLGNBQWNVLFVBQVVSLGNBQWMsSUFDdENELGVBQWVTLFVBQVVQLGVBQWUsSUFDeENRLG9CQUFvQkMsYUFBUSxDQUFDQyxXQUFXLENBMUQ3QmxCLG1CQTBEaURLLGFBQWFDO2dCQUUvRSxPQUFPVTtZQUNUOzs7V0E3RG1CaEI7RUFBMEJpQixhQUFRO0FBbURyRCxpQkFuRG1CakIsbUJBbURabUIsV0FBVTtBQUVqQixpQkFyRG1CbkIsbUJBcURab0IsYUFBWSJ9