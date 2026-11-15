gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.localVariables = [];
gdjs.Main_32menuCode.idToCallbackMap = new Map();
gdjs.Main_32menuCode.GDNewSprite6Objects1= [];
gdjs.Main_32menuCode.GDNewSprite6Objects2= [];
gdjs.Main_32menuCode.GDNewSprite10Objects1= [];
gdjs.Main_32menuCode.GDNewSprite10Objects2= [];
gdjs.Main_32menuCode.GDNewTiledSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewTiledSpriteObjects2= [];
gdjs.Main_32menuCode.GDNewSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewSpriteObjects2= [];
gdjs.Main_32menuCode.GDNewSprite3Objects1= [];
gdjs.Main_32menuCode.GDNewSprite3Objects2= [];
gdjs.Main_32menuCode.GDNewSprite4Objects1= [];
gdjs.Main_32menuCode.GDNewSprite4Objects2= [];
gdjs.Main_32menuCode.GDNewTiledSprite2Objects1= [];
gdjs.Main_32menuCode.GDNewTiledSprite2Objects2= [];
gdjs.Main_32menuCode.GDNewSprite2Objects1= [];
gdjs.Main_32menuCode.GDNewSprite2Objects2= [];
gdjs.Main_32menuCode.GDNewSprite5Objects1= [];
gdjs.Main_32menuCode.GDNewSprite5Objects2= [];
gdjs.Main_32menuCode.GDNewSprite7Objects1= [];
gdjs.Main_32menuCode.GDNewSprite7Objects2= [];
gdjs.Main_32menuCode.GDNewSprite8Objects1= [];
gdjs.Main_32menuCode.GDNewSprite8Objects2= [];
gdjs.Main_32menuCode.GDNewSprite6Objects1= [];
gdjs.Main_32menuCode.GDNewSprite6Objects2= [];
gdjs.Main_32menuCode.GDNewSprite9Objects1= [];
gdjs.Main_32menuCode.GDNewSprite9Objects2= [];
gdjs.Main_32menuCode.GDvolumesliderObjects1= [];
gdjs.Main_32menuCode.GDvolumesliderObjects2= [];
gdjs.Main_32menuCode.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.Main_32menuCode.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.Main_32menuCode.GDNewSprite9_9595nextObjects1= [];
gdjs.Main_32menuCode.GDNewSprite9_9595nextObjects2= [];
gdjs.Main_32menuCode.GDNewSprite45Objects1= [];
gdjs.Main_32menuCode.GDNewSprite45Objects2= [];
gdjs.Main_32menuCode.GDNewSprite11Objects1= [];
gdjs.Main_32menuCode.GDNewSprite11Objects2= [];


gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Main_32menuCode.GDNewSprite6Objects1});
gdjs.Main_32menuCode.asyncCallback12663092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
gdjs.Main_32menuCode.localVariables.length = 0;
}
gdjs.Main_32menuCode.idToCallbackMap.set(12663092, gdjs.Main_32menuCode.asyncCallback12663092);
gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32menuCode.asyncCallback12663092(runtimeScene, asyncObjectsList)), 12663092, asyncObjectsList);
}
}

}


};gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Main_32menuCode.GDNewSprite2Objects1});
gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDNewSprite11Objects1Objects = Hashtable.newFrom({"NewSprite11": gdjs.Main_32menuCode.GDNewSprite11Objects1});
gdjs.Main_32menuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Main_32menuCode.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDNewSprite6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("volumeslider"), gdjs.Main_32menuCode.GDvolumesliderObjects1);
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, (( gdjs.Main_32menuCode.GDvolumesliderObjects1.length === 0 ) ? 0 :gdjs.Main_32menuCode.GDvolumesliderObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("volumeslider"), gdjs.Main_32menuCode.GDvolumesliderObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Instrument.m4a", 1, true, (( gdjs.Main_32menuCode.GDvolumesliderObjects1.length === 0 ) ? 0 :gdjs.Main_32menuCode.GDvolumesliderObjects1[0].Value(null)), 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32menuCode.GDvolumesliderObjects1.length === 0 ) ? 0 :gdjs.Main_32menuCode.GDvolumesliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.Main_32menuCode.GDNewSprite11Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Main_32menuCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDNewSprite2Objects1Objects, gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDNewSprite11Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32menuCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Main_32menuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDNewSprite2Objects1[i].setPosition(-210,210);
}
}
}

}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDNewSprite6Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite6Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite10Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite10Objects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite4Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite4Objects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite5Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite5Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite7Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite7Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite8Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite8Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite6Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite6Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite9Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite9Objects2.length = 0;
gdjs.Main_32menuCode.GDvolumesliderObjects1.length = 0;
gdjs.Main_32menuCode.GDvolumesliderObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite45Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite45Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite11Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite11Objects2.length = 0;

gdjs.Main_32menuCode.eventsList1(runtimeScene);
gdjs.Main_32menuCode.GDNewSprite6Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite6Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite10Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite10Objects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite4Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite4Objects2.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite5Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite5Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite7Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite7Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite8Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite8Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite6Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite6Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite9Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite9Objects2.length = 0;
gdjs.Main_32menuCode.GDvolumesliderObjects1.length = 0;
gdjs.Main_32menuCode.GDvolumesliderObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite45Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite45Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite11Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
