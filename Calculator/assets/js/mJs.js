function clicked(val){
    if(val === "x"){
        val = '*';
        document.getElementById('textField').value += val;
    }
    else if(val ==='c'){
        document.getElementById('textField').value = "";
    }
    else if(val === '='){
        let exp = document.getElementById('textField').value;
        
        document.getElementById('textField').value = postfix_eval(exp);
    }
    else{
        document.getElementById('textField').value += val;
    }
    
}

function postfix_eval(expression){
    let post = infix_postfix(expression);
    let stack2 = [];
    op = "+-*/";
    for(let i = 0; i <post.length; i++){
        if(!isNaN(post[i])){
            stack2.push(post[i]);
        }
        else{
            x = stack2.pop();
            y = stack2.pop();
            if(x == 0 && post[i] == "/"){
                return "divisible by zero error";
            }else{
                let evalute = eval(y + post[i] + x);
                stack2.push(evalute)
            }
            
        }
    }
    return stack2.pop();

}

function preccedence(x, y){
    op = "+-*/";
    return op.indexOf(x) - op.indexOf(y) < 0;
}

function expression_vlaidty(expression){

    return true;
}

function infix_postfix(expression){
    let stack = [];
    let postfix = [];
    // if(!expression_vlaidty(expression)){
    //     return "Expression is not valid";
    // }
    let exp_ln = expression.length;
    let exp_index = 0;
    while(exp_index < exp_ln){
        let operand = "";

        if( isNaN(expression[exp_index]) == false ){
            for(let i = exp_index; i < exp_ln; i++){
                if( !isNaN(expression[exp_index]) || expression[exp_index] === '.' ){
                    operand += expression[exp_index];
                    exp_index++;
                }else{
                    break;
                }
                postfix.push(operand);
            }
        }
        else if( expression[exp_index] === '('){
            stack.push(expression[exp_index]);
            exp_index++;
        }
        else if( expression[exp_index] === ')' ){
            operator = stack.pop();
            while(operator != '('){
                postfix.push(operator);
                operator = stack.pop();
            }
            exp_index++;
        }
        else{
            let top = stack[stack.length - 1];
            let indx = expression[exp_index];

            if(stack.length === 0 || indx === '('){
                stack.push(indx);
                
            } 
            else{
                if( preccedence(top, indx) ){
                    stack.push(expression[exp_index]);
                }
                else{
                    postfix.push(stack.pop());
                    stack.push(indx);
                }
            } 
            exp_index++;
        }

    }
    
    ln = stack.length;
    for(let i = 0; i<ln; i++){
        postfix.push(stack.pop());
    }
    return postfix;
}



