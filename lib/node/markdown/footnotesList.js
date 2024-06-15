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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnoteItem"));
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
                        var footnoteItemReplacement = _footnoteItem.default.fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);
                        if (footnoteItemReplacement !== null) {
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
                        footnotesItemReplacement.appendTo(footnotesListMarkdownNode, context);
                    });
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IFNUQVJUX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBGT09UTk9URVNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIHN0YXJ0KSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICB9XG5cbiAgZ2V0U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQ7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gU1RBUlRfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuc3RhcnQ7ICAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5zdGFydCk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyBmb290bm90ZU51bWJlck1hcCB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlTnVtYmVycyA9IE9iamVjdC52YWx1ZXMoZm9vdG5vdGVOdW1iZXJNYXApLFxuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZU51bWJlcnNMZW5ndGggPSBmb290bm90ZU51bWJlcnMubGVuZ3RoLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50cyA9IFtdO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGxldCBmb290bm90ZU51bWJlciA9IGZvb3Rub3RlTnVtYmVyTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZU51bWJlciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZUl0ZW1SZXBsYWNlbWVudCA9IEZvb3Rub3RlSXRlbVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGlkZW50aWZpZXIsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmb290bm90ZUl0ZW1SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50cy5wdXNoKGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50KTtcblxuICAgICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgICBmb290bm90ZU51bWJlciA9IGZvb3Rub3RlTnVtYmVyc0xlbmd0aCArIGNvdW50O1xuXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXJNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm9vdG5vdGVOdW1iZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZm9vdG5vdGVOdW1iZXI7ICAvLy9cblxuICAgICAgICBsaW5rTWFya2Rvd25Ob2RlLnNldE51bWJlcihudW1iZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID0gZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSwgLy8vXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0ID0gZm9vdG5vdGVOdW1iZXJzTGVuZ3RoICsgMTtcblxuICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgc3RhcnQpO1xuXG4gICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5hcHBlbmRUbyhmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsInN0YXJ0IiwiZ2V0U3RhcnQiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIlNUQVJUX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjbG9uZSIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmb290bm90ZU51bWJlck1hcCIsIm5vZGUiLCJmb290bm90ZU51bWJlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU51bWJlcnNMZW5ndGgiLCJsZW5ndGgiLCJmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMiLCJjb3VudCIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlTnVtYmVyIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQiLCJGb290bm90ZUl0ZW1SZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIiLCJwdXNoIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJhcHBlbmRUbyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7K0RBUEk7bUVBQ1c7OEJBRUM7eUJBQ0k7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLDBCQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsS0FBSztnQ0FEckROOztrQ0FFWEMsVUFBVUMsWUFBWUMsU0FBU0MsWUFBWUM7UUFFakQsTUFBS0MsS0FBSyxHQUFHQTs7O2tCQUpJTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLG9DQUFvQjtnQkFFMUMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFNRSxpQkFBaUIsSUFBSSxDQUFDTCxLQUFLLEVBQUcsR0FBRztnQkFFdkMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXZCRVosc0NBdUJJWSxTQUFOLElBQUssYUFBTyxJQUFJLENBQUNOLEtBQUs7WUFBRzs7OztZQUVuQ08sS0FBQUE7bUJBQVAsU0FBT0EsZ0RBQWdEQyxvQkFBb0IsRUFBRUMsb0JBQW9CLEVBQUVOLE9BQU87Z0JBQ3hHLElBQUlPLDRCQUE0QjtnQkFFaEMsSUFBTSxBQUFFQyxvQkFBc0JSLFFBQXRCUTtnQkFFUixJQUFNQyxPQUFPSCxzQkFDUEksa0JBQWtCQyxPQUFPQyxNQUFNLENBQUNKLG9CQUNoQ0ssb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0wsT0FDOUNNLHdCQUF3QkwsZ0JBQWdCTSxNQUFNLEVBQzlDQywyQkFBMkIsRUFBRTtnQkFFbkMsSUFBSUMsUUFBUTtnQkFFWkwsa0JBQWtCTSxPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1DLGFBQWFELGlCQUFpQkMsVUFBVSxDQUFDckI7b0JBRS9DLElBQUlzQixpQkFBaUJkLGlCQUFpQixDQUFDYSxXQUFXLElBQUk7b0JBRXRELElBQUlDLG1CQUFtQixNQUFNO3dCQUMzQixJQUFNQywwQkFBMEJDLHFCQUF1QixDQUFDQyxxQ0FBcUMsQ0FBQ3BCLHNCQUFzQmdCLFlBQVlyQjt3QkFFaEksSUFBSXVCLDRCQUE0QixNQUFNOzRCQUNwQ04seUJBQXlCUyxJQUFJLENBQUNIOzRCQUU5Qkw7NEJBRUFJLGlCQUFpQlAsd0JBQXdCRzs0QkFFekNWLGlCQUFpQixDQUFDYSxXQUFXLEdBQUdDO3dCQUNsQztvQkFDRjtvQkFFQSxJQUFJQSxtQkFBbUIsTUFBTTt3QkFDM0IsSUFBTUssU0FBU0wsZ0JBQWlCLEdBQUc7d0JBRW5DRixpQkFBaUJRLFNBQVMsQ0FBQ0Q7b0JBQzdCO2dCQUNGO2dCQUVBLElBQU1FLGlDQUFpQ1oseUJBQXlCRCxNQUFNO2dCQUV0RSxJQUFJYSxpQ0FBaUMsR0FBRztvQkFDdEMsSUFBTXJDLFdBQVdzQyxtQ0FBd0IsRUFDbkNyQyxhQUFhLEVBQUUsRUFDZkMsVUFBVSxNQUNWRyxRQUFRa0Isd0JBQXdCO29CQUV0Q1IsNEJBQTRCd0IsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBeEUxRHpDLDJCQXdFc0ZDLFVBQVVDLFlBQVlDLFNBQVNHO29CQUVwSW9CLHlCQUF5QkUsT0FBTyxDQUFDLFNBQUNjO3dCQUNoQ0EseUJBQXlCQyxRQUFRLENBQUMzQiwyQkFBMkJQO29CQUMvRDtnQkFDRjtnQkFFQSxPQUFPTztZQUNUOzs7V0FoRm1CaEI7RUFBa0N3QyxpQkFBWSJ9