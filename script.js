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
     value=value.toLowerCase();
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
    let red,blue,green,yellow;
    console.log('Let the AwardCeremony begin!');
    let array=[score.red,score.blue,score.green,score.yellow];
    array=array.sort((a,b)=>{
return b-a; });
    array.forEach((item,i)=>{
if (item==score.red) {
    red=i;
}else if(item==score.blue) {
    blue=i;
}else if(item==score.green){
    green=i;
}else{
    yellow=i;
}
    });
    ///First place;
if(red==0){console.log(`Red came first with ${score.red} points.`);}
else if(blue==0){console.log(`Blue came first with ${score.blue} points.`);}
else if(green==0){console.log(`Green came first with ${score.green} points.`);}
else{console.log(`Yellow came first with ${score.yellow} points.`);}
//second place
if(red==1){console.log(`Red came second with ${score.red} points.`);}
else if(blue==1){console.log(`Blue came second with ${score.blue} points.`);}
else if(green==1){console.log(`Green came second with ${score.green} points.`);}
else{console.log(`Yellow came second with ${score.yellow} points.`);}
//3rd place
if(red==2){console.log(`Red came third with ${score.red} points.`);}
else if(blue==2){console.log(`Blue came third with ${score.blue} points.`);}
else if(green==2){console.log(`Green came third with ${score.green} points.`);}
else{console.log(`Yellow came third with ${score.yellow} points.`);}
if(red==3){console.log(`Red came last with ${score.red} points.`);}
else if(blue==3){console.log(`Blue came last with ${score.blue} points.`);}
else if(green==3){console.log(`Green came last with ${score.green} points.`);}
else{console.log(`Yellow came last with ${score.yellow} points.`);}

}
OpeningCeremony(Race100M);
