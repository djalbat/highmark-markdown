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
var _markdown1 = require("../utilities/markdown");
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
        _define_property(_assert_this_initialized(_this), "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
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
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
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
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startOfContent = true, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule, startOfContent);
                this.setTokens(tokens);
                if (node !== null) {
                    var divisionClassName = _constants.INTRODUCTION_CLASS_NAME, divisionMarkdownNode = node; ///
                    divisionMarkdownNode.setDivisionClassName(divisionClassName);
                    var linesPerPage = _constants.LINES_PER_PAGE, charactersPerLine = _constants.CHARACTERS_PER_LINE, context = {
                        tokens: tokens,
                        importer: importer,
                        linesPerPage: linesPerPage,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNodes = (0, _markdown1.postprocess)(divisionMarkdownNode, context);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var index = 0, length = divisionMarkdownNodes.length, parseTree = divisionMarkdownNode.asParseTree(tokens);
                    this.updatePage(index);
                    this.updatePageButtonsDiv(length);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var length = null;
                this.updatePageButtonsDiv(length, index);
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], pageNumber = index + 1, tokens = this.getTokens(), context = {
                    tokens: tokens
                };
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                this.updateXMP(html);
                this.updatePreviewDiv(domElement);
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
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
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setDivisionMarkdownNodes",
            value: function setDivisionMarkdownNodes(divisionMarkdownNodes) {
                this.updateState({
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, divisionMarkdownNodes = null;
                this.setState({
                    tokens: tokens,
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
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
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "initialMarkdown", "\n\nOccam [^occam].\n   \nA paragraph to trigger the pagination.\n\nFlorence [^florence].\n\n[^occam]: Occam footnote.\n\n[^florence]: Florence footnote.\n\n@footnotes\n\n@pageNumber\n");
_define_property(View, "initialMarkdownStyle", "width: 100%;\nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "#Introuction\n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcG9zdHByb2Nlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ0hBUkFDVEVSU19QRVJfTElORSwgSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5jbGVhclBhZ2UoKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUsXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBsaW5lc1BlclBhZ2UgPSBMSU5FU19QRVJfUEFHRSxcbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gQ0hBUkFDVEVSU19QRVJfTElORSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlKGluZGV4KSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGVzW2luZGV4XSxcbiAgICAgICAgICBwYWdlTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhZ2VOdW1iZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IGh0bWwgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc0hUTUwoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sKTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0Rpdihkb21FbGVtZW50KTtcbiAgfVxuXG4gIGNsZWFyUGFnZSgpIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgSFRNTFxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxIVE1MRGl2Lz5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBDU1NcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPENTU1RleHRhcmVhLz5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgXG5cbk9jY2FtIFteb2NjYW1dLlxuICAgXG5BIHBhcmFncmFwaCB0byB0cmlnZ2VyIHRoZSBwYWdpbmF0aW9uLlxuXG5GbG9yZW5jZSBbXmZsb3JlbmNlXS5cblxuW15vY2NhbV06IE9jY2FtIGZvb3Rub3RlLlxuXG5bXmZsb3JlbmNlXTogRmxvcmVuY2UgZm9vdG5vdGUuXG5cbkBmb290bm90ZXNcblxuQHBhZ2VOdW1iZXJcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYHdpZHRoOiAxMDAlO1xucG9zaXRpb246IGFic29sdXRlO1xubWluLWhlaWdodDogMTAwJTsgIFxucGFkZGluZy10b3A6IDVyZW07ICBcbmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgI0ludHJvdWN0aW9uXG5gLFxuICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgIHN0YXJ0UnVsZSA9IG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KSxcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBpbXBvcnRlZFRva2VucyA9IHRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBcImludHJvZHVjdGlvblwiO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGltcG9ydGVkTm9kZSxcbiAgICBpbXBvcnRlZFRva2VucyxcbiAgICBpbXBvcnRlZENsYXNzTmFtZVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJjbGVhclBhZ2UiLCJ1cGRhdGVQYWdlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwic3RhcnRPZkNvbnRlbnQiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlTWFya2Rvd24iLCJnZXRNYXJrZG93biIsInNldFRva2VucyIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwibGluZXNQZXJQYWdlIiwiTElORVNfUEVSX1BBR0UiLCJjaGFyYWN0ZXJzUGVyTGluZSIsIkNIQVJBQ1RFUlNfUEVSX0xJTkUiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwb3N0cHJvY2VzcyIsInNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImxlbmd0aCIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyIiwiZ2V0VG9rZW5zIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbCIsImFzSFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiVGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIkhUTUxEaXYiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJDU1NUZXh0YXJlYSIsIlByZXZpZXdEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlTQTs7O2VBQUE7OztvRUEvUnNCO29CQUVFO3FCQUMrRDswQkFDWTsyREFFL0U7OERBQ0c7aUVBQ0E7MERBQ0M7aUVBQ0U7MkRBQ0U7NERBQ0M7K0RBQ0k7b0VBQ0s7eUJBRVY7eUJBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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