"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("./footnoteItem"));
var _attributeNames = require("../../attributeNames");
var _ruleNames = require("../../ruleNames");
var _query = require("../../utilities/query");
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
var FootnotesListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesListMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnotesListMarkdownNode);
    function FootnotesListMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, start) {
        _class_call_check(this, FootnotesListMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.start = start;
        return _this;
    }
    _create_class(FootnotesListMarkdownNode, [
        {
            key: "getStart",
            value: function getStart() {
                return this.start;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.START_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = this.start; ///
                return attributeValue;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(FootnotesListMarkdownNode.prototype), "clone", this).call(this, this.start);
            }
        }
    ], [
        {
            key: "fromFootnoteReplacementsAndDivisionMarkdownNode",
            value: function fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context) {
                var footnotesListMarkdownNode = null;
                var footnoteNumberMap = context.footnoteNumberMap;
                var node = divisionMarkdownNode, footnoteNumbers = Object.values(footnoteNumberMap), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteNumbersLength = footnoteNumbers.length, footnoteItemReplacements = [];
                var count = 0;
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context);
                    var footnoteNumber = footnoteNumberMap[identifier] || null;
                    if (footnoteNumber === null) {
                        var footnoteReplacement = footnoteReplacementFromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);
                        if (footnoteReplacement !== null) {
                            var footnoteItemReplacement = footnoteItemReplacementFromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier);
                            footnoteItemReplacements.push(footnoteItemReplacement);
                            count++;
                            footnoteNumber = footnoteNumbersLength + count;
                            footnoteNumberMap[identifier] = footnoteNumber;
                        }
                    }
                    if (footnoteNumber !== null) {
                        var number = footnoteNumber; ///
                        linkMarkdownNode.setNumber(number);
                    }
                });
                var footnoteItemReplacementsLength = footnoteItemReplacements.length;
                if (footnoteItemReplacementsLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = [], opacity = null, start = footnoteNumbersLength + 1;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
                    footnoteItemReplacements.forEach(function(footnotesItemReplacement) {
                        var parentNode = footnotesListMarkdownNode; ///
                        footnotesItemReplacement.appendTo(parentNode, context);
                    });
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);
function footnoteReplacementFromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
    var footnoteReplacement = extract(footnoteReplacements, function(footnoteReplacement) {
        var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);
        if (footnoteMarkdownNodeIdentifier === identifier) {
            return true;
        }
    }) || null;
    return footnoteReplacement;
}
function footnoteItemReplacementFromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier) {
    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteItemMarkdownNode = _footnoteItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnoteItemMarkdownNode, footnoteItemReplacement = footnoteReplacement.expand(ascendantNode);
    return footnoteItemReplacement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuL2Zvb3Rub3RlSXRlbVwiO1xuXG5pbXBvcnQgeyBTVEFSVF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgfVxuXG4gIGdldFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuc3RhcnQpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgZm9vdG5vdGVOdW1iZXJNYXAgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBmb290bm90ZU51bWJlcnMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlTnVtYmVyTWFwKSxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlcyA9IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXJzTGVuZ3RoID0gZm9vdG5vdGVOdW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBsZXQgZm9vdG5vdGVOdW1iZXIgPSBmb290bm90ZU51bWJlck1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVOdW1iZXIgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllcik7XG5cbiAgICAgICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMucHVzaChmb290bm90ZUl0ZW1SZXBsYWNlbWVudCk7XG5cbiAgICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXIgPSBmb290bm90ZU51bWJlcnNMZW5ndGggKyBjb3VudDtcblxuICAgICAgICAgIGZvb3Rub3RlTnVtYmVyTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvb3Rub3RlTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IGZvb3Rub3RlTnVtYmVyOyAgLy8vXG5cbiAgICAgICAgbGlua01hcmtkb3duTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50c0xlbmd0aCA9IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gW10sIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgICBzdGFydCA9IGZvb3Rub3RlTnVtYmVyc0xlbmd0aCArIDE7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHN0YXJ0KTtcblxuICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVSZXBsYWNlbWVudEZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGV4dHJhY3QoZm9vdG5vdGVSZXBsYWNlbWVudHMsIChmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSxcbiAgICAgICAgYXNjZW5kYW50Tm9kZSA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudC5leHBhbmQoYXNjZW5kYW50Tm9kZSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50O1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJzdGFydCIsImdldFN0YXJ0IiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJTVEFSVF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xvbmUiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3RlUmVwbGFjZW1lbnRzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVOdW1iZXJNYXAiLCJub2RlIiwiZm9vdG5vdGVOdW1iZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVOdW1iZXJzTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzIiwiY291bnQiLCJmb3JFYWNoIiwibGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZU51bWJlciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmb290bm90ZVJlcGxhY2VtZW50RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kSWRlbnRpZmllciIsImZvb3Rub3RlSXRlbVJlcGxhY2VtZW50IiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIiLCJwdXNoIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsImFzY2VuZGFudE5vZGUi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