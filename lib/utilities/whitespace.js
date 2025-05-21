"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get assignIndexes () {
        return assignIndexes;
    },
    get deleteIndexes () {
        return deleteIndexes;
    }
});
function assignIndexes(node, context) {
    var tokens = context.tokens, outerNode = node.getOuterNode(), firstSignificantTokenIndex = outerNode.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = outerNode.getLastSignificantTokenIndex(tokens), whitespaceTokenIndexes = [];
    Object.assign(context, {
        firstSignificantTokenIndex: firstSignificantTokenIndex,
        lastSignificantTokenIndex: lastSignificantTokenIndex,
        whitespaceTokenIndexes: whitespaceTokenIndexes
    });
}
function deleteIndexes(context) {
    delete context.firstSignificantTokenIndex;
    delete context.lastSignificantTokenIndex;
    delete context.whitespaceTokenIndexes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvd2hpdGVzcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkluZGV4ZXMobm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgb3V0ZXJOb2RlID0gbm9kZS5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBvdXRlck5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG91dGVyTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHdoaXRlc3BhY2VUb2tlbkluZGV4ZXMgPSBbXTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCxcbiAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LFxuICAgIHdoaXRlc3BhY2VUb2tlbkluZGV4ZXNcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJbmRleGVzKGNvbnRleHQpIHtcbiAgZGVsZXRlIGNvbnRleHQuZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIGRlbGV0ZSBjb250ZXh0Lmxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIGRlbGV0ZSBjb250ZXh0LndoaXRlc3BhY2VUb2tlbkluZGV4ZXM7XG59Il0sIm5hbWVzIjpbImFzc2lnbkluZGV4ZXMiLCJkZWxldGVJbmRleGVzIiwibm9kZSIsImNvbnRleHQiLCJ0b2tlbnMiLCJvdXRlck5vZGUiLCJnZXRPdXRlck5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ3aGl0ZXNwYWNlVG9rZW5JbmRleGVzIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFFZ0JBO2VBQUFBOztRQWNBQztlQUFBQTs7O0FBZFQsU0FBU0QsY0FBY0UsSUFBSSxFQUFFQyxPQUFPO0lBQ3pDLElBQU0sQUFBRUMsU0FBV0QsUUFBWEMsUUFDRkMsWUFBWUgsS0FBS0ksWUFBWSxJQUM3QkMsNkJBQTZCRixVQUFVRyw2QkFBNkIsQ0FBQ0osU0FDckVLLDRCQUE0QkosVUFBVUssNEJBQTRCLENBQUNOLFNBQ25FTyx5QkFBeUIsRUFBRTtJQUVqQ0MsT0FBT0MsTUFBTSxDQUFDVixTQUFTO1FBQ3JCSSw0QkFBQUE7UUFDQUUsMkJBQUFBO1FBQ0FFLHdCQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTVixjQUFjRSxPQUFPO0lBQ25DLE9BQU9BLFFBQVFJLDBCQUEwQjtJQUN6QyxPQUFPSixRQUFRTSx5QkFBeUI7SUFDeEMsT0FBT04sUUFBUVEsc0JBQXNCO0FBQ3ZDIn0=