function r(){
const rule = document.getElementById("rule");
rule.innerHTML='';
let text = 'Let\'s understand the rules first:';
let i = 0;
const typing = () => {
    if(i < text.length) {
        rule.innerHTML += text.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
};
typing();

setTimeout(r, 100000);
}

r();