gdjs.Level_324Code = {};
gdjs.Level_324Code.localVariables = [];
gdjs.Level_324Code.idToCallbackMap = new Map();
gdjs.Level_324Code.GDNewSprite2Objects1_1final = [];

gdjs.Level_324Code.GDNewTiledSprite2Objects1_1final = [];

gdjs.Level_324Code.GDNewTiledSpriteObjects1_1final = [];

gdjs.Level_324Code.GDNewTextObjects1= [];
gdjs.Level_324Code.GDNewTextObjects2= [];
gdjs.Level_324Code.GDNewTextObjects3= [];
gdjs.Level_324Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_324Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_324Code.GDNewTiledSpriteObjects3= [];
gdjs.Level_324Code.GDNewSpriteObjects1= [];
gdjs.Level_324Code.GDNewSpriteObjects2= [];
gdjs.Level_324Code.GDNewSpriteObjects3= [];
gdjs.Level_324Code.GDNewSprite3Objects1= [];
gdjs.Level_324Code.GDNewSprite3Objects2= [];
gdjs.Level_324Code.GDNewSprite3Objects3= [];
gdjs.Level_324Code.GDNewSprite4Objects1= [];
gdjs.Level_324Code.GDNewSprite4Objects2= [];
gdjs.Level_324Code.GDNewSprite4Objects3= [];
gdjs.Level_324Code.GDNewTiledSprite2Objects1= [];
gdjs.Level_324Code.GDNewTiledSprite2Objects2= [];
gdjs.Level_324Code.GDNewTiledSprite2Objects3= [];
gdjs.Level_324Code.GDNewSprite2Objects1= [];
gdjs.Level_324Code.GDNewSprite2Objects2= [];
gdjs.Level_324Code.GDNewSprite2Objects3= [];
gdjs.Level_324Code.GDNewSprite5Objects1= [];
gdjs.Level_324Code.GDNewSprite5Objects2= [];
gdjs.Level_324Code.GDNewSprite5Objects3= [];
gdjs.Level_324Code.GDNewSprite7Objects1= [];
gdjs.Level_324Code.GDNewSprite7Objects2= [];
gdjs.Level_324Code.GDNewSprite7Objects3= [];
gdjs.Level_324Code.GDNewSprite8Objects1= [];
gdjs.Level_324Code.GDNewSprite8Objects2= [];
gdjs.Level_324Code.GDNewSprite8Objects3= [];
gdjs.Level_324Code.GDNewSprite6Objects1= [];
gdjs.Level_324Code.GDNewSprite6Objects2= [];
gdjs.Level_324Code.GDNewSprite6Objects3= [];
gdjs.Level_324Code.GDNewSprite9Objects1= [];
gdjs.Level_324Code.GDNewSprite9Objects2= [];
gdjs.Level_324Code.GDNewSprite9Objects3= [];
gdjs.Level_324Code.GDvolumesliderObjects1= [];
gdjs.Level_324Code.GDvolumesliderObjects2= [];
gdjs.Level_324Code.GDvolumesliderObjects3= [];
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects1= [];
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects2= [];
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects3= [];
gdjs.Level_324Code.GDNewSprite9_9595nextObjects1= [];
gdjs.Level_324Code.GDNewSprite9_9595nextObjects2= [];
gdjs.Level_324Code.GDNewSprite9_9595nextObjects3= [];
gdjs.Level_324Code.GDNewSprite45Objects1= [];
gdjs.Level_324Code.GDNewSprite45Objects2= [];
gdjs.Level_324Code.GDNewSprite45Objects3= [];
gdjs.Level_324Code.GDNewSprite11Objects1= [];
gdjs.Level_324Code.GDNewSprite11Objects2= [];
gdjs.Level_324Code.GDNewSprite11Objects3= [];


gdjs.Level_324Code.asyncCallback11406548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324Code.localVariables);
gdjs.Level_324Code.localVariables.length = 0;
}
gdjs.Level_324Code.idToCallbackMap.set(11406548, gdjs.Level_324Code.asyncCallback11406548);
gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Level_324Code.asyncCallback11406548(runtimeScene, asyncObjectsList)), 11406548, asyncObjectsList);
}
}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324Code.GDNewSprite2Objects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Level_324Code.GDNewSprite5Objects1});
gdjs.Level_324Code.asyncCallback16264836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].setY(137);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].setX(123);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewTextObjects2[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
gdjs.Level_324Code.localVariables.length = 0;
}
gdjs.Level_324Code.idToCallbackMap.set(16264836, gdjs.Level_324Code.asyncCallback16264836);
gdjs.Level_324Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324Code.localVariables);
for (const obj of gdjs.Level_324Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Level_324Code.asyncCallback16264836(runtimeScene, asyncObjectsList)), 16264836, asyncObjectsList);
}
}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324Code.GDNewSprite2Objects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Level_324Code.GDNewSprite6Objects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.Level_324Code.GDNewSprite9Objects1});
gdjs.Level_324Code.asyncCallback23963460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324Code.localVariables);
gdjs.Level_324Code.localVariables.length = 0;
}
gdjs.Level_324Code.idToCallbackMap.set(23963460, gdjs.Level_324Code.asyncCallback23963460);
gdjs.Level_324Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level_324Code.asyncCallback23963460(runtimeScene, asyncObjectsList)), 23963460, asyncObjectsList);
}
}

}


};gdjs.Level_324Code.asyncCallback23963148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite9"), gdjs.Level_324Code.GDNewSprite9Objects2);

{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite9Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite9Objects2[i].getBehavior("Animation").resumeAnimation();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4.5", false);
}

{ //Subevents
gdjs.Level_324Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Level_324Code.localVariables.length = 0;
}
gdjs.Level_324Code.idToCallbackMap.set(23963148, gdjs.Level_324Code.asyncCallback23963148);
gdjs.Level_324Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324Code.localVariables);
for (const obj of gdjs.Level_324Code.GDNewSprite9Objects1) asyncObjectsList.addObject("NewSprite9", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level_324Code.asyncCallback23963148(runtimeScene, asyncObjectsList)), 23963148, asyncObjectsList);
}
}

}


};gdjs.Level_324Code.asyncCallback12790420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_324Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects2[i].getBehavior("Physics2").setDynamic();
}
}
gdjs.Level_324Code.localVariables.length = 0;
}
gdjs.Level_324Code.idToCallbackMap.set(12790420, gdjs.Level_324Code.asyncCallback12790420);
gdjs.Level_324Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_324Code.localVariables);
for (const obj of gdjs.Level_324Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Level_324Code.asyncCallback12790420(runtimeScene, asyncObjectsList)), 12790420, asyncObjectsList);
}
}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324Code.GDNewSprite2Objects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewTiledSpriteObjects2Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Level_324Code.GDNewTiledSpriteObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_324Code.GDNewSprite2Objects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewTiledSprite2Objects2Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Level_324Code.GDNewTiledSprite2Objects2});
gdjs.Level_324Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324Code.GDNewTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").applyForceTowardPosition((gdjs.evtTools.common.distanceBetweenPositions3D((gdjs.Level_324Code.GDNewSprite2Objects1[i].getPointX("")), (gdjs.Level_324Code.GDNewSprite2Objects1[i].getPointY("")), 0, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0)) / 100, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (gdjs.Level_324Code.GDNewSprite2Objects1[i].getPointX("points")), (gdjs.Level_324Code.GDNewSprite2Objects1[i].getPointY("points")));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}

{ //Subevents
gdjs.Level_324Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Level_324Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite5Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].setAnimationFrame(2);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}

{ //Subevents
gdjs.Level_324Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Level_324Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects1Objects, "Physics2", gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite6Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDNewSprite2Objects1 */
/* Reuse gdjs.Level_324Code.GDNewSprite6Objects1 */
gdjs.Level_324Code.GDNewSprite9Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite9Objects1Objects, (( gdjs.Level_324Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.Level_324Code.GDNewSprite6Objects1[0].getPointX("")) - 10, (( gdjs.Level_324Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.Level_324Code.GDNewSprite6Objects1[0].getPointY("")) - 20, "");
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite9Objects1[i].setAngle(-90);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite9Objects1[i].getBehavior("Resizable").setSize((( gdjs.Level_324Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.Level_324Code.GDNewSprite6Objects1[0].getHeight()), (( gdjs.Level_324Code.GDNewSprite6Objects1.length === 0 ) ? 0 :gdjs.Level_324Code.GDNewSprite6Objects1[0].getWidth()));
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].hide();
}
}

{ //Subevents
gdjs.Level_324Code.eventsList3(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].setAnimationFrame(1);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(10);
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewTextObjects1[i].getBehavior("Text").setText(("Clicks: ") + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].setY(44);
}
}
{for(var i = 0, len = gdjs.Level_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewSprite2Objects1[i].setX(41);
}
}

{ //Subevents
gdjs.Level_324Code.eventsList4(runtimeScene);} //End of subevents
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

gdjs.Level_324Code.GDNewSprite2Objects1.length = 0;

gdjs.Level_324Code.GDNewTiledSpriteObjects1.length = 0;

gdjs.Level_324Code.GDNewTiledSprite2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_324Code.GDNewSprite2Objects1_1final.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects1_1final.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Level_324Code.GDNewTiledSpriteObjects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewTiledSpriteObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDNewSprite2Objects1_1final.indexOf(gdjs.Level_324Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.Level_324Code.GDNewSprite2Objects1_1final.push(gdjs.Level_324Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_324Code.GDNewTiledSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDNewTiledSpriteObjects1_1final.indexOf(gdjs.Level_324Code.GDNewTiledSpriteObjects2[j]) === -1 )
            gdjs.Level_324Code.GDNewTiledSpriteObjects1_1final.push(gdjs.Level_324Code.GDNewTiledSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_324Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Level_324Code.GDNewTiledSprite2Objects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewSprite2Objects2Objects, "Physics2", gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewTiledSprite2Objects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324Code.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDNewSprite2Objects1_1final.indexOf(gdjs.Level_324Code.GDNewSprite2Objects2[j]) === -1 )
            gdjs.Level_324Code.GDNewSprite2Objects1_1final.push(gdjs.Level_324Code.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_324Code.GDNewTiledSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDNewTiledSprite2Objects1_1final.indexOf(gdjs.Level_324Code.GDNewTiledSprite2Objects2[j]) === -1 )
            gdjs.Level_324Code.GDNewTiledSprite2Objects1_1final.push(gdjs.Level_324Code.GDNewTiledSprite2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_324Code.GDNewSprite2Objects1_1final, gdjs.Level_324Code.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.Level_324Code.GDNewTiledSpriteObjects1_1final, gdjs.Level_324Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(gdjs.Level_324Code.GDNewTiledSprite2Objects1_1final, gdjs.Level_324Code.GDNewTiledSprite2Objects1);
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

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDNewTextObjects1.length = 0;
gdjs.Level_324Code.GDNewTextObjects2.length = 0;
gdjs.Level_324Code.GDNewTextObjects3.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Level_324Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_324Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_324Code.GDNewSpriteObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite3Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite3Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite3Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite4Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite4Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite4Objects3.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite2Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite5Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite5Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite5Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite7Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite7Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite7Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite8Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite8Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite8Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite6Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite6Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite6Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite9Objects3.length = 0;
gdjs.Level_324Code.GDvolumesliderObjects1.length = 0;
gdjs.Level_324Code.GDvolumesliderObjects2.length = 0;
gdjs.Level_324Code.GDvolumesliderObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Level_324Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Level_324Code.GDNewSprite9_9595nextObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite45Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite45Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite45Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite11Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite11Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite11Objects3.length = 0;

gdjs.Level_324Code.eventsList5(runtimeScene);
gdjs.Level_324Code.GDNewTextObjects1.length = 0;
gdjs.Level_324Code.GDNewTextObjects2.length = 0;
gdjs.Level_324Code.GDNewTextObjects3.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_324Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Level_324Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_324Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_324Code.GDNewSpriteObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite3Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite3Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite3Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite4Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite4Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite4Objects3.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_324Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite2Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite5Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite5Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite5Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite7Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite7Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite7Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite8Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite8Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite8Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite6Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite6Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite6Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite9Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite9Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite9Objects3.length = 0;
gdjs.Level_324Code.GDvolumesliderObjects1.length = 0;
gdjs.Level_324Code.GDvolumesliderObjects2.length = 0;
gdjs.Level_324Code.GDvolumesliderObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects1.length = 0;
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects2.length = 0;
gdjs.Level_324Code.GDNewSprite67_9595you_9595winObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite9_9595nextObjects1.length = 0;
gdjs.Level_324Code.GDNewSprite9_9595nextObjects2.length = 0;
gdjs.Level_324Code.GDNewSprite9_9595nextObjects3.length = 0;
gdjs.Level_324Code.GDNewSprite45Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite45Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite45Objects3.length = 0;
gdjs.Level_324Code.GDNewSprite11Objects1.length = 0;
gdjs.Level_324Code.GDNewSprite11Objects2.length = 0;
gdjs.Level_324Code.GDNewSprite11Objects3.length = 0;


return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;
