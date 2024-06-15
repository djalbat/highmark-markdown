"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemReplacement;
    }
});
var _necessary = require("necessary");
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnoteItem"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var FootnoteItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnoteItemReplacement, Replacement);
    var _super = _create_super(FootnoteItemReplacement);
    function FootnoteItemReplacement() {
        _class_call_check(this, FootnoteItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnoteItemReplacement, [
        {
            key: "appendToFootnotesListMarkdownNode",
            value: function appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context) {
                var parentNode = footnotesListMarkdownNode; ///
                _get(_get_prototype_of(FootnoteItemReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromFootnoteReplacementsAndIdentifier",
            value: function fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
                var footnoteItemReplacement = null;
                var footnoteReplacement = extract(footnoteReplacements, function(footnoteReplacement) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);
                    if (footnoteMarkdownNodeIdentifier === identifier) {
                        return true;
                    }
                }) || null;
                if (footnoteReplacement !== null) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteItemMarkdownNode = _footnoteItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnoteItemMarkdownNode; ///
                    footnoteItemReplacement = footnoteReplacement.expand(FootnoteItemReplacement, ascendantNode);
                }
                return footnoteItemReplacement;
            }
        }
    ]);
    return FootnoteItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZUl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVJdGVtXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlSXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBhcHBlbmRUb0Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHN1cGVyLmFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGV4dHJhY3QoZm9vdG5vdGVSZXBsYWNlbWVudHMsIChmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSA9IEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllciksXG4gICAgICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQgPSBmb290bm90ZVJlcGxhY2VtZW50LmV4cGFuZChGb290bm90ZUl0ZW1SZXBsYWNlbWVudCwgYXNjZW5kYW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhcHBlbmRUb0Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsImlkZW50aWZpZXIiLCJmb290bm90ZUl0ZW1SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZXhwYW5kIiwiUmVwbGFjZW1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTtrRUFFUDttRUFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDbEUsSUFBTUMsYUFBYUYsMkJBQTJCLEdBQUc7Z0JBRWpELHVCQUppQkosb0NBSVhPLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUVMLE9BQU87Z0JBQ3BGLElBQUlNLDBCQUEwQjtnQkFFOUIsSUFBTUMsc0JBQXNCWCxRQUFRUSxzQkFBc0IsU0FBQ0c7b0JBQ3pELElBQU1DLE9BQU9ELG9CQUFvQkUsT0FBTyxJQUNsQ0MsdUJBQXVCRixNQUN2QkcsaUNBQWlDRCxxQkFBcUJMLFVBQVUsQ0FBQ0w7b0JBRXZFLElBQUlXLG1DQUFtQ04sWUFBWTt3QkFDakQsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNQyxPQUFPRCxvQkFBb0JFLE9BQU8sSUFDbENDLHVCQUF1QkYsTUFDdkJJLDJCQUEyQkMscUJBQXdCLENBQUNDLHNDQUFzQyxDQUFDSixzQkFBc0JMLGFBQ2pIVSxnQkFBZ0JILDBCQUEwQixHQUFHO29CQUVuRE4sMEJBQTBCQyxvQkFBb0JTLE1BQU0sQ0ExQnJDckIseUJBMEIrRG9CO2dCQUNoRjtnQkFFQSxPQUFPVDtZQUNUOzs7V0E5Qm1CWDtFQUFnQ3NCLG9CQUFXIn0=