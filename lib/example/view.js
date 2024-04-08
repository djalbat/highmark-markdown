"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easylayout = require("easy-layout");
var _xmp = /*#__PURE__*/ _interop_require_default(require("./view/xmp"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdown"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
var _index = require("../index");
var _constants = require("./constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var bnf = _index.MarkdownParser.bnf, entries = _index.MarkdownLexer.entries;
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                var parseTree = null;
                if (node !== null) {
                    var divisionClassName = _constants.DOCUMENT_DIVISION_CLASS_NAME, indent = _constants.EMPTY_STRING, context = {
                        tokens: tokens,
                        importer: importer,
                        divisionClassName: divisionClassName
                    }, html = node.asHTML(indent, context), domElement = node.createDOMElement(context);
                    this.xmpHTML(html);
                    this.updatePreviewDiv(domElement);
                    parseTree = node.asParseTree(tokens);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                }
                this.setParseTree(parseTree);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_xmp.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown"), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onKeyUp: this.keyUpHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialMarkdown = this.constructor.initialMarkdown, markdown = initialMarkdown, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setMarkdown(markdown);
                this.setLexicalEntries(lexicalEntries);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", "```\nSome code.\n```\n\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
var divisionContent = "\n\nHello, world!\n\n";
function importer(path, indent, context) {
    var content = divisionContent, tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens), divisionClassName = _constants.FRONT_MATTER_DIVISION_CLASS_NAME; //
    context = {
        tokens: tokens,
        divisionClassName: divisionClassName
    };
    var html = node.asHTML(indent, context);
    return html;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuL3ZpZXcveG1wXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9tYXJrZG93blwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IE1hcmtkb3duTGV4ZXIsIE1hcmtkb3duUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPQ1VNRU5UX0RJVklTSU9OX0NMQVNTX05BTUUsIEZST05UX01BVFRFUl9ESVZJU0lPTl9DTEFTU19OQU1FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBNYXJrZG93blBhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gTWFya2Rvd25MZXhlcjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IERPQ1VNRU5UX0RJVklTSU9OX0NMQVNTX05BTUUsXG4gICAgICAgICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGh0bWwgPSBub2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IG5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgdGhpcy54bXBIVE1MKGh0bWwpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZG9tRWxlbWVudCk7XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WE1QLz5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxQcmV2aWV3RGl2Lz5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIE1hcmtkb3duXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxNYXJrZG93blRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93biwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgXFxgXFxgXFxgXG5Tb21lIGNvZGUuXG5cXGBcXGBcXGBcblxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuY29uc3QgZGl2aXNpb25Db250ZW50ID0gYFxuXG5IZWxsbywgd29ybGQhXG5cbmA7XG5cbmZ1bmN0aW9uIGltcG9ydGVyKHBhdGgsIGluZGVudCwgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50ID0gZGl2aXNpb25Db250ZW50LCAgLy8vXG4gICAgICAgIHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IEZST05UX01BVFRFUl9ESVZJU0lPTl9DTEFTU19OQU1FOyAgLy9cblxuICBjb250ZXh0ID0geyAvLy9cbiAgICB0b2tlbnMsXG4gICAgZGl2aXNpb25DbGFzc05hbWVcbiAgfVxuXG4gIGNvbnN0IGh0bWwgPSBub2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gIHJldHVybiBodG1sO1xufSJdLCJuYW1lcyI6WyJibmYiLCJNYXJrZG93blBhcnNlciIsImVudHJpZXMiLCJNYXJrZG93bkxleGVyIiwibWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwibWFya2Rvd24iLCJnZXRNYXJrZG93biIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiZGl2aXNpb25DbGFzc05hbWUiLCJET0NVTUVOVF9ESVZJU0lPTl9DTEFTU19OQU1FIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY29udGV4dCIsImltcG9ydGVyIiwiaHRtbCIsImFzSFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwieG1wSFRNTCIsInVwZGF0ZVByZXZpZXdEaXYiLCJhc1BhcnNlVHJlZSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2Iiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiWE1QIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiUHJldmlld0RpdiIsIk1hcmtkb3duVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxNYXJrZG93biIsImNvbnN0cnVjdG9yIiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRNYXJrZG93biIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImRpdmlzaW9uQ29udGVudCIsInBhdGgiLCJGUk9OVF9NQVRURVJfRElWSVNJT05fQ0xBU1NfTkFNRSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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