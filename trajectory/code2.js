gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.idToCallbackMap = new Map();
gdjs.winCode.GDNewSprite6Objects1= [];
gdjs.winCode.GDNewSprite6Objects2= [];
gdjs.winCode.GDNewSprite9Objects1= [];
gdjs.winCode.GDNewSprite9Objects2= [];
gdjs.winCode.GDNewTiledSpriteObjects1= [];
gdjs.winCode.GDNewTiledSpriteObjects2= [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDNewSprite3Objects1= [];
gdjs.winCode.GDNewSprite3Objects2= [];
gdjs.winCode.GDNewSprite4Objects1= [];
gdjs.winCode.GDNewSprite4Objects2= [];
gdjs.winCode.GDNewTiledSprite2Objects1= [];
gdjs.winCode.GDNewTiledSprite2Objects2= [];
gdjs.winCode.GDNewSprite2Objects1= [];
gdjs.winCode.GDNewSprite2Objects2= [];
gdjs.winCode.GDNewSprite5Objects1= [];
gdjs.winCode.GDNewSprite5Objects2= [];
gdjs.winCode.GDNewSprite7Objects1= [];
gdjs.winCode.GDNewSprite7Objects2= [];
gdjs.winCode.GDNewSprite8Objects1= [];
gdjs.winCode.GDNewSprite8Objects2= [];
gdjs.winCode.GDNewSprite6Objects1= [];
gdjs.winCode.GDNewSprite6Objects2= [];
gdjs.winCode.GDNewSprite9Objects1= [];
gdjs.winCode.GDNewSprite9Objects2= [];
gdjs.winCode.GDvolumesliderObjects1= [];
gdjs.winCode.GDvolumesliderObjects2= [];
gdjs.winCode.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.winCode.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.winCode.GDNewSprite9_9595nextObjects1= [];
gdjs.winCode.GDNewSprite9_9595nextObjects2= [];
gdjs.winCode.GDNewSprite45Objects1= [];
gdjs.winCode.GDNewSprite45Objects2= [];
gdjs.winCode.GDNewSprite11Objects1= [];
gdjs.winCode.GDNewSprite11Objects2= [];


gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.winCode.GDNewSprite9Objects1});
gdjs.winCode.asyncCallback13014716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.winCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 2", false);
}
gdjs.winCode.localVariables.length = 0;
}
gdjs.winCode.idToCallbackMap.set(13014716, gdjs.winCode.asyncCallback13014716);
gdjs.winCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.winCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.winCode.asyncCallback13014716(runtimeScene, asyncObjectsList)), 13014716, asyncObjectsList);
}
}

}


};gdjs.winCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.winCode.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.winCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewSprite6Objects1.length = 0;
gdjs.winCode.GDNewSprite6Objects2.length = 0;
gdjs.winCode.GDNewSprite9Objects1.length = 0;
gdjs.winCode.GDNewSprite9Objects2.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.winCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite5Objects1.length = 0;
gdjs.winCode.GDNewSprite5Objects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;
gdjs.winCode.GDNewSprite8Objects1.length = 0;
gdjs.winCode.GDNewSprite8Objects2.length = 0;
gdjs.winCode.GDNewSprite6Objects1.length = 0;
gdjs.winCode.GDNewSprite6Objects2.length = 0;
gdjs.winCode.GDNewSprite9Objects1.length = 0;
gdjs.winCode.GDNewSprite9Objects2.length = 0;
gdjs.winCode.GDvolumesliderObjects1.length = 0;
gdjs.winCode.GDvolumesliderObjects2.length = 0;
gdjs.winCode.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.winCode.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.winCode.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.winCode.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.winCode.GDNewSprite45Objects1.length = 0;
gdjs.winCode.GDNewSprite45Objects2.length = 0;
gdjs.winCode.GDNewSprite11Objects1.length = 0;
gdjs.winCode.GDNewSprite11Objects2.length = 0;

gdjs.winCode.eventsList1(runtimeScene);
gdjs.winCode.GDNewSprite6Objects1.length = 0;
gdjs.winCode.GDNewSprite6Objects2.length = 0;
gdjs.winCode.GDNewSprite9Objects1.length = 0;
gdjs.winCode.GDNewSprite9Objects2.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.winCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite5Objects1.length = 0;
gdjs.winCode.GDNewSprite5Objects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;
gdjs.winCode.GDNewSprite8Objects1.length = 0;
gdjs.winCode.GDNewSprite8Objects2.length = 0;
gdjs.winCode.GDNewSprite6Objects1.length = 0;
gdjs.winCode.GDNewSprite6Objects2.length = 0;
gdjs.winCode.GDNewSprite9Objects1.length = 0;
gdjs.winCode.GDNewSprite9Objects2.length = 0;
gdjs.winCode.GDvolumesliderObjects1.length = 0;
gdjs.winCode.GDvolumesliderObjects2.length = 0;
gdjs.winCode.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.winCode.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.winCode.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.winCode.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.winCode.GDNewSprite45Objects1.length = 0;
gdjs.winCode.GDNewSprite45Objects2.length = 0;
gdjs.winCode.GDNewSprite11Objects1.length = 0;
gdjs.winCode.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
