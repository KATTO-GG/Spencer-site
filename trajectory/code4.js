gdjs.win2Code = {};
gdjs.win2Code.localVariables = [];
gdjs.win2Code.idToCallbackMap = new Map();
gdjs.win2Code.GDNewSprite6Objects1= [];
gdjs.win2Code.GDNewSprite6Objects2= [];
gdjs.win2Code.GDNewSprite9Objects1= [];
gdjs.win2Code.GDNewSprite9Objects2= [];
gdjs.win2Code.GDNewTiledSpriteObjects1= [];
gdjs.win2Code.GDNewTiledSpriteObjects2= [];
gdjs.win2Code.GDNewSpriteObjects1= [];
gdjs.win2Code.GDNewSpriteObjects2= [];
gdjs.win2Code.GDNewSprite3Objects1= [];
gdjs.win2Code.GDNewSprite3Objects2= [];
gdjs.win2Code.GDNewSprite4Objects1= [];
gdjs.win2Code.GDNewSprite4Objects2= [];
gdjs.win2Code.GDNewTiledSprite2Objects1= [];
gdjs.win2Code.GDNewTiledSprite2Objects2= [];
gdjs.win2Code.GDNewSprite2Objects1= [];
gdjs.win2Code.GDNewSprite2Objects2= [];
gdjs.win2Code.GDNewSprite5Objects1= [];
gdjs.win2Code.GDNewSprite5Objects2= [];
gdjs.win2Code.GDNewSprite7Objects1= [];
gdjs.win2Code.GDNewSprite7Objects2= [];
gdjs.win2Code.GDNewSprite8Objects1= [];
gdjs.win2Code.GDNewSprite8Objects2= [];
gdjs.win2Code.GDNewSprite6Objects1= [];
gdjs.win2Code.GDNewSprite6Objects2= [];
gdjs.win2Code.GDNewSprite9Objects1= [];
gdjs.win2Code.GDNewSprite9Objects2= [];
gdjs.win2Code.GDvolumesliderObjects1= [];
gdjs.win2Code.GDvolumesliderObjects2= [];
gdjs.win2Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.win2Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.win2Code.GDNewSprite9_9595nextObjects1= [];
gdjs.win2Code.GDNewSprite9_9595nextObjects2= [];
gdjs.win2Code.GDNewSprite45Objects1= [];
gdjs.win2Code.GDNewSprite45Objects2= [];
gdjs.win2Code.GDNewSprite11Objects1= [];
gdjs.win2Code.GDNewSprite11Objects2= [];


gdjs.win2Code.mapOfGDgdjs_9546win2Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.win2Code.GDNewSprite9Objects1});
gdjs.win2Code.asyncCallback14476628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.win2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}
gdjs.win2Code.localVariables.length = 0;
}
gdjs.win2Code.idToCallbackMap.set(14476628, gdjs.win2Code.asyncCallback14476628);
gdjs.win2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.win2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.win2Code.asyncCallback14476628(runtimeScene, asyncObjectsList)), 14476628, asyncObjectsList);
}
}

}


};gdjs.win2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.win2Code.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.win2Code.mapOfGDgdjs_9546win2Code_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.win2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.win2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win2Code.GDNewSprite6Objects1.length = 0;
gdjs.win2Code.GDNewSprite6Objects2.length = 0;
gdjs.win2Code.GDNewSprite9Objects1.length = 0;
gdjs.win2Code.GDNewSprite9Objects2.length = 0;
gdjs.win2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win2Code.GDNewSpriteObjects1.length = 0;
gdjs.win2Code.GDNewSpriteObjects2.length = 0;
gdjs.win2Code.GDNewSprite3Objects1.length = 0;
gdjs.win2Code.GDNewSprite3Objects2.length = 0;
gdjs.win2Code.GDNewSprite4Objects1.length = 0;
gdjs.win2Code.GDNewSprite4Objects2.length = 0;
gdjs.win2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win2Code.GDNewSprite2Objects1.length = 0;
gdjs.win2Code.GDNewSprite2Objects2.length = 0;
gdjs.win2Code.GDNewSprite5Objects1.length = 0;
gdjs.win2Code.GDNewSprite5Objects2.length = 0;
gdjs.win2Code.GDNewSprite7Objects1.length = 0;
gdjs.win2Code.GDNewSprite7Objects2.length = 0;
gdjs.win2Code.GDNewSprite8Objects1.length = 0;
gdjs.win2Code.GDNewSprite8Objects2.length = 0;
gdjs.win2Code.GDNewSprite6Objects1.length = 0;
gdjs.win2Code.GDNewSprite6Objects2.length = 0;
gdjs.win2Code.GDNewSprite9Objects1.length = 0;
gdjs.win2Code.GDNewSprite9Objects2.length = 0;
gdjs.win2Code.GDvolumesliderObjects1.length = 0;
gdjs.win2Code.GDvolumesliderObjects2.length = 0;
gdjs.win2Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win2Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win2Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win2Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win2Code.GDNewSprite45Objects1.length = 0;
gdjs.win2Code.GDNewSprite45Objects2.length = 0;
gdjs.win2Code.GDNewSprite11Objects1.length = 0;
gdjs.win2Code.GDNewSprite11Objects2.length = 0;

gdjs.win2Code.eventsList1(runtimeScene);
gdjs.win2Code.GDNewSprite6Objects1.length = 0;
gdjs.win2Code.GDNewSprite6Objects2.length = 0;
gdjs.win2Code.GDNewSprite9Objects1.length = 0;
gdjs.win2Code.GDNewSprite9Objects2.length = 0;
gdjs.win2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win2Code.GDNewSpriteObjects1.length = 0;
gdjs.win2Code.GDNewSpriteObjects2.length = 0;
gdjs.win2Code.GDNewSprite3Objects1.length = 0;
gdjs.win2Code.GDNewSprite3Objects2.length = 0;
gdjs.win2Code.GDNewSprite4Objects1.length = 0;
gdjs.win2Code.GDNewSprite4Objects2.length = 0;
gdjs.win2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win2Code.GDNewSprite2Objects1.length = 0;
gdjs.win2Code.GDNewSprite2Objects2.length = 0;
gdjs.win2Code.GDNewSprite5Objects1.length = 0;
gdjs.win2Code.GDNewSprite5Objects2.length = 0;
gdjs.win2Code.GDNewSprite7Objects1.length = 0;
gdjs.win2Code.GDNewSprite7Objects2.length = 0;
gdjs.win2Code.GDNewSprite8Objects1.length = 0;
gdjs.win2Code.GDNewSprite8Objects2.length = 0;
gdjs.win2Code.GDNewSprite6Objects1.length = 0;
gdjs.win2Code.GDNewSprite6Objects2.length = 0;
gdjs.win2Code.GDNewSprite9Objects1.length = 0;
gdjs.win2Code.GDNewSprite9Objects2.length = 0;
gdjs.win2Code.GDvolumesliderObjects1.length = 0;
gdjs.win2Code.GDvolumesliderObjects2.length = 0;
gdjs.win2Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win2Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win2Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win2Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win2Code.GDNewSprite45Objects1.length = 0;
gdjs.win2Code.GDNewSprite45Objects2.length = 0;
gdjs.win2Code.GDNewSprite11Objects1.length = 0;
gdjs.win2Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['win2Code'] = gdjs.win2Code;
