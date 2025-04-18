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
var _occamdom = require("occam-dom");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _queries = /*#__PURE__*/ _interop_require_default(require("../queries"));
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _classFromOuterNode = /*#__PURE__*/ _interop_require_default(require("../classFromOuterNode"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _inner = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/markdown/inner"));
var _query = require("../utilities/query");
var _constants = require("./constants");
var _processing = require("../utilities/processing");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearInnerMarkdownParseTreeTextarea();
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), pathToURL = function(path) {
                    return "https://static.djalbat.com/".concat(path);
                }, context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                }, node = divisionMarkdownNode, nodes = (0, _query.nodesFromNodeAndQueries)(node, _queries.default), topmostHTMLNode = topmostNodeFromOuterNodes(_classFromOuterNode.default, nodes);
                this.updateXMP(topmostHTMLNode, context);
                this.updatePreviewDiv(topmostHTMLNode, context);
                this.updatePlainTextTextarea(topmostHTMLNode, context);
                var length = null, parseTree = topmostHTMLNode.asParseTree(), innerMarkdownParseTree = parseTree; ///
                this.updatePageButtonsDiv(length, index);
                this.updateInnerMarkdownParseTreeTextarea(innerMarkdownParseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
                this.setTokens(tokens);
                if (node !== null) {
                    // const divisionMarkdownNode = node,  ///
                    //       charactersPerLine = CHARACTERS_PER_LINE,
                    //       contentsDepth = CONTENTS_DEPTH,
                    //       linesPerPage = LINES_PER_PAGE,
                    //       context = {
                    //         tokens,
                    //         importer,
                    //         indexOptions,
                    //         linesPerPage,
                    //         contentsDepth,
                    //         nodeFromTokens,
                    //         tokensFromContent,
                    //         charactersPerLine
                    //       },
                    //       markdownNodes = postprocess(divisionMarkdownNode, context),
                    //       divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes);
                    //
                    // this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var divisionMarkdownNode = node, divisionMarkdownNodes = [
                        divisionMarkdownNode
                    ], context = {
                        tokens: tokens,
                        importer: _importer.default,
                        nodeFromTokens: nodeFromTokens,
                        tokensFromContent: tokensFromContent
                    };
                    divisionMarkdownNode.resolveEmbeddings(context);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var parseTree = divisionMarkdownNode.asParseTree(tokens), outerMarkdownParseTree = parseTree; ///
                    this.updateOuterMarkdownParseTreeTextarea(outerMarkdownParseTree);
                    var index = 0, length = divisionMarkdownNodes.length;
                    if (length > 0) {
                        this.updatePage(index);
                        this.updatePageButtonsDiv(length);
                    }
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearPlainTextTextarea();
                    this.clearOuterMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
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
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
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
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_inner.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 100%;\nfont-size: 2rem;  \n\nblockListing {\n  colour: white;\n  text-align: left;\n  font-family: monospace;\n  background-colour: black;\n}\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgcXVlcmllcyBmcm9tIFwiLi4vcXVlcmllc1wiO1xuaW1wb3J0IGltcG9ydGVyIGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgaW5kZXhPcHRpb25zIGZyb20gXCIuL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IFBhZ2VCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3BhZ2VCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBDU1NDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2Nzc1wiO1xuaW1wb3J0IEhUTUxDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2h0bWxcIjtcbmltcG9ydCBMZWZ0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL2xlZnRcIjtcbmltcG9ydCBSaWdodFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9yaWdodFwiO1xuaW1wb3J0IENsYXNzRnJvbU91dGVyTm9kZSBmcm9tIFwiLi4vY2xhc3NGcm9tT3V0ZXJOb2RlXCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IFBsYWluVGV4dENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IElubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9tYXJrZG93bi9pbm5lclwiO1xuXG5pbXBvcnQgeyBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ09OVEVOVFNfREVQVEgsIENIQVJBQ1RFUlNfUEVSX0xJTkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBvc3Rwcm9jZXNzLCBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvY2Vzc2luZ1wiO1xuXG5jb25zdCB7IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IG1hcmtkb3duTGV4ZXIgPSBNYXJrZG93bkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blBhcnNlciA9IE1hcmtkb3duUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBjbGVhclBhZ2UoKSB7XG4gICAgdGhpcy5jbGVhclhNUCgpO1xuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG4gICAgdGhpcy5jbGVhcklubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcGF0aFRvVVJMID0gKHBhdGgpID0+IGBodHRwczovL3N0YXRpYy5kamFsYmF0LmNvbS8ke3BhdGh9YCxcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgcGF0aFRvVVJMXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBub2Rlcyk7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUCh0b3Btb3N0SFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBsYWluVGV4dFRleHRhcmVhKHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBsZW5ndGggPSBudWxsLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRvcG1vc3RIVE1MTm9kZS5hc1BhcnNlVHJlZSgpLFxuICAgICAgICAgIGlubmVyTWFya2Rvd25QYXJzZVRyZWUgPSBwYXJzZVRyZWU7IC8vL1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIHRoaXMudXBkYXRlSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKGlubmVyTWFya2Rvd25QYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAvLyAgICAgICBjaGFyYWN0ZXJzUGVyTGluZSA9IENIQVJBQ1RFUlNfUEVSX0xJTkUsXG4gICAgICAvLyAgICAgICBjb250ZW50c0RlcHRoID0gQ09OVEVOVFNfREVQVEgsXG4gICAgICAvLyAgICAgICBsaW5lc1BlclBhZ2UgPSBMSU5FU19QRVJfUEFHRSxcbiAgICAgIC8vICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAvLyAgICAgICAgIHRva2VucyxcbiAgICAgIC8vICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAvLyAgICAgICAgIGluZGV4T3B0aW9ucyxcbiAgICAgIC8vICAgICAgICAgbGluZXNQZXJQYWdlLFxuICAgICAgLy8gICAgICAgICBjb250ZW50c0RlcHRoLFxuICAgICAgLy8gICAgICAgICBub2RlRnJvbVRva2VucyxcbiAgICAgIC8vICAgICAgICAgdG9rZW5zRnJvbUNvbnRlbnQsXG4gICAgICAvLyAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lXG4gICAgICAvLyAgICAgICB9LFxuICAgICAgLy8gICAgICAgbWFya2Rvd25Ob2RlcyA9IHBvc3Rwcm9jZXNzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgIC8vICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMpO1xuICAgICAgLy9cbiAgICAgIC8vIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW1xuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIG5vZGVGcm9tVG9rZW5zLFxuICAgICAgICAgICAgICB0b2tlbnNGcm9tQ29udGVudFxuICAgICAgICAgICAgfTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgICBvdXRlck1hcmtkb3duUGFyc2VUcmVlID0gcGFyc2VUcmVlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGVPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEob3V0ZXJNYXJrZG93blBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBtYXJrZG93blN0eWxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1ByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRva2VucyxcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8TGVmdFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tQ1NTPXt0aGlzLmNzc0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tSFRNTD17dGhpcy5odG1sQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QcmV2aWV3PXt0aGlzLnByZXZpZXdDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVBsYWluVGV4dD17dGhpcy5wbGFpblRleHRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYWdlQnV0dG9uc0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPElubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGB3aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbmZvbnQtc2l6ZTogMnJlbTsgIFxuXG5ibG9ja0xpc3Rpbmcge1xuICBjb2xvdXI6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBiYWNrZ3JvdW5kLWNvbG91cjogYmxhY2s7XG59XG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSA9IG51bGwpIHtcbiAgY29uc3QgcnVsZU1hcCA9IG1hcmtkb3duUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgc3RhcnRSdWxlID0gKHN0YXJ0UnVsZU5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBub2RlO1xufVxuIl0sIm5hbWVzIjpbInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlVXRpbGl0aWVzIiwibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwiY2xlYXJQYWdlIiwidXBkYXRlUGFnZSIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJwYXRoVG9VUkwiLCJwYXRoIiwiY29udGV4dCIsIm5vZGUiLCJub2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzIiwicXVlcmllcyIsInRvcG1vc3RIVE1MTm9kZSIsIkNsYXNzRnJvbU91dGVyTm9kZSIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsImxlbmd0aCIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiaW5uZXJNYXJrZG93blBhcnNlVHJlZSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwidXBkYXRlSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJ0b2tlbmlzZSIsInBhcnNlIiwic2V0VG9rZW5zIiwiaW1wb3J0ZXIiLCJub2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJzZXREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJvdXRlck1hcmtkb3duUGFyc2VUcmVlIiwidXBkYXRlT3V0ZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhck91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwicHJvcGVydGllcyIsImdldE1hcmtkb3duU3R5bGUiLCJzZXRDU1MiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVNYXJrZG93bkNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93UHJldmlld0NvbnRhaW5lckRpdiIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93SFRNTENvbnRhaW5lckRpdiIsInNob3dDU1NDb250YWluZXJEaXYiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIkxlZnRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tQ1NTIiwib25DdXN0b21IVE1MIiwib25DdXN0b21QcmV2aWV3Iiwib25DdXN0b21QbGFpblRleHQiLCJQYWdlQnV0dG9uc0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsIkNTU0NvbnRhaW5lckRpdiIsIkhUTUxDb250YWluZXJEaXYiLCJQcmV2aWV3Q29udGFpbmVyRGl2IiwiUGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwic3RhcnRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpV0E7OztlQUFBOzs7b0VBL1ZzQjtvQkFFRTt3QkFDTTswQkFDc0M7cUJBQ21COzhEQUVuRTtnRUFDQzttRUFDSTtrRUFDRTsyREFDQzswREFDQTsyREFDQzs0REFDQzs0REFDQzt5RUFDQTs4REFDQzsrREFDQztnRUFDQztvRUFDSTs0REFDSztxQkFHSDt5QkFDNEI7MEJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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