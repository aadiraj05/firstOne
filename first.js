/*Practice question-1

 num = prompt("enter a number you want to chech" );
 if( num % 5 === 0) 
 {
  console.log(num,"is multiple of 5")
 }
 else{
  console.log(num,"is not multiple of 5")
 }*/



  /*Practice question-2


 let marks = prompt("enter the marks of students");

  if(marks>=90 && marks<=100)
  {
    console.log("Grade A");
  }
  else if(marks>=70 && marks<=89){
    console.log("Grade B");
  }

  else if(marks>=60 && marks<=69){
    console.log("Grade C");
  }

  else if(marks>=50 && marks<=59){
    console.log("Grade D");
  }
  else if(marks>=0 && marks<=49){
    console.log("Grade F");
  }

  else{
    console.log("marks shold not be negative and grater than 100");
  }
    */

     /*Practice question-3
  
     for(let num = 0; num >=100; num++){
         
      if(num % 2 === 0 ){
        console.log("prime number=", num);
      }
     }*/

      /*Practice question-4

      let game_n0 = 69;
      let guessing_no = prompt("enter your guessed number");

      count = 1;

      while(count !== 100){

        if(guessing_no == game_n0 )
        {
          console.log("congratulation! You Win")
        }

        else{
          console.log("Sorry! You Loose\n Try Again")
        }
      count++
      }*/

      /*Practice question_5

      let full_name = prompt("enter the full name without any spaces between them:");


      
      console.log("@"+full_name+full_name.length);
      */

      /* Practice qiestion-6

      let marks = [85, 97, 44, 37, 76, 60];

      let sum = 0;

      for(let i = 0; i<marks.length; i++){
          
        sum += marks[i]; 

      }
        let average = sum/marks.length;
        console.log(`the average of marks ${marks} is ${average}`);
       */

      /* Practice question - 7

        let prices = [250,645,300,900,50]

          for(let i=0;i<prices.length;i++){

            discountable_price = prices[i]- (prices[0]/10);
            console.log(`Actual values of items  after offer --> ${discountable_price}`);

          } 
      */

      /* usng arrays methods
          array1 = [1,2,3,4,5,6,7];

          console.log(array1);

          console.log(array1.splice(2,3,102,103,104));
          console.log(array1);

          console.log(array1.splice(3,1,101,106));
          console.log(array1);
          console.log(array1.splice(2,0,110,119));
          console.log(array1);
        */ 

        // Practice questions on function

        /* practice question - 8

        function countVowels(str){

          count = 0

        for(const char of str){

        if(char==="a" ||char==="e"||char==="i"||char==="o"||char==="u"){

          count++;
        }

        }
         return count;
        }

        */

        /* Practiice Question - 9

        const countVowels = (str) =>{
          count = 0

          for(const char of str){
  
          if(char==="a" ||char==="e"||char==="i"||char==="o"||char==="u"){
  
            count++;
          }
  
          }
           return count;

        }

        */
       /* Practice question - 10 (map Metho)

       let arr = [1,2,3,4,5];
         let newarr = arr.map((val) => {
          return val* val;
        })

        console.log(newarr);
        console.log(arr);
        let calSquare = (val) =>{
        console.log(val**2);
       };
       */

      /* Practice Question  (filter Method)
       let arr = [1,2,3,4,5];

       let newArr = arr.filter((val) =>{

        return val%2 === 0;
       });

       console.log(newArr);
       */

      /* Practice question (reduce Method)
       let arr = [1,2,3,4,5];
        const output = arr.reduce((previous, current) =>{

          if(previous > current){
            return previous;
          }
          else return current;
        });
        console.log(output);

        */

        /* practice Question - 11

        let marks = [50,79,90,97,98,45,91,79,96,];

       let newMarks =  marks.filter((val) =>{

          return val > 90;
        });

        console.log(newMarks);
        
        */
       /* Practice Question - 12

        let n = prompt("enetr the value of n ");

        let arr = [];
        for(let i= 1;i<=n;i++){
          arr[i-1] = i;

        }

        console.log(arr);

        let sum = arr.reduce((pre,curr) =>{

          return pre + curr;
        });

      console.log("sum=", sum);

      let fact = arr.reduce((pre,curr) =>{

        return pre * curr;
      }); 

      console.log("fact=", fact);

      */

      
 
        