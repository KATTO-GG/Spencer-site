gdjs.level_322Code = {};
gdjs.level_322Code.localVariables = [];
gdjs.level_322Code.idToCallbackMap = new Map();
gdjs.level_322Code.GDNewSprite2Objects1_1final = [];

gdjs.level_322Code.GDNewTiledSprite2Objects1_1final = [];

gdjs.level_322Code.GDNewTiledSpriteObjects1_1final = [];

gdjs.level_322Code.GDNewTextObjects1= [];
gdjs.level_322Code.GDNewTextObjects2= [];
gdjs.level_322Code.GDNewTiledSpriteObjects1= [];
gdjs.level_322Code.GDNewTiledSpriteObjects2= [];
gdjs.level_322Code.GDNewSpriteObjects1= [];
gdjs.level_322Code.GDNewSpriteObjects2= [];
gdjs.level_322Code.GDNewSprite3Objects1= [];
gdjs.level_322Code.GDNewSprite3Objects2= [];
gdjs.level_322Code.GDNewSprite4Objects1= [];
gdjs.level_322Code.GDNewSprite4Objects2= [];
gdjs.level_322Code.GDNewTiledSprite2Objects1= [];
gdjs.level_322Code.GDNewTiledSprite2Objects2= [];
gdjs.level_322Code.GDNewSprite2Objects1= [];
gdjs.level_322Code.GDNewSprite2Objects2= [];
gdjs.level_322Code.GDNewSprite5Objects1= [];
gdjs.level_322Code.GDNewSprite5Objects2= [];
gdjs.level_322Code.GDNewSprite7Objects1= [];
gdjs.level_322Code.GDNewSprite7Objects2= [];
gdjs.level_322Code.GDNewSprite8Objects1= [];
gdjs.level_322Code.GDNewSprite8Objects2= [];
gdjs.level_322Code.GDNewSprite6Objects1= [];
gdjs.level_322Code.GDNewSprite6Objects2= [];
gdjs.level_322Code.GDNewSprite9Objects1= [];
gdjs.level_322Code.GDNewSprite9Objects2= [];
gdjs.level_322Code.GDvolumesliderObjects1= [];
gdjs.level_322Code.GDvolumesliderObjects2= [];
gdjs.level_322Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.level_322Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.level_322Code.GDNewSprite9_9595nextObjects1= [];
gdjs.level_322Code.GDNewSprite9_9595nextObjects2= [];
gdjs.level_322Code.GDNewSprite45Objects1= [];
gdjs.level_322Code.GDNewSprite45Objects2= [];
gdjs.level_322Code.GDNewSprite11Objects1= [];
gdjs.level_322Code.GDNewSprite11Objects2= [];


gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.level_322Code.GDNewSprite2Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.level_322Code.GDNewSprite5Objects1});
gdjs.level_322Code.asyncCallback15891684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.level_322Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.level_322Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.level_322Code.GDNewTextObjects2[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
gdjs.level_322Code.localVariables.length = 0;
}
gdjs.level_322Code.idToCallbackMap.set(15891684, gdjs.level_322Code.asyncCallback15891684);
gdjs.level_322Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level_322Code.localVariables);
for (const obj of gdjs.level_322Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.level_322Code.asyncCallback15891684(runtimeScene, asyncObjectsList)), 15891684, asyncObjectsList);
}
}

}


};gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.level_322Code.GDNewSprite2Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.level_322Code.GDNewSprite6Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.level_322Code.GDNewSprite9Objects1});
gdjs.level_322Code.asyncCallback13269052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level_322Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win2", false);
}
gdjs.level_322Code.localVariables.length = 0;
}
gdjs.level_322Code.idToCallbackMap.set(13269052, gdjs.level_322Code.asyncCallback13269052);
gdjs.level_322Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.level_322Code.asyncCallback13269052(runtimeScene, asyncObjectsList)), 13269052, asyncObjectsList);
}
}

}


};gdjs.level_322Code.asyncCallback14577348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects2[i].setAnimationFrame(1);
}
}
gdjs.level_322Code.localVariables.length = 0;
}
gdjs.level_322Code.idToCallbackMap.set(14577348, gdjs.level_322Code.asyncCallback14577348);
gdjs.level_322Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level_322Code.localVariables);
for (const obj of gdjs.level_322Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.level_322Code.asyncCallback14577348(runtimeScene, asyncObjectsList)), 14577348, asyncObjectsList);
}
}

}


};gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.level_322Code.GDNewSprite2Objects2});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewTiledSpriteObjects2Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.level_322Code.GDNewTiledSpriteObjects2});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.level_322Code.GDNewSprite2Objects2});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewTiledSprite2Objects2Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.level_322Code.GDNewTiledSprite2Objects2});
gdjs.level_322Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.level_322Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").applyForceTowardPosition((gdjs.evtTools.common.distanceBetweenPositions3D((gdjs.level_322Code.GDNewSprite2Objects1[i].getPointX("")), (gdjs.level_322Code.GDNewSprite2Objects1[i].getPointY("")), 0, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0)) / 100, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (gdjs.level_322Code.GDNewSprite2Objects1[i].getPointX("points")), (gdjs.level_322Code.GDNewSprite2Objects1[i].getPointY("points")));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.level_322Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.level_322Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite5Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level_322Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setY(137);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setX(123);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}

{ //Subevents
gdjs.level_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.level_322Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite6Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level_322Code.GDNewSprite2Objects1 */
/* Reuse gdjs.level_322Code.GDNewSprite6Objects1 */
gdjs.level_322Code.GDNewSprite9Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite9Objects1Objects, (( gdjs.level_322Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.level_322Code.GDNewSprite6Objects1[0].getPointX("")) - 20, (( gdjs.level_322Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.level_322Code.GDNewSprite6Objects1[0].getPointY("")) - 0, "");
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite9Objects1[i].getBehavior("Resizable").setSize((( gdjs.level_322Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.level_322Code.GDNewSprite6Objects1[0].getHeight()), (( gdjs.level_322Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.level_322Code.GDNewSprite6Objects1[0].getWidth()));
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite9Objects1[i].getBehavior("Animation").resumeAnimation();
}
}

{ //Subevents
gdjs.level_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setX(123);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].setY(137);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}
{for(var i = 0, len = gdjs.level_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}

{ //Subevents
gdjs.level_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.level_322Code.GDNewTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.level_322Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.level_322Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
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

gdjs.level_322Code.GDNewSprite2Objects1.length = 0;

gdjs.level_322Code.GDNewTiledSpriteObjects1.length = 0;

gdjs.level_322Code.GDNewTiledSprite2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level_322Code.GDNewSprite2Objects1_1final.length = 0;
gdjs.level_322Code.GDNewTiledSpriteObjects1_1final.length = 0;
gdjs.level_322Code.GDNewTiledSprite2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.level_322Code.GDNewTiledSpriteObjects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewTiledSpriteObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level_322Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.level_322Code.GDNewSprite2Objects1_1final.indexOf(gdjs.level_322Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.level_322Code.GDNewSprite2Objects1_1final.push(gdjs.level_322Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.level_322Code.GDNewTiledSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level_322Code.GDNewTiledSpriteObjects1_1final.indexOf(gdjs.level_322Code.GDNewTiledSpriteObjects2[j]) === -1 )
            gdjs.level_322Code.GDNewTiledSpriteObjects1_1final.push(gdjs.level_322Code.GDNewTiledSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level_322Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.level_322Code.GDNewTiledSprite2Objects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDNewTiledSprite2Objects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level_322Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.level_322Code.GDNewSprite2Objects1_1final.indexOf(gdjs.level_322Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.level_322Code.GDNewSprite2Objects1_1final.push(gdjs.level_322Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.level_322Code.GDNewTiledSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.level_322Code.GDNewTiledSprite2Objects1_1final.indexOf(gdjs.level_322Code.GDNewTiledSprite2Objects2[j]) === -1 )
            gdjs.level_322Code.GDNewTiledSprite2Objects1_1final.push(gdjs.level_322Code.GDNewTiledSprite2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.level_322Code.GDNewSprite2Objects1_1final, gdjs.level_322Code.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.level_322Code.GDNewTiledSpriteObjects1_1final, gdjs.level_322Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(gdjs.level_322Code.GDNewTiledSprite2Objects1_1final, gdjs.level_322Code.GDNewTiledSprite2Objects1);
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

gdjs.level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_322Code.GDNewTextObjects1.length = 0;
gdjs.level_322Code.GDNewTextObjects2.length = 0;
gdjs.level_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.level_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.level_322Code.GDNewSpriteObjects1.length = 0;
gdjs.level_322Code.GDNewSpriteObjects2.length = 0;
gdjs.level_322Code.GDNewSprite3Objects1.length = 0;
gdjs.level_322Code.GDNewSprite3Objects2.length = 0;
gdjs.level_322Code.GDNewSprite4Objects1.length = 0;
gdjs.level_322Code.GDNewSprite4Objects2.length = 0;
gdjs.level_322Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.level_322Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.level_322Code.GDNewSprite2Objects1.length = 0;
gdjs.level_322Code.GDNewSprite2Objects2.length = 0;
gdjs.level_322Code.GDNewSprite5Objects1.length = 0;
gdjs.level_322Code.GDNewSprite5Objects2.length = 0;
gdjs.level_322Code.GDNewSprite7Objects1.length = 0;
gdjs.level_322Code.GDNewSprite7Objects2.length = 0;
gdjs.level_322Code.GDNewSprite8Objects1.length = 0;
gdjs.level_322Code.GDNewSprite8Objects2.length = 0;
gdjs.level_322Code.GDNewSprite6Objects1.length = 0;
gdjs.level_322Code.GDNewSprite6Objects2.length = 0;
gdjs.level_322Code.GDNewSprite9Objects1.length = 0;
gdjs.level_322Code.GDNewSprite9Objects2.length = 0;
gdjs.level_322Code.GDvolumesliderObjects1.length = 0;
gdjs.level_322Code.GDvolumesliderObjects2.length = 0;
gdjs.level_322Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.level_322Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.level_322Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.level_322Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.level_322Code.GDNewSprite45Objects1.length = 0;
gdjs.level_322Code.GDNewSprite45Objects2.length = 0;
gdjs.level_322Code.GDNewSprite11Objects1.length = 0;
gdjs.level_322Code.GDNewSprite11Objects2.length = 0;

gdjs.level_322Code.eventsList3(runtimeScene);
gdjs.level_322Code.GDNewTextObjects1.length = 0;
gdjs.level_322Code.GDNewTextObjects2.length = 0;
gdjs.level_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.level_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.level_322Code.GDNewSpriteObjects1.length = 0;
gdjs.level_322Code.GDNewSpriteObjects2.length = 0;
gdjs.level_322Code.GDNewSprite3Objects1.length = 0;
gdjs.level_322Code.GDNewSprite3Objects2.length = 0;
gdjs.level_322Code.GDNewSprite4Objects1.length = 0;
gdjs.level_322Code.GDNewSprite4Objects2.length = 0;
gdjs.level_322Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.level_322Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.level_322Code.GDNewSprite2Objects1.length = 0;
gdjs.level_322Code.GDNewSprite2Objects2.length = 0;
gdjs.level_322Code.GDNewSprite5Objects1.length = 0;
gdjs.level_322Code.GDNewSprite5Objects2.length = 0;
gdjs.level_322Code.GDNewSprite7Objects1.length = 0;
gdjs.level_322Code.GDNewSprite7Objects2.length = 0;
gdjs.level_322Code.GDNewSprite8Objects1.length = 0;
gdjs.level_322Code.GDNewSprite8Objects2.length = 0;
gdjs.level_322Code.GDNewSprite6Objects1.length = 0;
gdjs.level_322Code.GDNewSprite6Objects2.length = 0;
gdjs.level_322Code.GDNewSprite9Objects1.length = 0;
gdjs.level_322Code.GDNewSprite9Objects2.length = 0;
gdjs.level_322Code.GDvolumesliderObjects1.length = 0;
gdjs.level_322Code.GDvolumesliderObjects2.length = 0;
gdjs.level_322Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.level_322Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.level_322Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.level_322Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.level_322Code.GDNewSprite45Objects1.length = 0;
gdjs.level_322Code.GDNewSprite45Objects2.length = 0;
gdjs.level_322Code.GDNewSprite11Objects1.length = 0;
gdjs.level_322Code.GDNewSprite11Objects2.length = 0;


return;

}

gdjs['level_322Code'] = gdjs.level_322Code;
