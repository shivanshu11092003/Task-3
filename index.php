<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document object Model    </title>
    <style>
        .red{
            color: red;
        }
    </style>
</head>
<body>
  <?php
  echo "shivanshu";  

  ?>
  

    <p id="just" class="para"> this paragraph is for testing </p>
    <h1 id="hii"> hii everyone welcome!!</h2>
    <nav>
        Shivanshu Gupta
    </nav>
    <button id="btn">Button</button>

    <div>

    </div>
    <form id="form">
        <input type="text" name="text1" value="foo" />
        <input type="text" name="text2" value="bar" />
        <input type="text" name="text2" value="baz" />
        <input type="checkbox" name="check" checked disabled />
        <button name="intent" value="save">Save</button>
        <button name="intent" value="saveAsCopy">Save As Copy</button>
        <textarea id="msg" name="user_message"></textarea>
      </form>
      <form>
        <fieldset>
          <legend>Fruit juice size</legend>
          <p>
            <input type="radio" name="size" id="size_1" value="small" />
            <label for="size_1">Small</label>
          </p>
          <p>
            <input type="radio" name="size" id="size_2" value="medium" />
            <label for="size_2">Medium</label>
          </p>
          <p>
            <input type="radio" name="size" id="size_3" value="large" />
            <label for="size_3">Large</label>
          </p>
        </fieldset>
      </form>
      <output id="output"></output>
    <script src="learn.js">
        //  const id = document.getElementById("hii")
        //  id.classList.add("red");

    </script>
    <script>
        const btn = document.getElementById('btn');
        function fun(){
            console.log("Hello I am Clicked");
        }
        btn.addEventListener("click",fun);
        /* using addEventListener there is no override of function just in case of using direct onclick last function
        that is used is apply in onclick  */
    
      
        
       
    </script>

    <script>
        const fun2 = () =>{
            console.log("I am also Clicked")

        }
        btn.addEventListener("click",fun2);

    </script>
    <script src="ArrayMethod.js">
        
        
    </script>
</body>
</html>