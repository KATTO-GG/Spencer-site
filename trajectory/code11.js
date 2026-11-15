gdjs.win5Code = {};
gdjs.win5Code.localVariables = [];
gdjs.win5Code.idToCallbackMap = new Map();
gdjs.win5Code.GDNewSprite6Objects1= [];
gdjs.win5Code.GDNewSprite6Objects2= [];
gdjs.win5Code.GDNewSprite9Objects1= [];
gdjs.win5Code.GDNewSprite9Objects2= [];
gdjs.win5Code.GDNewTiledSpriteObjects1= [];
gdjs.win5Code.GDNewTiledSpriteObjects2= [];
gdjs.win5Code.GDNewSpriteObjects1= [];
gdjs.win5Code.GDNewSpriteObjects2= [];
gdjs.win5Code.GDNewSprite3Objects1= [];
gdjs.win5Code.GDNewSprite3Objects2= [];
gdjs.win5Code.GDNewSprite4Objects1= [];
gdjs.win5Code.GDNewSprite4Objects2= [];
gdjs.win5Code.GDNewTiledSprite2Objects1= [];
gdjs.win5Code.GDNewTiledSprite2Objects2= [];
gdjs.win5Code.GDNewSprite2Objects1= [];
gdjs.win5Code.GDNewSprite2Objects2= [];
gdjs.win5Code.GDNewSprite5Objects1= [];
gdjs.win5Code.GDNewSprite5Objects2= [];
gdjs.win5Code.GDNewSprite7Objects1= [];
gdjs.win5Code.GDNewSprite7Objects2= [];
gdjs.win5Code.GDNewSprite8Objects1= [];
gdjs.win5Code.GDNewSprite8Objects2= [];
gdjs.win5Code.GDNewSprite6Objects1= [];
gdjs.win5Code.GDNewSprite6Objects2= [];
gdjs.win5Code.GDNewSprite9Objects1= [];
gdjs.win5Code.GDNewSprite9Objects2= [];
gdjs.win5Code.GDvolumesliderObjects1= [];
gdjs.win5Code.GDvolumesliderObjects2= [];
gdjs.win5Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.win5Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.win5Code.GDNewSprite9_9595nextObjects1= [];
gdjs.win5Code.GDNewSprite9_9595nextObjects2= [];
gdjs.win5Code.GDNewSprite45Objects1= [];
gdjs.win5Code.GDNewSprite45Objects2= [];
gdjs.win5Code.GDNewSprite11Objects1= [];
gdjs.win5Code.GDNewSprite11Objects2= [];


gdjs.win5Code.mapOfGDgdjs_9546win5Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.win5Code.GDNewSprite9Objects1});
gdjs.win5Code.asyncCallback11516980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.win5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 6", false);
}
gdjs.win5Code.localVariables.length = 0;
}
gdjs.win5Code.idToCallbackMap.set(11516980, gdjs.win5Code.asyncCallback11516980);
gdjs.win5Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.win5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.win5Code.asyncCallback11516980(runtimeScene, asyncObjectsList)), 11516980, asyncObjectsList);
}
}

}


};gdjs.win5Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.win5Code.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.win5Code.mapOfGDgdjs_9546win5Code_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.win5Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.win5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win5Code.GDNewSprite6Objects1.length = 0;
gdjs.win5Code.GDNewSprite6Objects2.length = 0;
gdjs.win5Code.GDNewSprite9Objects1.length = 0;
gdjs.win5Code.GDNewSprite9Objects2.length = 0;
gdjs.win5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win5Code.GDNewSpriteObjects1.length = 0;
gdjs.win5Code.GDNewSpriteObjects2.length = 0;
gdjs.win5Code.GDNewSprite3Objects1.length = 0;
gdjs.win5Code.GDNewSprite3Objects2.length = 0;
gdjs.win5Code.GDNewSprite4Objects1.length = 0;
gdjs.win5Code.GDNewSprite4Objects2.length = 0;
gdjs.win5Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win5Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win5Code.GDNewSprite2Objects1.length = 0;
gdjs.win5Code.GDNewSprite2Objects2.length = 0;
gdjs.win5Code.GDNewSprite5Objects1.length = 0;
gdjs.win5Code.GDNewSprite5Objects2.length = 0;
gdjs.win5Code.GDNewSprite7Objects1.length = 0;
gdjs.win5Code.GDNewSprite7Objects2.length = 0;
gdjs.win5Code.GDNewSprite8Objects1.length = 0;
gdjs.win5Code.GDNewSprite8Objects2.length = 0;
gdjs.win5Code.GDNewSprite6Objects1.length = 0;
gdjs.win5Code.GDNewSprite6Objects2.length = 0;
gdjs.win5Code.GDNewSprite9Objects1.length = 0;
gdjs.win5Code.GDNewSprite9Objects2.length = 0;
gdjs.win5Code.GDvolumesliderObjects1.length = 0;
gdjs.win5Code.GDvolumesliderObjects2.length = 0;
gdjs.win5Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win5Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win5Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win5Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win5Code.GDNewSprite45Objects1.length = 0;
gdjs.win5Code.GDNewSprite45Objects2.length = 0;
gdjs.win5Code.GDNewSprite11Objects1.length = 0;
gdjs.win5Code.GDNewSprite11Objects2.length = 0;

gdjs.win5Code.eventsList1(runtimeScene);
gdjs.win5Code.GDNewSprite6Objects1.length = 0;
gdjs.win5Code.GDNewSprite6Objects2.length = 0;
gdjs.win5Code.GDNewSprite9Objects1.length = 0;
gdjs.win5Code.GDNewSprite9Objects2.length = 0;
gdjs.win5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win5Code.GDNewSpriteObjects1.length = 0;
gdjs.win5Code.GDNewSpriteObjects2.length = 0;
gdjs.win5Code.GDNewSprite3Objects1.length = 0;
gdjs.win5Code.GDNewSprite3Objects2.length = 0;
gdjs.win5Code.GDNewSprite4Objects1.length = 0;
gdjs.win5Code.GDNewSprite4Objects2.length = 0;
gdjs.win5Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.win5Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.win5Code.GDNewSprite2Objects1.length = 0;
gdjs.win5Code.GDNewSprite2Objects2.length = 0;
gdjs.win5Code.GDNewSprite5Objects1.length = 0;
gdjs.win5Code.GDNewSprite5Objects2.length = 0;
gdjs.win5Code.GDNewSprite7Objects1.length = 0;
gdjs.win5Code.GDNewSprite7Objects2.length = 0;
gdjs.win5Code.GDNewSprite8Objects1.length = 0;
gdjs.win5Code.GDNewSprite8Objects2.length = 0;
gdjs.win5Code.GDNewSprite6Objects1.length = 0;
gdjs.win5Code.GDNewSprite6Objects2.length = 0;
gdjs.win5Code.GDNewSprite9Objects1.length = 0;
gdjs.win5Code.GDNewSprite9Objects2.length = 0;
gdjs.win5Code.GDvolumesliderObjects1.length = 0;
gdjs.win5Code.GDvolumesliderObjects2.length = 0;
gdjs.win5Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.win5Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.win5Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.win5Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.win5Code.GDNewSprite45Objects1.length = 0;
gdjs.win5Code.GDNewSprite45Objects2.length = 0;
gdjs.win5Code.GDNewSprite11Objects1.length = 0;
gdjs.win5Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['win5Code'] = gdjs.win5Code;
