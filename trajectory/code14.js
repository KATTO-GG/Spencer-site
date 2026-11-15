gdjs.Level_327Code = {};
gdjs.Level_327Code.localVariables = [];
gdjs.Level_327Code.idToCallbackMap = new Map();
gdjs.Level_327Code.GDNewSprite2Objects1_1final = [];

gdjs.Level_327Code.GDNewTiledSprite2Objects1_1final = [];

gdjs.Level_327Code.GDNewTiledSpriteObjects1_1final = [];

gdjs.Level_327Code.GDNewSprite9Objects1= [];
gdjs.Level_327Code.GDNewSprite9Objects2= [];
gdjs.Level_327Code.GDNewTextObjects1= [];
gdjs.Level_327Code.GDNewTextObjects2= [];
gdjs.Level_327Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_327Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_327Code.GDNewSpriteObjects1= [];
gdjs.Level_327Code.GDNewSpriteObjects2= [];
gdjs.Level_327Code.GDNewSprite3Objects1= [];
gdjs.Level_327Code.GDNewSprite3Objects2= [];
gdjs.Level_327Code.GDNewSprite4Objects1= [];
gdjs.Level_327Code.GDNewSprite4Objects2= [];
gdjs.Level_327Code.GDNewTiledSprite2Objects1= [];
gdjs.Level_327Code.GDNewTiledSprite2Objects2= [];
gdjs.Level_327Code.GDNewSprite2Objects1= [];
gdjs.Level_327Code.GDNewSprite2Objects2= [];
gdjs.Level_327Code.GDNewSprite5Objects1= [];
gdjs.Level_327Code.GDNewSprite5Objects2= [];
gdjs.Level_327Code.GDNewSprite7Objects1= [];
gdjs.Level_327Code.GDNewSprite7Objects2= [];
gdjs.Level_327Code.GDNewSprite8Objects1= [];
gdjs.Level_327Code.GDNewSprite8Objects2= [];
gdjs.Level_327Code.GDNewSprite6Objects1= [];
gdjs.Level_327Code.GDNewSprite6Objects2= [];
gdjs.Level_327Code.GDNewSprite9Objects1= [];
gdjs.Level_327Code.GDNewSprite9Objects2= [];
gdjs.Level_327Code.GDvolumesliderObjects1= [];
gdjs.Level_327Code.GDvolumesliderObjects2= [];
gdjs.Level_327Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.Level_327Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.Level_327Code.GDNewSprite9_9595nextObjects1= [];
gdjs.Level_327Code.GDNewSprite9_9595nextObjects2= [];
gdjs.Level_327Code.GDNewSprite45Objects1= [];
gdjs.Level_327Code.GDNewSprite45Objects2= [];
gdjs.Level_327Code.GDNewSprite11Objects1= [];
gdjs.Level_327Code.GDNewSprite11Objects2= [];


gdjs.Level_327Code.asyncCallback15229588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_327Code.localVariables);
gdjs.Level_327Code.localVariables.length = 0;
}
gdjs.Level_327Code.idToCallbackMap.set(15229588, gdjs.Level_327Code.asyncCallback15229588);
gdjs.Level_327Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_327Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Level_327Code.asyncCallback15229588(runtimeScene, asyncObjectsList)), 15229588, asyncObjectsList);
}
}

}


};gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_327Code.GDNewSprite2Objects1});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Level_327Code.GDNewSprite5Objects1});
gdjs.Level_327Code.asyncCallback15925116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_327Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_327Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].setY(137);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].setX(123);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewTextObjects2[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
gdjs.Level_327Code.localVariables.length = 0;
}
gdjs.Level_327Code.idToCallbackMap.set(15925116, gdjs.Level_327Code.asyncCallback15925116);
gdjs.Level_327Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_327Code.localVariables);
for (const obj of gdjs.Level_327Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Level_327Code.asyncCallback15925116(runtimeScene, asyncObjectsList)), 15925116, asyncObjectsList);
}
}

}


};gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_327Code.GDNewSprite2Objects1});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Level_327Code.GDNewSprite6Objects1});
gdjs.Level_327Code.asyncCallback17328068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_327Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
gdjs.Level_327Code.localVariables.length = 0;
}
gdjs.Level_327Code.idToCallbackMap.set(17328068, gdjs.Level_327Code.asyncCallback17328068);
gdjs.Level_327Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_327Code.localVariables);
for (const obj of gdjs.Level_327Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Level_327Code.asyncCallback17328068(runtimeScene, asyncObjectsList)), 17328068, asyncObjectsList);
}
}

}


};gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_327Code.GDNewSprite2Objects2});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewTiledSpriteObjects2Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Level_327Code.GDNewTiledSpriteObjects2});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_327Code.GDNewSprite2Objects2});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewTiledSprite2Objects2Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Level_327Code.GDNewTiledSprite2Objects2});
gdjs.Level_327Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_327Code.GDNewTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_327Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").applyForceTowardPosition((gdjs.evtTools.common.distanceBetweenPositions3D((gdjs.Level_327Code.GDNewSprite2Objects1[i].getPointX("")), (gdjs.Level_327Code.GDNewSprite2Objects1[i].getPointY("")), 0, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0)) / 100, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (gdjs.Level_327Code.GDNewSprite2Objects1[i].getPointX("points")), (gdjs.Level_327Code.GDNewSprite2Objects1[i].getPointY("points")));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.Level_327Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Level_327Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite5Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_327Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}

{ //Subevents
gdjs.Level_327Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Level_327Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite6Objects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final WIN", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_327Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].setY(137);
}
}
{for(var i = 0, len = gdjs.Level_327Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDNewSprite2Objects1[i].setX(123);
}
}

{ //Subevents
gdjs.Level_327Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Instrument.m4a", true, 100, 1);
}
}

}


{

gdjs.Level_327Code.GDNewSprite2Objects1.length = 0;

gdjs.Level_327Code.GDNewTiledSpriteObjects1.length = 0;

gdjs.Level_327Code.GDNewTiledSprite2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_327Code.GDNewSprite2Objects1_1final.length = 0;
gdjs.Level_327Code.GDNewTiledSpriteObjects1_1final.length = 0;
gdjs.Level_327Code.GDNewTiledSprite2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Level_327Code.GDNewTiledSpriteObjects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewTiledSpriteObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_327Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_327Code.GDNewSprite2Objects1_1final.indexOf(gdjs.Level_327Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.Level_327Code.GDNewSprite2Objects1_1final.push(gdjs.Level_327Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_327Code.GDNewTiledSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_327Code.GDNewTiledSpriteObjects1_1final.indexOf(gdjs.Level_327Code.GDNewTiledSpriteObjects2[j]) === -1 )
            gdjs.Level_327Code.GDNewTiledSpriteObjects1_1final.push(gdjs.Level_327Code.GDNewTiledSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_327Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Level_327Code.GDNewTiledSprite2Objects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDNewTiledSprite2Objects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_327Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_327Code.GDNewSprite2Objects1_1final.indexOf(gdjs.Level_327Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.Level_327Code.GDNewSprite2Objects1_1final.push(gdjs.Level_327Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_327Code.GDNewTiledSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_327Code.GDNewTiledSprite2Objects1_1final.indexOf(gdjs.Level_327Code.GDNewTiledSprite2Objects2[j]) === -1 )
            gdjs.Level_327Code.GDNewTiledSprite2Objects1_1final.push(gdjs.Level_327Code.GDNewTiledSprite2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_327Code.GDNewSprite2Objects1_1final, gdjs.Level_327Code.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.Level_327Code.GDNewTiledSpriteObjects1_1final, gdjs.Level_327Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(gdjs.Level_327Code.GDNewTiledSprite2Objects1_1final, gdjs.Level_327Code.GDNewTiledSprite2Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "toing_ic7x6Wj.mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_327Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_327Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_327Code.GDNewTextObjects1.length = 0;
gdjs.Level_327Code.GDNewTextObjects2.length = 0;
gdjs.Level_327Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_327Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_327Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_327Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite3Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite3Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite4Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite4Objects2.length = 0;
gdjs.Level_327Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_327Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite5Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite5Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite7Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite7Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite8Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite8Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite6Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite6Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_327Code.GDvolumesliderObjects1.length = 0;
gdjs.Level_327Code.GDvolumesliderObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Level_327Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Level_327Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite45Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite45Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite11Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite11Objects2.length = 0;

gdjs.Level_327Code.eventsList3(runtimeScene);
gdjs.Level_327Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_327Code.GDNewTextObjects1.length = 0;
gdjs.Level_327Code.GDNewTextObjects2.length = 0;
gdjs.Level_327Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_327Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_327Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_327Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite3Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite3Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite4Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite4Objects2.length = 0;
gdjs.Level_327Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_327Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite5Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite5Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite7Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite7Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite8Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite8Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite6Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite6Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_327Code.GDvolumesliderObjects1.length = 0;
gdjs.Level_327Code.GDvolumesliderObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Level_327Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Level_327Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Level_327Code.GDNewSprite45Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite45Objects2.length = 0;
gdjs.Level_327Code.GDNewSprite11Objects1.length = 0;
gdjs.Level_327Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['Level_327Code'] = gdjs.Level_327Code;
