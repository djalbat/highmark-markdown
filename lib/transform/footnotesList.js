"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListTransform;
    }
});
var _occamdom = require("occam-dom");
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../transform/footnotesItem"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../node/markdown/list/footnotes"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FootnotesListTransform = /*#__PURE__*/ function(Transform) {
    _inherits(FootnotesListTransform, Transform);
    function FootnotesListTransform() {
        _class_call_check(this, FootnotesListTransform);
        return _call_super(this, FootnotesListTransform, arguments);
    }
    _create_class(FootnotesListTransform, [
        {
            key: "replaceFootnotesDirectiveSubDivisionTransform",
            value: function replaceFootnotesDirectiveSubDivisionTransform(footnotesDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = footnotesDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(FootnotesListTransform.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndFootnoteTransformMap",
            value: function fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context) {
                var footnotesListTransform = null;
                var node = divisionMarkdownNode, start = startFromFootnoteTransformMap(footnoteTransformMap), footnoteLinkMarkdownNodes = footnoteLinkMarkdownNodesFromNode(node), footnotesItemTransforms = [];
                var number = start;
                footnoteLinkMarkdownNodes.forEach(function(footnoteLinkMarkdownNode) {
                    var identifier = footnoteLinkMarkdownNode.identifier(context), footnoteTransform = footnoteTransformMap[identifier] || null;
                    if (footnoteTransform !== null) {
                        var footnoteTransformUnnumbered = footnoteTransform.isUnnumbered();
                        if (footnoteTransformUnnumbered) {
                            var footnotesItemTransform = _footnotesItem.default.fromFootnoteTransformAndIdentifier(footnoteTransform, identifier, context);
                            footnotesItemTransforms.push(footnotesItemTransform);
                            footnoteTransform.setNumber(number);
                            number++;
                        }
                    }
                });
                var footnotesItemTransformsLength = footnotesItemTransforms.length;
                if (footnotesItemTransformsLength > 0) {
                    var footnotesListMarkdownNode = _footnotes.default.fromFootnotesItemTransformsAndStart(footnotesItemTransforms, start), node1 = footnotesListMarkdownNode, tokens = [];
                    footnotesItemTransforms.forEach(function(footnotesItemTransform) {
                        footnotesItemTransform.getTokens(tokens);
                    });
                    footnotesListTransform = _occamdom.Transform.fromNodeAndTokens(FootnotesListTransform, node1, tokens);
                }
                return footnotesListTransform;
            }
        }
    ]);
    return FootnotesListTransform;
}(_occamdom.Transform);
function startFromFootnoteTransformMap(footnoteTransformMap) {
    var footnoteTransforms = Object.values(footnoteTransformMap), numberedFootnoteTransforms = footnoteTransforms.filter(function(footnoteTransform) {
        var footnoteTransformNumbered = footnoteTransform.isNumbered();
        if (footnoteTransformNumbered) {
            return true;
        }
    }), numberedFootnoteTransformsLength = numberedFootnoteTransforms.length, start = numberedFootnoteTransformsLength + 1;
    return start;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2Zvb3Rub3Rlc0l0ZW1cIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICByZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybS5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0VHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRGcm9tRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZm9vdG5vdGVUcmFuc2Zvcm1NYXApLFxuICAgICAgICAgIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMgPSBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXMgPSBbXTtcblxuICAgIGxldCBudW1iZXIgPSBzdGFydDtcblxuICAgIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZVRyYW5zZm9ybSA9IGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZVRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybVVubnVtYmVyZWQgPSBmb290bm90ZVRyYW5zZm9ybS5pc1VubnVtYmVyZWQoKTtcblxuICAgICAgICBpZiAoZm9vdG5vdGVUcmFuc2Zvcm1Vbm51bWJlcmVkKSB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSA9IEZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0uZnJvbUZvb3Rub3RlVHJhbnNmb3JtQW5kSWRlbnRpZmllcihmb290bm90ZVRyYW5zZm9ybSwgaWRlbnRpZmllciwgY29udGV4dCk7XG5cbiAgICAgICAgICBmb290bm90ZXNJdGVtVHJhbnNmb3Jtcy5wdXNoKGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0pO1xuXG4gICAgICAgICAgZm9vdG5vdGVUcmFuc2Zvcm0uc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICAgICAgICBudW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZXNJdGVtVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzSXRlbVRyYW5zZm9ybXNBbmRTdGFydChmb290bm90ZXNJdGVtVHJhbnNmb3Jtcywgc3RhcnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb290bm90ZXNMaXN0VHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRGcm9tRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZm9vdG5vdGVUcmFuc2Zvcm1NYXApIHtcbiAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm1zID0gT2JqZWN0LnZhbHVlcyhmb290bm90ZVRyYW5zZm9ybU1hcCksICAvLy9cbiAgICAgICAgbnVtYmVyZWRGb290bm90ZVRyYW5zZm9ybXMgPSBmb290bm90ZVRyYW5zZm9ybXMuZmlsdGVyKChmb290bm90ZVRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtTnVtYmVyZWQgPSBmb290bm90ZVRyYW5zZm9ybS5pc051bWJlcmVkKCk7XG5cbiAgICAgICAgICBpZiAoZm9vdG5vdGVUcmFuc2Zvcm1OdW1iZXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbnVtYmVyZWRGb290bm90ZVRyYW5zZm9ybXNMZW5ndGggPSBudW1iZXJlZEZvb3Rub3RlVHJhbnNmb3Jtcy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gbnVtYmVyZWRGb290bm90ZVRyYW5zZm9ybXNMZW5ndGggKyAxO1xuXG4gIHJldHVybiBzdGFydDtcbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0VHJhbnNmb3JtIiwicmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2UiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiZm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsIm5vZGUiLCJzdGFydCIsInN0YXJ0RnJvbUZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zIiwibnVtYmVyIiwiZm9yRWFjaCIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZVRyYW5zZm9ybSIsImZvb3Rub3RlVHJhbnNmb3JtVW5udW1iZXJlZCIsImlzVW5udW1iZXJlZCIsImZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0iLCJGb290bm90ZXNJdGVtVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsInB1c2giLCJzZXROdW1iZXIiLCJmb290bm90ZXNJdGVtVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zQW5kU3RhcnQiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyIsImZvb3Rub3RlVHJhbnNmb3JtcyIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlcmVkRm9vdG5vdGVUcmFuc2Zvcm1zIiwiZmlsdGVyIiwiZm9vdG5vdGVUcmFuc2Zvcm1OdW1iZXJlZCIsImlzTnVtYmVyZWQiLCJudW1iZXJlZEZvb3Rub3RlVHJhbnNmb3Jtc0xlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7d0JBTEs7b0VBRVM7Z0VBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLDhDQUE4Q0Msc0NBQXNDLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUNqSCxJQUFNQywwQkFBMEJILHVDQUF1Q0ksMEJBQTBCLElBQzNGQyxlQUFlRix5QkFDZkcsYUFBYUwsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQU5pQkgsbUNBTVhTLFdBQU4sSUFBSyxhQUFTRixjQUFjQyxZQUFZSjtZQUMxQzs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxnREFBZ0RQLG9CQUFvQixFQUFFUSxvQkFBb0IsRUFBRVAsT0FBTztnQkFDeEcsSUFBSVEseUJBQXlCO2dCQUU3QixJQUFNQyxPQUFPVixzQkFDUFcsUUFBUUMsOEJBQThCSix1QkFDdENLLDRCQUE0QkMsa0NBQWtDSixPQUM5REssMEJBQTBCLEVBQUU7Z0JBRWxDLElBQUlDLFNBQVNMO2dCQUViRSwwQkFBMEJJLE9BQU8sQ0FBQyxTQUFDQztvQkFDakMsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNsQixVQUNqRG1CLG9CQUFvQlosb0JBQW9CLENBQUNXLFdBQVcsSUFBSTtvQkFFOUQsSUFBSUMsc0JBQXNCLE1BQU07d0JBQzlCLElBQU1DLDhCQUE4QkQsa0JBQWtCRSxZQUFZO3dCQUVsRSxJQUFJRCw2QkFBNkI7NEJBQy9CLElBQU1FLHlCQUF5QkMsc0JBQXNCLENBQUNDLGtDQUFrQyxDQUFDTCxtQkFBbUJELFlBQVlsQjs0QkFFeEhjLHdCQUF3QlcsSUFBSSxDQUFDSDs0QkFFN0JILGtCQUFrQk8sU0FBUyxDQUFDWDs0QkFFNUJBO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQU1ZLGdDQUFnQ2Isd0JBQXdCYyxNQUFNO2dCQUVwRSxJQUFJRCxnQ0FBZ0MsR0FBRztvQkFDckMsSUFBTUUsNEJBQTRCQyxrQkFBeUIsQ0FBQ0MsbUNBQW1DLENBQUNqQix5QkFBeUJKLFFBQ25IRCxRQUFPb0IsMkJBQ1BHLFNBQVMsRUFBRTtvQkFFakJsQix3QkFBd0JFLE9BQU8sQ0FBQyxTQUFDTTt3QkFDL0JBLHVCQUF1QlcsU0FBUyxDQUFDRDtvQkFDbkM7b0JBRUF4Qix5QkFBeUIwQixtQkFBUyxDQUFDQyxpQkFBaUIsQ0FqRHJDdkMsd0JBaUQ4RGEsT0FBTXVCO2dCQUNyRjtnQkFFQSxPQUFPeEI7WUFDVDs7O1dBckRtQlo7RUFBK0JzQyxtQkFBUztBQXdEN0QsU0FBU3ZCLDhCQUE4Qkosb0JBQW9CO0lBQ3pELElBQU02QixxQkFBcUJDLE9BQU9DLE1BQU0sQ0FBQy9CLHVCQUNuQ2dDLDZCQUE2QkgsbUJBQW1CSSxNQUFNLENBQUMsU0FBQ3JCO1FBQ3RELElBQU1zQiw0QkFBNEJ0QixrQkFBa0J1QixVQUFVO1FBRTlELElBQUlELDJCQUEyQjtZQUM3QixPQUFPO1FBQ1Q7SUFDRixJQUNBRSxtQ0FBbUNKLDJCQUEyQlgsTUFBTSxFQUNwRWxCLFFBQVFpQyxtQ0FBbUM7SUFFakQsT0FBT2pDO0FBQ1QifQ==