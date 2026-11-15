gdjs.Level_324_465Code = {};
gdjs.Level_324_465Code.localVariables = [];
gdjs.Level_324_465Code.idToCallbackMap = new Map();
gdjs.Level_324_465Code.GDNewSprite2Objects1_1final = [];

gdjs.Level_324_465Code.GDNewTiledSprite2Objects1_1final = [];

gdjs.Level_324_465Code.GDNewTiledSpriteObjects1_1final = [];

gdjs.Level_324_465Code.GDNewSprite9Objects1= [];
gdjs.Level_324_465Code.GDNewSprite9Objects2= [];
gdjs.Level_324_465Code.GDNewTextObjects1= [];
gdjs.Level_324_465Code.GDNewTextObjects2= [];
gdjs.Level_324_465Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_324_465Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_324_465Code.GDNewSpriteObjects1= [];
gdjs.Level_324_465Code.GDNewSpriteObjects2= [];
gdjs.Level_324_465Code.GDNewSprite3Objects1= [];
gdjs.Level_324_465Code.GDNewSprite3Objects2= [];
gdjs.Level_324_465Code.GDNewSprite4Objects1= [];
gdjs.Level_324_465Code.GDNewSprite4Objects2= [];
gdjs.Level_324_465Code.GDNewTiledSprite2Objects1= [];
gdjs.Level_324_465Code.GDNewTiledSprite2Objects2= [];
gdjs.Level_324_465Code.GDNewSprite2Objects1= [];
gdjs.Level_324_465Code.GDNewSprite2Objects2= [];
gdjs.Level_324_465Code.GDNewSprite5Objects1= [];
gdjs.Level_324_465Code.GDNewSprite5Objects2= [];
gdjs.Level_324_465Code.GDNewSprite7Objects1= [];
gdjs.Level_324_465Code.GDNewSprite7Objects2= [];
gdjs.Level_324_465Code.GDNewSprite8Objects1= [];
gdjs.Level_324_465Code.GDNewSprite8Objects2= [];
gdjs.Level_324_465Code.GDNewSprite6Objects1= [];
gdjs.Level_324_465Code.GDNewSprite6Objects2= [];
gdjs.Level_324_465Code.GDNewSprite9Objects1= [];
gdjs.Level_324_465Code.GDNewSprite9Objects2= [];
gdjs.Level_324_465Code.GDvolumesliderObjects1= [];
gdjs.Level_324_465Code.GDvolumesliderObjects2= [];
gdjs.Level_324_465Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.Level_324_465Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.Level_324_465Code.GDNewSprite9_9595nextObjects1= [];
gdjs.Level_324_465Code.GDNewSprite9_9595nextObjects2= [];
gdjs.Level_324_465Code.GDNewSprite45Objects1= [];
gdjs.Level_324_465Code.GDNewSprite45Objects2= [];
gdjs.Level_324_465Code.GDNewSprite11Objects1= [];
gdjs.Level_324_465Code.GDNewSprite11Objects2= [];


gdjs.Level_324_465Code.asyncCallback11536516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324_465Code.localVariables);
gdjs.Level_324_465Code.localVariables.length = 0;
}
gdjs.Level_324_465Code.idToCallbackMap.set(11536516, gdjs.Level_324_465Code.asyncCallback11536516);
gdjs.Level_324_465Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324_465Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Level_324_465Code.asyncCallback11536516(runtimeScene, asyncObjectsList)), 11536516, asyncObjectsList);
}
}

}


};gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324_465Code.GDNewSprite2Objects1});
gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Level_324_465Code.GDNewSprite5Objects1});
gdjs.Level_324_465Code.asyncCallback11537340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324_465Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324_465Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].setY(1400);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].setX(700);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewTextObjects2[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
gdjs.Level_324_465Code.localVariables.length = 0;
}
gdjs.Level_324_465Code.idToCallbackMap.set(11537340, gdjs.Level_324_465Code.asyncCallback11537340);
gdjs.Level_324_465Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324_465Code.localVariables);
for (const obj of gdjs.Level_324_465Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Level_324_465Code.asyncCallback11537340(runtimeScene, asyncObjectsList)), 11537340, asyncObjectsList);
}
}

}


};gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324_465Code.GDNewSprite2Objects1});
gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Level_324_465Code.GDNewSprite6Objects1});
gdjs.Level_324_465Code.asyncCallback13894332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324_465Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
gdjs.Level_324_465Code.localVariables.length = 0;
}
gdjs.Level_324_465Code.idToCallbackMap.set(13894332, gdjs.Level_324_465Code.asyncCallback13894332);
gdjs.Level_324_465Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324_465Code.localVariables);
for (const obj of gdjs.Level_324_465Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Level_324_465Code.asyncCallback13894332(runtimeScene, asyncObjectsList)), 13894332, asyncObjectsList);
}
}

}


};gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324_465Code.GDNewSprite2Objects2});
gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewTiledSpriteObjects2Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Level_324_465Code.GDNewTiledSpriteObjects2});
gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324_465Code.GDNewSprite2Objects2});
gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewTiledSprite2Objects2Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Level_324_465Code.GDNewTiledSprite2Objects2});
gdjs.Level_324_465Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324_465Code.GDNewTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(12);
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324_465Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").applyForceTowardPosition((gdjs.evtTools.common.distanceBetweenPositions3D((gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getPointX("")), (gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getPointY("")), 0, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0)) / 100, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getPointX("points")), (gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getPointY("points")));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.Level_324_465Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Level_324_465Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite5Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324_465Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}

{ //Subevents
gdjs.Level_324_465Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Level_324_465Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite6Objects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win4", false);
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324_465Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(12);
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].setY(900);
}
}
{for(var i = 0, len = gdjs.Level_324_465Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324_465Code.GDNewSprite2Objects1[i].setX(1800);
}
}

{ //Subevents
gdjs.Level_324_465Code.eventsList2(runtimeScene);} //End of subevents
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

gdjs.Level_324_465Code.GDNewSprite2Objects1.length = 0;

gdjs.Level_324_465Code.GDNewTiledSpriteObjects1.length = 0;

gdjs.Level_324_465Code.GDNewTiledSprite2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_324_465Code.GDNewSprite2Objects1_1final.length = 0;
gdjs.Level_324_465Code.GDNewTiledSpriteObjects1_1final.length = 0;
gdjs.Level_324_465Code.GDNewTiledSprite2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Level_324_465Code.GDNewTiledSpriteObjects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewTiledSpriteObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324_465Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324_465Code.GDNewSprite2Objects1_1final.indexOf(gdjs.Level_324_465Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.Level_324_465Code.GDNewSprite2Objects1_1final.push(gdjs.Level_324_465Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_324_465Code.GDNewTiledSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324_465Code.GDNewTiledSpriteObjects1_1final.indexOf(gdjs.Level_324_465Code.GDNewTiledSpriteObjects2[j]) === -1 )
            gdjs.Level_324_465Code.GDNewTiledSpriteObjects1_1final.push(gdjs.Level_324_465Code.GDNewTiledSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324_465Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Level_324_465Code.GDNewTiledSprite2Objects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.Level_324_465Code.mapOfGDgdjs_9546Level_9595324_9595465Code_9546GDNewTiledSprite2Objects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324_465Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324_465Code.GDNewSprite2Objects1_1final.indexOf(gdjs.Level_324_465Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.Level_324_465Code.GDNewSprite2Objects1_1final.push(gdjs.Level_324_465Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_324_465Code.GDNewTiledSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324_465Code.GDNewTiledSprite2Objects1_1final.indexOf(gdjs.Level_324_465Code.GDNewTiledSprite2Objects2[j]) === -1 )
            gdjs.Level_324_465Code.GDNewTiledSprite2Objects1_1final.push(gdjs.Level_324_465Code.GDNewTiledSprite2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_324_465Code.GDNewSprite2Objects1_1final, gdjs.Level_324_465Code.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.Level_324_465Code.GDNewTiledSpriteObjects1_1final, gdjs.Level_324_465Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(gdjs.Level_324_465Code.GDNewTiledSprite2Objects1_1final, gdjs.Level_324_465Code.GDNewTiledSprite2Objects1);
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

gdjs.Level_324_465Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324_465Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_324_465Code.GDNewTextObjects1.length = 0;
gdjs.Level_324_465Code.GDNewTextObjects2.length = 0;
gdjs.Level_324_465Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_324_465Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_324_465Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite3Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite3Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite4Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite4Objects2.length = 0;
gdjs.Level_324_465Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_324_465Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite5Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite5Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite7Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite7Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite8Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite8Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite6Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite6Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_324_465Code.GDvolumesliderObjects1.length = 0;
gdjs.Level_324_465Code.GDvolumesliderObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite45Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite45Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite11Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite11Objects2.length = 0;

gdjs.Level_324_465Code.eventsList3(runtimeScene);
gdjs.Level_324_465Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_324_465Code.GDNewTextObjects1.length = 0;
gdjs.Level_324_465Code.GDNewTextObjects2.length = 0;
gdjs.Level_324_465Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_324_465Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_324_465Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite3Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite3Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite4Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite4Objects2.length = 0;
gdjs.Level_324_465Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_324_465Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite5Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite5Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite7Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite7Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite8Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite8Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite6Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite6Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_324_465Code.GDvolumesliderObjects1.length = 0;
gdjs.Level_324_465Code.GDvolumesliderObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite45Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite45Objects2.length = 0;
gdjs.Level_324_465Code.GDNewSprite11Objects1.length = 0;
gdjs.Level_324_465Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['Level_324_465Code'] = gdjs.Level_324_465Code;
