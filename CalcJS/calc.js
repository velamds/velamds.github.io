function GetNumbers(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    nums = [num1 , num2];
    return nums;
}

function Add(){
    nums = GetNumbers();
    result = nums[0] + nums[1];
    ShowResult(result);
}

function Sub(){
    nums = GetNumbers();
    result = nums[0] - nums[1];
    ShowResult(result);
}

function Mul(){
    nums = GetNumbers();
    result = nums[0] * nums[1];
    ShowResult(result);
}

function Div(){
    nums = GetNumbers();
    result = nums[0] / nums[1];
    ShowResult(result);
}

function ShowResult(result){
    document.getElementById("result").innerHTML = result;
}