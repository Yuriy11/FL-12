// Your code goes here

function convert(...elements)
{
    result=[];
    for (let element of elements){
        if(typeof(element)==="string"){
            result.push(parseInt(element));
        }
        else if(typeof(element)==="number"){
            result.push(element.toString())
        }
        else{
            result.push(element)
        }
    }
    return result;
}

function executeforEach(array,func)
{
    for(let i=0;i<array.length;i++){
        array[i]=func(array[i]);  
    }
}

function mapArray(array,func)
{
    let _array=[];
    for(let element of array)
    {
        _array.push(parseInt(element));
    }
    executeforEach(_array,func);
    return _array;
}

function flipOver(string){
    result="";
    for(let i=string.length-1;i>=0;i--){
        result+=string[i];
    }
    return result;
}
function makeListFromRange(array){
    result=[];
    for(let i=array[0];i<=array[1];i++)
    {
        result.push(i);
    }
    return result;
}

getArrayOfKeys(objects,)