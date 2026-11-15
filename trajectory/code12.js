gdjs.win6Code = {};
gdjs.win6Code.localVariables = [];
gdjs.win6Code.idToCallbackMap = new Map();
gdjs.win6Code.GDNewSprite6Objects1= [];
gdjs.win6Code.GDNewSprite6Objects2= [];
gdjs.win6Code.GDNewSprite9Objects1= [];
gdjs.win6Code.GDNewSprite9Objects2= [];
gdjs.win6Code.GDNewTiledSpriteObjects1= [];
gdjs.win6Code.GDNewTiledSpriteObjects2= [];
gdjs.win6Code.GDNewSpriteObjects1= [];
gdjs.win6Code.GDNewSpriteObjects2= [];
gdjs.win6Code.GDNewSprite3Objects1= [];
gdjs.win6Code.GDNewSprite3Objects2= [];
gdjs.win6Code.GDNewSprite4Objects1= [];
gdjs.win6Code.GDNewSprite4Objects2= [];
gdjs.win6Code.GDNewTiledSprite2Objects1= [];
gdjs.win6Code.GDNewTiledSprite2Objects2= [];
gdjs.win6Code.GDNewSprite2Objects1= [];
gdjs.win6Code.GDNewSprite2Objects2= [];
gdjs.win6Code.GDNewSprite5Objects1= [];
gdjs.win6Code.GDNewSprite5Objects2= [];
gdjs.win6Code.GDNewSprite7Objects1= [];
gdjs.win6Code.GDNewSprite7Objects2= [];
gdjs.win6Code.GDNewSprite8Objects1= [];
gdjs.win6Code.GDNewSprite8Objects2= [];
gdjs.win6Code.GDNewSprite6Objects1= [];
gdjs.win6Code.GDNewSprite6Objects2= [];
gdjs.win6Code.GDNewSprite9Objects1= [];
gdjs.win6Code.GDNewSprite9Objects2= [];
gdjs.win6Code.GDvolumesliderObjects1= [];
gdjs.win6Code.GDvolumesliderObjects2= [];
gdjs.win6Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.win6Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.win6Code.GDNewSprite9_9595nextObjects1= [];
gdjs.win6Code.GDNewSprite9_9595nextObjects2= [];
gdjs.win6Code.GDNewSprite45Objects1= [];
gdjs.win6Code.GDNewSprite45Objects2= [];
gdjs.win6Code.GDNewSprite11Objects1= [];
gdjs.win6Code.GDNewSprite11Objects2= [];


gdjs.win6Code.mapOfGDgdjs_9546win6Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.win6Code.GDNewSprite9Objects1});
gdjs.win6Code.asyncCallback11768340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.win6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 7", false);
}
gdjs.win6Code.localVariables.length = 0;
}
gdjs.win6Code.idToCallbackMap.set(11768340, gdjs.win6Code.asyncCallback11768340);
gdjs.win6Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.win6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.win6Code.asyncCallback11768340(runtimeScene, asyncObjectsList)), 11768340, asyncObjectsList);
}
}

}


};gdjs.win6Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.win6Code.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.win6Code.mapOfGDgdjs_9546win6Code_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.win6Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.win6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win6Code.GDNewSprite6Objects1.length = 0;
gdjs.win6Code.GDNewSprite6Objects2.length = 0;
gdjs.win6Code.GDNewSprite9Objects1.length = 0;
gdjs.win6Code.GDNewSprite9Objects2.length = 0;
gdjs.win6Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win6Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win6Code.GDNewSpriteObjects1.length = 0;
gdjs.win6Code.GDNewSpriteObjects2.length = 0;
gdjs.win6Code.GDNewSprite3Objects1.length = 0;
gdjs.win6Code.GDNewSprite3Objects2.length = 0;
gdjs.win6Code.GDNewSprite4Objects1.length = 0;
gdjs.win6Code.GDNewSprite4Objects2.length = 0;
gdjs.win6Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win6Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win6Code.GDNewSprite2Objects1.length = 0;
gdjs.win6Code.GDNewSprite2Objects2.length = 0;
gdjs.win6Code.GDNewSprite5Objects1.length = 0;
gdjs.win6Code.GDNewSprite5Objects2.length = 0;
gdjs.win6Code.GDNewSprite7Objects1.length = 0;
gdjs.win6Code.GDNewSprite7Objects2.length = 0;
gdjs.win6Code.GDNewSprite8Objects1.length = 0;
gdjs.win6Code.GDNewSprite8Objects2.length = 0;
gdjs.win6Code.GDNewSprite6Objects1.length = 0;
gdjs.win6Code.GDNewSprite6Objects2.length = 0;
gdjs.win6Code.GDNewSprite9Objects1.length = 0;
gdjs.win6Code.GDNewSprite9Objects2.length = 0;
gdjs.win6Code.GDvolumesliderObjects1.length = 0;
gdjs.win6Code.GDvolumesliderObjects2.length = 0;
gdjs.win6Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win6Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win6Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win6Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win6Code.GDNewSprite45Objects1.length = 0;
gdjs.win6Code.GDNewSprite45Objects2.length = 0;
gdjs.win6Code.GDNewSprite11Objects1.length = 0;
gdjs.win6Code.GDNewSprite11Objects2.length = 0;

gdjs.win6Code.eventsList1(runtimeScene);
gdjs.win6Code.GDNewSprite6Objects1.length = 0;
gdjs.win6Code.GDNewSprite6Objects2.length = 0;
gdjs.win6Code.GDNewSprite9Objects1.length = 0;
gdjs.win6Code.GDNewSprite9Objects2.length = 0;
gdjs.win6Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win6Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win6Code.GDNewSpriteObjects1.length = 0;
gdjs.win6Code.GDNewSpriteObjects2.length = 0;
gdjs.win6Code.GDNewSprite3Objects1.length = 0;
gdjs.win6Code.GDNewSprite3Objects2.length = 0;
gdjs.win6Code.GDNewSprite4Objects1.length = 0;
gdjs.win6Code.GDNewSprite4Objects2.length = 0;
gdjs.win6Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win6Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win6Code.GDNewSprite2Objects1.length = 0;
gdjs.win6Code.GDNewSprite2Objects2.length = 0;
gdjs.win6Code.GDNewSprite5Objects1.length = 0;
gdjs.win6Code.GDNewSprite5Objects2.length = 0;
gdjs.win6Code.GDNewSprite7Objects1.length = 0;
gdjs.win6Code.GDNewSprite7Objects2.length = 0;
gdjs.win6Code.GDNewSprite8Objects1.length = 0;
gdjs.win6Code.GDNewSprite8Objects2.length = 0;
gdjs.win6Code.GDNewSprite6Objects1.length = 0;
gdjs.win6Code.GDNewSprite6Objects2.length = 0;
gdjs.win6Code.GDNewSprite9Objects1.length = 0;
gdjs.win6Code.GDNewSprite9Objects2.length = 0;
gdjs.win6Code.GDvolumesliderObjects1.length = 0;
gdjs.win6Code.GDvolumesliderObjects2.length = 0;
gdjs.win6Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win6Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win6Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win6Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win6Code.GDNewSprite45Objects1.length = 0;
gdjs.win6Code.GDNewSprite45Objects2.length = 0;
gdjs.win6Code.GDNewSprite11Objects1.length = 0;
gdjs.win6Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['win6Code'] = gdjs.win6Code;
