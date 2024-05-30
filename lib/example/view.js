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
var _index = require("../index");
var _easylayout = require("easy-layout");
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/html"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var divisionMarkdownNode = node, divisionMarkdownNodes = [
                        divisionMarkdownNode
                    ], context = {
                        tokens: tokens,
                        importer: importer,
                        divisionMarkdownNodes: divisionMarkdownNodes
                    };
                    divisionMarkdownNode.resolveIncludes(context);
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        divisionMarkdownNode.resolveEmbeddings(context);
                        divisionMarkdownNode.createFootnotes(context);
                    });
                    divisionMarkdownNodes.some(function(divisionMarkdownNode) {
                        var contentsCreated = divisionMarkdownNode.createContents(context);
                        if (contentsCreated) {
                            return true;
                        }
                    });
                    var htmls = [], domElements = [];
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                        htmls.push(html);
                        domElements.push(domElement);
                    });
                    this.updateXMP(htmls);
                    this.updatePreviewDiv(domElements);
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                    this.clearMarkdownParseTreeTextarea();
                }
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_tabButtons.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdownStyle", "min-height: initial;\n");
_define_property(View, "initialMarkdown", "\n[https://en.wikipedia.org/wiki/Backus-Naur_form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "## Secondary heading\n\n### Tertiary heading\n", tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgICAgICAgICB9O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5jcmVhdGVGb290bm90ZXMoY29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzQ3JlYXRlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50c0NyZWF0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgICAgICBkb21FbGVtZW50cyA9IFtdO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbHMucHVzaChodG1sKTtcblxuICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlWE1QKGh0bWxzKTtcblxuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRvbUVsZW1lbnRzKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIEhUTUxcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8SFRNTERpdi8+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgQ1NTXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxDU1NUZXh0YXJlYS8+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxQcmV2aWV3RGl2Lz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYG1pbi1oZWlnaHQ6IGluaXRpYWw7XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgXG5baHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFja3VzLU5hdXJfZm9ybV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFja3VzJUUyJTgwJTkzTmF1cl9mb3JtKVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgIyMgU2Vjb25kYXJ5IGhlYWRpbmdcblxuIyMjIFRlcnRpYXJ5IGhlYWRpbmdcbmAsXG4gICAgICAgIHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBpbXBvcnRlZE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLFxuICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IFwiaW50cm9kdWN0aW9uXCI7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgaW1wb3J0ZWROb2RlLFxuICAgIGltcG9ydGVkVG9rZW5zLFxuICAgIGltcG9ydGVkQ2xhc3NOYW1lXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJWaWV3IiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZU1hcmtkb3duIiwiZ2V0TWFya2Rvd24iLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbXBvcnRlciIsInJlc29sdmVJbmNsdWRlcyIsImZvckVhY2giLCJyZXNvbHZlRW1iZWRkaW5ncyIsImNyZWF0ZUZvb3Rub3RlcyIsInNvbWUiLCJjb250ZW50c0NyZWF0ZWQiLCJjcmVhdGVDb250ZW50cyIsImh0bWxzIiwiZG9tRWxlbWVudHMiLCJodG1sIiwiYXNIVE1MIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJwdXNoIiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVNYXJrZG93bkNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJIVE1MRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiQ1NTVGV4dGFyZWEiLCJQcmV2aWV3RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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