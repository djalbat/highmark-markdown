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
                var identifierToFootnoteNumberMap = context.identifierToFootnoteNumberMap;
                var node = divisionMarkdownNode, footnoteNumbers = Object.values(identifierToFootnoteNumberMap), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteNumbersLength = footnoteNumbers.length, footnoteItemReplacements = [];
                var count = 0;
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteNumber = identifierToFootnoteNumberMap[identifier] || null;
                    if (footnoteNumber !== null) {
                        var number = footnoteNumber; ///
                        linkMarkdownNode.setNumber(number);
                    } else {
                        var footnoteReplacement = footnoteReplacementFromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);
                        if (footnoteReplacement !== null) {
                            var footnoteItemReplacement = footnoteItemReplacementFromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier), footnoteNumber1 = footnoteNumbersLength + count + 1, number1 = footnoteNumber1; ///
                            identifierToFootnoteNumberMap[identifier] = footnoteNumber1;
                            footnoteItemReplacements.push(footnoteItemReplacement);
                            linkMarkdownNode.setNumber(number1);
                            count++;
                        }
                    }
                });
                var footnoteItemReplacementsLength = footnoteItemReplacements.length;
                if (footnoteItemReplacementsLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = [], opacity = null, start = footnoteNumbersLength + 1;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
                    footnoteItemReplacements.forEach(function(footnotesItemReplacement) {
                        footnotesItemReplacement.appendTo(footnotesListMarkdownNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuL2Zvb3Rub3RlSXRlbVwiO1xuXG5pbXBvcnQgeyBTVEFSVF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgfVxuXG4gIGdldFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuc3RhcnQpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaWRlbnRpZmllclRvRm9vdG5vdGVOdW1iZXJNYXAgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBmb290bm90ZU51bWJlcnMgPSBPYmplY3QudmFsdWVzKGlkZW50aWZpZXJUb0Zvb3Rub3RlTnVtYmVyTWFwKSxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlcyA9IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXJzTGVuZ3RoID0gZm9vdG5vdGVOdW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVOdW1iZXIgPSBpZGVudGlmaWVyVG9Gb290bm90ZU51bWJlck1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVOdW1iZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZm9vdG5vdGVOdW1iZXI7ICAvLy9cblxuICAgICAgICBsaW5rTWFya2Rvd25Ob2RlLnNldE51bWJlcihudW1iZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllciksXG4gICAgICAgICAgICAgICAgZm9vdG5vdGVOdW1iZXIgPSBmb290bm90ZU51bWJlcnNMZW5ndGggKyBjb3VudCArIDEsXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gZm9vdG5vdGVOdW1iZXI7ICAvLy9cblxuICAgICAgICAgIGlkZW50aWZpZXJUb0Zvb3Rub3RlTnVtYmVyTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVOdW1iZXI7XG5cbiAgICAgICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMucHVzaChmb290bm90ZUl0ZW1SZXBsYWNlbWVudCk7XG5cbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID0gZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSwgLy8vXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0ID0gZm9vdG5vdGVOdW1iZXJzTGVuZ3RoICsgMTtcblxuICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgc3RhcnQpO1xuXG4gICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5hcHBlbmRUbyhmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBleHRyYWN0KGZvb3Rub3RlUmVwbGFjZW1lbnRzLCAoZm9vdG5vdGVSZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBmb290bm90ZVJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudDtcbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllcikge1xuICBjb25zdCBub2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpLFxuICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQgPSBmb290bm90ZVJlcGxhY2VtZW50LmV4cGFuZChhc2NlbmRhbnROb2RlKTtcblxuICByZXR1cm4gZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsInN0YXJ0IiwiZ2V0U3RhcnQiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIlNUQVJUX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjbG9uZSIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyVG9Gb290bm90ZU51bWJlck1hcCIsIm5vZGUiLCJmb290bm90ZU51bWJlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU51bWJlcnNMZW5ndGgiLCJsZW5ndGgiLCJmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMiLCJjb3VudCIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlTnVtYmVyIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQiLCJmb290bm90ZUl0ZW1SZXBsYWNlbWVudEZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsInB1c2giLCJmb290bm90ZUl0ZW1SZXBsYWNlbWVudHNMZW5ndGgiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImFwcGVuZFRvIiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZXhwYW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O3lCQVhVOytEQUVOO21FQUNZOzhCQUVBO3lCQUNJO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLDBCQUNQRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsS0FBSztnQ0FEckRSOztrQ0FFWEcsVUFBVUMsWUFBWUMsU0FBU0MsWUFBWUM7UUFFakQsTUFBS0MsS0FBSyxHQUFHQTs7O2tCQUpJUjs7WUFPbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLG9DQUFvQjtnQkFFMUMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNw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