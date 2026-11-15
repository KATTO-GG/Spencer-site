gdjs.blankCode = {};
gdjs.blankCode.localVariables = [];
gdjs.blankCode.idToCallbackMap = new Map();


gdjs.blankCode.eventsList0 = function(runtimeScene) {

};

gdjs.blankCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.blankCode.eventsList0(runtimeScene);


return;

}

gdjs['blankCode'] = gdjs.blankCode;
