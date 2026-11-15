gdjs.win3Code = {};
gdjs.win3Code.localVariables = [];
gdjs.win3Code.idToCallbackMap = new Map();
gdjs.win3Code.GDNewTiledSpriteObjects1= [];
gdjs.win3Code.GDNewTiledSpriteObjects2= [];
gdjs.win3Code.GDNewSpriteObjects1= [];
gdjs.win3Code.GDNewSpriteObjects2= [];
gdjs.win3Code.GDNewSprite3Objects1= [];
gdjs.win3Code.GDNewSprite3Objects2= [];
gdjs.win3Code.GDNewSprite4Objects1= [];
gdjs.win3Code.GDNewSprite4Objects2= [];
gdjs.win3Code.GDNewTiledSprite2Objects1= [];
gdjs.win3Code.GDNewTiledSprite2Objects2= [];
gdjs.win3Code.GDNewSprite2Objects1= [];
gdjs.win3Code.GDNewSprite2Objects2= [];
gdjs.win3Code.GDNewSprite5Objects1= [];
gdjs.win3Code.GDNewSprite5Objects2= [];
gdjs.win3Code.GDNewSprite7Objects1= [];
gdjs.win3Code.GDNewSprite7Objects2= [];
gdjs.win3Code.GDNewSprite8Objects1= [];
gdjs.win3Code.GDNewSprite8Objects2= [];
gdjs.win3Code.GDNewSprite6Objects1= [];
gdjs.win3Code.GDNewSprite6Objects2= [];
gdjs.win3Code.GDNewSprite9Objects1= [];
gdjs.win3Code.GDNewSprite9Objects2= [];
gdjs.win3Code.GDvolumesliderObjects1= [];
gdjs.win3Code.GDvolumesliderObjects2= [];
gdjs.win3Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.win3Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.win3Code.GDNewSprite9_9595nextObjects1= [];
gdjs.win3Code.GDNewSprite9_9595nextObjects2= [];
gdjs.win3Code.GDNewSprite45Objects1= [];
gdjs.win3Code.GDNewSprite45Objects2= [];
gdjs.win3Code.GDNewSprite11Objects1= [];
gdjs.win3Code.GDNewSprite11Objects2= [];


gdjs.win3Code.mapOfGDgdjs_9546win3Code_9546GDNewSprite9_95959595nextObjects1Objects = Hashtable.newFrom({"NewSprite9_next": gdjs.win3Code.GDNewSprite9_9595nextObjects1});
gdjs.win3Code.asyncCallback16852988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.win3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}
gdjs.win3Code.localVariables.length = 0;
}
gdjs.win3Code.idToCallbackMap.set(16852988, gdjs.win3Code.asyncCallback16852988);
gdjs.win3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.win3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.win3Code.asyncCallback16852988(runtimeScene, asyncObjectsList)), 16852988, asyncObjectsList);
}
}

}


};gdjs.win3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9_next"), gdjs.win3Code.GDNewSprite9_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.win3Code.mapOfGDgdjs_9546win3Code_9546GDNewSprite9_95959595nextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.win3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.win3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win3Code.GDNewSpriteObjects1.length = 0;
gdjs.win3Code.GDNewSpriteObjects2.length = 0;
gdjs.win3Code.GDNewSprite3Objects1.length = 0;
gdjs.win3Code.GDNewSprite3Objects2.length = 0;
gdjs.win3Code.GDNewSprite4Objects1.length = 0;
gdjs.win3Code.GDNewSprite4Objects2.length = 0;
gdjs.win3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win3Code.GDNewSprite2Objects1.length = 0;
gdjs.win3Code.GDNewSprite2Objects2.length = 0;
gdjs.win3Code.GDNewSprite5Objects1.length = 0;
gdjs.win3Code.GDNewSprite5Objects2.length = 0;
gdjs.win3Code.GDNewSprite7Objects1.length = 0;
gdjs.win3Code.GDNewSprite7Objects2.length = 0;
gdjs.win3Code.GDNewSprite8Objects1.length = 0;
gdjs.win3Code.GDNewSprite8Objects2.length = 0;
gdjs.win3Code.GDNewSprite6Objects1.length = 0;
gdjs.win3Code.GDNewSprite6Objects2.length = 0;
gdjs.win3Code.GDNewSprite9Objects1.length = 0;
gdjs.win3Code.GDNewSprite9Objects2.length = 0;
gdjs.win3Code.GDvolumesliderObjects1.length = 0;
gdjs.win3Code.GDvolumesliderObjects2.length = 0;
gdjs.win3Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win3Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win3Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win3Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win3Code.GDNewSprite45Objects1.length = 0;
gdjs.win3Code.GDNewSprite45Objects2.length = 0;
gdjs.win3Code.GDNewSprite11Objects1.length = 0;
gdjs.win3Code.GDNewSprite11Objects2.length = 0;

gdjs.win3Code.eventsList1(runtimeScene);
gdjs.win3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win3Code.GDNewSpriteObjects1.length = 0;
gdjs.win3Code.GDNewSpriteObjects2.length = 0;
gdjs.win3Code.GDNewSprite3Objects1.length = 0;
gdjs.win3Code.GDNewSprite3Objects2.length = 0;
gdjs.win3Code.GDNewSprite4Objects1.length = 0;
gdjs.win3Code.GDNewSprite4Objects2.length = 0;
gdjs.win3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win3Code.GDNewSprite2Objects1.length = 0;
gdjs.win3Code.GDNewSprite2Objects2.length = 0;
gdjs.win3Code.GDNewSprite5Objects1.length = 0;
gdjs.win3Code.GDNewSprite5Objects2.length = 0;
gdjs.win3Code.GDNewSprite7Objects1.length = 0;
gdjs.win3Code.GDNewSprite7Objects2.length = 0;
gdjs.win3Code.GDNewSprite8Objects1.length = 0;
gdjs.win3Code.GDNewSprite8Objects2.length = 0;
gdjs.win3Code.GDNewSprite6Objects1.length = 0;
gdjs.win3Code.GDNewSprite6Objects2.length = 0;
gdjs.win3Code.GDNewSprite9Objects1.length = 0;
gdjs.win3Code.GDNewSprite9Objects2.length = 0;
gdjs.win3Code.GDvolumesliderObjects1.length = 0;
gdjs.win3Code.GDvolumesliderObjects2.length = 0;
gdjs.win3Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win3Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win3Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win3Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win3Code.GDNewSprite45Objects1.length = 0;
gdjs.win3Code.GDNewSprite45Objects2.length = 0;
gdjs.win3Code.GDNewSprite11Objects1.length = 0;
gdjs.win3Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['win3Code'] = gdjs.win3Code;
