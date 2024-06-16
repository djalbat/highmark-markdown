"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemReplacement;
    }
});
var _necessary = require("necessary");
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesItem"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var extract = _necessary.arrayUtilities.extract;
var FootnotesItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesItemReplacement, Replacement);
    var _super = _create_super(FootnotesItemReplacement);
    function FootnotesItemReplacement() {
        _class_call_check(this, FootnotesItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesItemReplacement, null, [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _replacement.default.fromNode(FootnotesItemReplacement, node, context);
            }
        },
        {
            key: "fromFootnoteReplacementsAndIdentifier",
            value: function fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
                var footnotesItemReplacement = null;
                var footnoteReplacement = extract(footnoteReplacements, function(footnoteReplacement) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);
                    if (footnoteMarkdownNodeIdentifier === identifier) {
                        return true;
                    }
                }) || null;
                if (footnoteReplacement !== null) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnotesItemMarkdownNode = _footnotesItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnotesItemMarkdownNode; ///
                    footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);
                }
                return footnotesItemReplacement;
            }
        }
    ]);
    return FootnotesItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNJdGVtXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlKEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCwgbm9kZSwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kSWRlbnRpZmllcihmb290bm90ZVJlcGxhY2VtZW50cywgaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGV4dHJhY3QoZm9vdG5vdGVSZXBsYWNlbWVudHMsIChmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGFzY2VuZGFudE5vZGUgPSBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudC5leHBhbmQoRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LCBhc2NlbmRhbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbU5vZGUiLCJub2RlIiwiY29udGV4dCIsIlJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kSWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnRzIiwiaWRlbnRpZmllciIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIiLCJmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwiYXNjZW5kYW50Tm9kZSIsImV4cGFuZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7a0VBRVA7b0VBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLG9CQUFXLENBQUNILFFBQVEsQ0FEekNILDBCQUNvRUksTUFBTUM7WUFBVTs7O1lBRWhHRSxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUVKLE9BQU87Z0JBQ3BGLElBQUlLLDJCQUEyQjtnQkFFL0IsSUFBTUMsc0JBQXNCVixRQUFRTyxzQkFBc0IsU0FBQ0c7b0JBQ3pELElBQU1QLE9BQU9PLG9CQUFvQkMsT0FBTyxJQUNsQ0MsdUJBQXVCVCxNQUN2QlUsaUNBQWlDRCxxQkFBcUJKLFVBQVUsQ0FBQ0o7b0JBRXZFLElBQUlTLG1DQUFtQ0wsWUFBWTt3QkFDakQsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNUCxPQUFPTyxvQkFBb0JDLE9BQU8sSUFDbENDLHVCQUF1QlQsTUFDdkJXLDRCQUE0QkMsc0JBQXlCLENBQUNDLHNDQUFzQyxDQUFDSixzQkFBc0JKLGFBQ25IUyxnQkFBZ0JILDJCQUEyQixHQUFHO29CQUVwREwsMkJBQTJCQyxvQkFBb0JRLE1BQU0sQ0F0QnRDbkIsMEJBc0JpRWtCO2dCQUNsRjtnQkFFQSxPQUFPUjtZQUNUOzs7V0ExQm1CVjtFQUFpQ00sb0JBQVcifQ==