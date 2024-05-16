function OpeningCeremony(Race100M){
    let score={
        red:0,
        blue:0,
        green:0,
        yellow:0
    }
    setTimeout(()=>{
        console.log('Let the games begin');
        console.log("Score:",score);
        Race100M(LongJump,score);
    },1000); 
}
function Race100M(LongJump,score){
    setTimeout(()=>{
        console.log('Let the Race100M begin!');
        let red=10+(Math.random())*5;
        let blue=10+(Math.random())*5;
        let green=10+(Math.random())*5;
        let yellow=10+(Math.random())*5;
       // console.log(`Time taken by: red:${red}secs blue:${blue}secs green:${green}secs yellow:${yellow}secs`);
        let array=[red,blue,green,yellow];
         array=array.sort((a,b)=>{
            return a-b;
        });
if(array[0]==red){
    score.red=50;
    console.log(`Winner:red`);
}else if(array[0]==blue){
    score.blue=50;
    console.log(`Winner:blue`);
}else if(array[0]==green){
    score.green=50;
    console.log(`Winner:green`);
}else{
    score.yellow=50;
    console.log(`Winner:yellow`);}
//runnerUp
    if(array[1]==red){
        score.red+=25;
        console.log(`RunnerUp:red`);
    }else if(array[1]==blue){
        score.blue+=25;
        console.log(`RunnerUp:blue`);
    }else if(array[1]==green){
        score.green+=25;
        console.log(`RunnerUp:green`);
    }else{
        score.yellow+=25;
        console.log(`RunnerUp:yellow`);}

    console.log('Score after  Race100M:',score);
    LongJump(HighJump,score);
    },3000); 
}

function  LongJump(HighJump,score){
setTimeout(() => {
    console.log('Let the LongJump begin!');
    //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
   //(Math.random())*4 returns between 0 and 3
    let random=Math.floor((Math.random())*4);
    if(random==0){
        score.red+=150;
        console.log(`Winner:red`);
    }else if(random==1){
        score.blue+=150;
        console.log(`Winner:blue`);
    }else if(random==2){
        score.green+=150;
        console.log(`Winner:green`);
    }else if(random==3){
        score.yellow+=150;
        console.log(`Winner:yellow`);
    }
    console.log('Score after LongJump:',score);
   HighJump(AwardCeremony,score); 
},2000);
}
function HighJump(AwardCeremony,score){
    console.log('Let the HighJump begin!');
    let value=prompt("What colour secured the highest jump?");
    if(value!=null){
    value=value.toLowerCase();}
    if(value=="red"){
        score.red+=100;
        console.log(`Winner:red`); 
        console.log('Score after HighJump:',score);
    }else if(value=="blue"){
        score.blue+=100;
        console.log(`Winner:blue`); 
        console.log('Score after HighJump:',score);
    }else if(value=="green"){
        score.green+=100;
        console.log(`Winner:green`); 
        console.log('Score after HighJump:',score);
    }else if(value=="yellow"){
        score.yellow+=100;
        console.log(`Winner:yellow`); 
        console.log('Score after HighJump:',score);
    }else{
        console.log("Event was cancelled");
    }
    AwardCeremony(score); 
} 
function AwardCeremony(score){
    let r=true,b=true,g=true,y=true;
    console.log('Let the AwardCeremony begin!');
    let array=[score.red,score.blue,score.green,score.yellow];
    array=array.sort((a,b)=>{
return b-a; });
//if scores are tie both colors come in same place!
//not enough data is given how the code should behave in case of tie!
    array.forEach((item,i)=>{
if (item==score.red && r) {
    r=false;
   place(i,"Red",score.red);}
if(item==score.blue && b) {
    b=false;
    place(i,"Blue",score.blue);}
if(item==score.green && g){
    g=false;
    place(i,"Green",score.green);}
if(item==score.yellow && y){
    y=false;
    place(i,"Yellow",score.yellow);
}
    });
function place(val,name,points){
if(val==0){
    console.log(`${name} came first with ${points} points.`);
}else if(val==1){
    console.log(`${name} came second with ${points} points.`);
}else if(val==2){
    console.log(`${name} came third with ${points} points.`);
}else{
    console.log(`${name} came last with ${points} points.`);
}
  }
}
OpeningCeremony(Race100M);
