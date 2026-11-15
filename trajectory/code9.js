gdjs.win4Code = {};
gdjs.win4Code.localVariables = [];
gdjs.win4Code.idToCallbackMap = new Map();
gdjs.win4Code.GDNewSprite6Objects1= [];
gdjs.win4Code.GDNewSprite6Objects2= [];
gdjs.win4Code.GDNewSprite9Objects1= [];
gdjs.win4Code.GDNewSprite9Objects2= [];
gdjs.win4Code.GDNewTiledSpriteObjects1= [];
gdjs.win4Code.GDNewTiledSpriteObjects2= [];
gdjs.win4Code.GDNewSpriteObjects1= [];
gdjs.win4Code.GDNewSpriteObjects2= [];
gdjs.win4Code.GDNewSprite3Objects1= [];
gdjs.win4Code.GDNewSprite3Objects2= [];
gdjs.win4Code.GDNewSprite4Objects1= [];
gdjs.win4Code.GDNewSprite4Objects2= [];
gdjs.win4Code.GDNewTiledSprite2Objects1= [];
gdjs.win4Code.GDNewTiledSprite2Objects2= [];
gdjs.win4Code.GDNewSprite2Objects1= [];
gdjs.win4Code.GDNewSprite2Objects2= [];
gdjs.win4Code.GDNewSprite5Objects1= [];
gdjs.win4Code.GDNewSprite5Objects2= [];
gdjs.win4Code.GDNewSprite7Objects1= [];
gdjs.win4Code.GDNewSprite7Objects2= [];
gdjs.win4Code.GDNewSprite8Objects1= [];
gdjs.win4Code.GDNewSprite8Objects2= [];
gdjs.win4Code.GDNewSprite6Objects1= [];
gdjs.win4Code.GDNewSprite6Objects2= [];
gdjs.win4Code.GDNewSprite9Objects1= [];
gdjs.win4Code.GDNewSprite9Objects2= [];
gdjs.win4Code.GDvolumesliderObjects1= [];
gdjs.win4Code.GDvolumesliderObjects2= [];
gdjs.win4Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.win4Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.win4Code.GDNewSprite9_9595nextObjects1= [];
gdjs.win4Code.GDNewSprite9_9595nextObjects2= [];
gdjs.win4Code.GDNewSprite45Objects1= [];
gdjs.win4Code.GDNewSprite45Objects2= [];
gdjs.win4Code.GDNewSprite11Objects1= [];
gdjs.win4Code.GDNewSprite11Objects2= [];


gdjs.win4Code.mapOfGDgdjs_9546win4Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.win4Code.GDNewSprite9Objects1});
gdjs.win4Code.asyncCallback14386180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.win4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 5", false);
}
gdjs.win4Code.localVariables.length = 0;
}
gdjs.win4Code.idToCallbackMap.set(14386180, gdjs.win4Code.asyncCallback14386180);
gdjs.win4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.win4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.win4Code.asyncCallback14386180(runtimeScene, asyncObjectsList)), 14386180, asyncObjectsList);
}
}

}


};gdjs.win4Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.win4Code.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.win4Code.mapOfGDgdjs_9546win4Code_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.win4Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.win4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win4Code.GDNewSprite6Objects1.length = 0;
gdjs.win4Code.GDNewSprite6Objects2.length = 0;
gdjs.win4Code.GDNewSprite9Objects1.length = 0;
gdjs.win4Code.GDNewSprite9Objects2.length = 0;
gdjs.win4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win4Code.GDNewSpriteObjects1.length = 0;
gdjs.win4Code.GDNewSpriteObjects2.length = 0;
gdjs.win4Code.GDNewSprite3Objects1.length = 0;
gdjs.win4Code.GDNewSprite3Objects2.length = 0;
gdjs.win4Code.GDNewSprite4Objects1.length = 0;
gdjs.win4Code.GDNewSprite4Objects2.length = 0;
gdjs.win4Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win4Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win4Code.GDNewSprite2Objects1.length = 0;
gdjs.win4Code.GDNewSprite2Objects2.length = 0;
gdjs.win4Code.GDNewSprite5Objects1.length = 0;
gdjs.win4Code.GDNewSprite5Objects2.length = 0;
gdjs.win4Code.GDNewSprite7Objects1.length = 0;
gdjs.win4Code.GDNewSprite7Objects2.length = 0;
gdjs.win4Code.GDNewSprite8Objects1.length = 0;
gdjs.win4Code.GDNewSprite8Objects2.length = 0;
gdjs.win4Code.GDNewSprite6Objects1.length = 0;
gdjs.win4Code.GDNewSprite6Objects2.length = 0;
gdjs.win4Code.GDNewSprite9Objects1.length = 0;
gdjs.win4Code.GDNewSprite9Objects2.length = 0;
gdjs.win4Code.GDvolumesliderObjects1.length = 0;
gdjs.win4Code.GDvolumesliderObjects2.length = 0;
gdjs.win4Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win4Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win4Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win4Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win4Code.GDNewSprite45Objects1.length = 0;
gdjs.win4Code.GDNewSprite45Objects2.length = 0;
gdjs.win4Code.GDNewSprite11Objects1.length = 0;
gdjs.win4Code.GDNewSprite11Objects2.length = 0;

gdjs.win4Code.eventsList1(runtimeScene);
gdjs.win4Code.GDNewSprite6Objects1.length = 0;
gdjs.win4Code.GDNewSprite6Objects2.length = 0;
gdjs.win4Code.GDNewSprite9Objects1.length = 0;
gdjs.win4Code.GDNewSprite9Objects2.length = 0;
gdjs.win4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win4Code.GDNewSpriteObjects1.length = 0;
gdjs.win4Code.GDNewSpriteObjects2.length = 0;
gdjs.win4Code.GDNewSprite3Objects1.length = 0;
gdjs.win4Code.GDNewSprite3Objects2.length = 0;
gdjs.win4Code.GDNewSprite4Objects1.length = 0;
gdjs.win4Code.GDNewSprite4Objects2.length = 0;
gdjs.win4Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win4Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win4Code.GDNewSprite2Objects1.length = 0;
gdjs.win4Code.GDNewSprite2Objects2.length = 0;
gdjs.win4Code.GDNewSprite5Objects1.length = 0;
gdjs.win4Code.GDNewSprite5Objects2.length = 0;
gdjs.win4Code.GDNewSprite7Objects1.length = 0;
gdjs.win4Code.GDNewSprite7Objects2.length = 0;
gdjs.win4Code.GDNewSprite8Objects1.length = 0;
gdjs.win4Code.GDNewSprite8Objects2.length = 0;
gdjs.win4Code.GDNewSprite6Objects1.length = 0;
gdjs.win4Code.GDNewSprite6Objects2.length = 0;
gdjs.win4Code.GDNewSprite9Objects1.length = 0;
gdjs.win4Code.GDNewSprite9Objects2.length = 0;
gdjs.win4Code.GDvolumesliderObjects1.length = 0;
gdjs.win4Code.GDvolumesliderObjects2.length = 0;
gdjs.win4Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win4Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win4Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win4Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win4Code.GDNewSprite45Objects1.length = 0;
gdjs.win4Code.GDNewSprite45Objects2.length = 0;
gdjs.win4Code.GDNewSprite11Objects1.length = 0;
gdjs.win4Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['win4Code'] = gdjs.win4Code;
