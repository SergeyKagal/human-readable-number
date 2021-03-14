module.exports = function toReadable (number) {
    
 
    if (!number) return 'zero';
   
var nmbrs={
    0:'',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',    
    11: 'eleven',
    12: 'twelve',    
    13: 'thirteen',    
    14: 'fourteen',    
    15: 'fifteen',    
    16: 'sixteen',    
    17: 'seventeen',    
    18: 'eighteen',   
    19: 'nineteen',    
    20: 'twenty',    
    30: 'thirty',    
    40: 'forty',    
    50: 'fifty',    
    60: 'sixty',    
    70: 'seventy',    
    80: 'eighty',    
    90: 'ninety',    
    100: 'hundred',        
};
numstr=number.toString();
if (numstr.length==1)return nmbrs[number];
else if (numstr.length==2 && number>9 && number<21) return nmbrs[number];
else if (numstr.length==2 && number>20 && number<100 && number%10==0) return nmbrs[number];
else if (numstr.length==2 && number>20 && number<100 && number%10!=0)
    {
      var a=Math.trunc(number/10)*10;
      var b=number%10;
      if (!b) return nmbrs[a];
      return nmbrs[a]+' '+nmbrs[b]; 
    }    
else if (numstr.length==3)
    {
        var a=Math.trunc(number/100);
        var b=Math.trunc(number%100);
        if (!b) return nmbrs[a]+' '+nmbrs[100];
        if (b>0 && b<21) return nmbrs[a]+' '+nmbrs[100]+' '+nmbrs[b];
        else if (b>20)
            {
                var c=Math.trunc(b/10)*10;
                var d=(number%100)%10;

                   if(!d)return  nmbrs[a]+' '+nmbrs[100]+' '+nmbrs[c];

                return nmbrs[a]+' '+nmbrs[100]+' '+nmbrs[c]+' '+nmbrs[d]; 
            }
    }
}
