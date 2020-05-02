
import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";
export class StringManipulations implements StringManipulationService
{
print(word:string):void{
   console.log(word);
   console.log(word.toUpperCase());
   console.log(word.toLowerCase());
   console.log(word.charAt(2));
   console.log(word.concat("end"));
   console.log(word.length);
}
printWithSpace(sentence:string) : void
{
    var alphas:any[]; 
    for(let i = 0;i<sentence.length;i++) {
        let j=0;
        alphas[j]=sentence.charAt[i];
        j++;
        console.log(alphas[i]);
        console.log(" ");
    }
}
findVowel(str: string){
    let count:number=0;
    for(let j=0;j<str.length;j++)
	{
        
	 let ch=str.charAt(j);	
	  if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
	  {
           count++;		 
	  }
    }
    console.log(count);
}
}

var obj=new StringManipulations();
obj.print("Prograds");
//obj.printWithSpace("Prograds");
obj.findVowel("Prograds");

///////////////////////
class NumbersManipulations implements NumberManipulationService
{
    findPrime(num: number) : void
    {
        var flag:number=0;
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                flag=0;
                break;
            }
            else
            flag=1;
        }
        if(flag==1)
        console.log("prime no");
        else
        console.log("Not a prime no");
    }

    findMagic(num: number):void{
        var sum:number=0;
        while (num > 0 || sum > 9) 
        { 
            if (num == 0) 
            { 
                num = sum; 
                sum = 0; 
            } 
            sum += num % 10; 
            num /= 10; 
        } 
        if(sum==1)
        console.log("magic no");
        else 
        console.log("Not magic no");
    }

}

var obj2=new NumbersManipulations();
obj2.findPrime(6);
obj2.findMagic(199);