const fetch = require('node-fetch')

function same_necklace(name1, name2){
    orig_name2 = name2
    if(name1.length !== name2.length) {
        false
        return
    }
    do {
        if(name1 === name2) {
            console.log("true")
            return
        } else {
            modified_name2 = name2.substr(1) + name2.substr(0, 1)
            name2 = modified_name2
            
            if(name2 === orig_name2){
                console.log("false")
                break;
            }
        }
    } while (true)
    return
}

function repeats(string) {
    counter = 0
    orig_string = string
    for(i = 0; i < string.length; i++){
        if(orig_string === string){
            counter++
        }
        temp = string.substr(1) + string.substr(0,1)
        string = temp
        if(i + 1 === string.length){
            break
        }
    }
    return counter
}
function bonus2(){
    console.log('In bonus 2')
    fetch("https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt").then(r=>r.text()).then(str=>{ const words = str.split("\n") 
    const matches = words.reduce((o,word)=>{ o[word] = words.reduce((o2,word2)=>
            { if(same_necklace(word,word2)){ o2.push(word2); } 
        return o2;
    },[])
    return o
},{})
    console.log(Object.keys(matches).find(k=>matches[k].length === 4)); 
});

}
function main(){
    let first_necklace = "a"
    let second_necklace = "abcabcabc"
    same_necklace(first_necklace, second_necklace)
    numRepeats = repeats(second_necklace)
    console.log(numRepeats)
    bonus2()
}

main()