function bean(word, cha){
    var count = 0;
    if( cha == undefined) { cha = "B"}
    for( var chaPoint = 0; chaPoint < word.length; chaPoint++){
        if(word.charAt(chaPoint) == cha) { count++; }
    }
    return count;
}

console.log(bean("BBC"));
console.log(bean("kakkerlak", "k"));