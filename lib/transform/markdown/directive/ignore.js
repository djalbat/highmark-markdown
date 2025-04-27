"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IgnoreDirectiveMarkdownTransform;
    }
});
var _occamdom = require("occam-dom");
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
var IgnoreDirectiveMarkdownTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IgnoreDirectiveMarkdownTransform, Transform);
    function IgnoreDirectiveMarkdownTransform() {
        _class_call_check(this, IgnoreDirectiveMarkdownTransform);
        return _call_super(this, IgnoreDirectiveMarkdownTransform, arguments);
    }
    _create_class(IgnoreDirectiveMarkdownTransform, [
        {
            key: "removeFromTopmostMarkdownNode",
            value: function removeFromTopmostMarkdownNode(topmostMarkdownNode, context) {
                var parentNode = topmostMarkdownNode; ///
                _get(_get_prototype_of(IgnoreDirectiveMarkdownTransform.prototype), "removeFrom", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode) {
                var node = divisionMarkdownNode, tokens = null, ignoredDirectiveMarkdownTransform = _occamdom.Transform.fromNodeAndTokens(IgnoreDirectiveMarkdownTransform, node, tokens);
                return ignoredDirectiveMarkdownTransform;
            }
        }
    ]);
    return IgnoreDirectiveMarkdownTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2lnbm9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHJlbW92ZUZyb21Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdG9wbW9zdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5yZW1vdmVGcm9tKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgaWdub3JlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKElnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIklnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwicmVtb3ZlRnJvbVRvcG1vc3RNYXJrZG93bk5vZGUiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJyZW1vdmVGcm9tIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwidG9rZW5zIiwiaWdub3JlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxpREFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJDLG1CQUFtQixFQUFFQyxPQUFPO2dCQUN4RCxJQUFNQyxhQUFhRixxQkFBcUIsR0FBRztnQkFFM0MsdUJBSmlCRiw2Q0FJWEssY0FBTixJQUFLLGFBQVlELFlBQVlEO1lBQy9COzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CO2dCQUNsRCxJQUFNQyxPQUFPRCxzQkFDUEUsU0FBUyxNQUNUQyxvQ0FBb0NDLG1CQUFTLENBQUNDLGlCQUFpQixDQVZwRFosa0NBVXVGUSxNQUFNQztnQkFFOUcsT0FBT0M7WUFDVDs7O1dBYm1CVjtFQUF5Q1csbUJBQVMifQ==