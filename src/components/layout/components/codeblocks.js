export default {
	bash: `echo Hello World`,
	c: `int main(void)
{
  puts("Hello Geeks!");
  return EXIT_SUCCESS;
}
`,
	cpp: `#include <iostream.h>
main() {
  cout << "Hello Geeks!" << endl;
  return 0;
}`,
	csharp: `class HelloWorld {
 static void Main() {
  System.Console.WriteLine("Hello, Geeks!");
 }
}`,
	dart: `main() {
  print("Hello Geeks!");
}
`,

	erlang: `
-module(hello).
-export([hello/0]).
hello() ->
io:format("Hello Geeks!~n", []).
`,
	fsharp: `printf "Hello Geeks!\n"`,
	graphql: `query FirstSevenStarShips {
  allStarships(first: 7) {
    edges {
      node {
        id
        name
        model
        costInCredits
      }
    }
}
`,
	go: `package main
import "fmt"
func main() {
  fmt.Printf("Hello Geeks\n")
}
`,
	groovy: `println "Hello Geeks"`,
	haskell: `main = putStrLn "Hello Geeks"`,
	html: `<html>
<!-- Hello Geeks in HTML -->
<head>
<title>Hello Geeks!</title>
</head>
<body>
Hello Geeks!
</body>
</html>
`,
	java: `class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello Geeks!" );
  }
}`,
	javascript: `var sys = require("sys");
sys.puts("Hello Geeks");
`,
	jsx: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Geeks" />, 
  mountNode 
);`,
	kotlin: `fun main(args : Array<String>) {
  println("Hello, Geeks!")
}
`,
	makefile: `all:
  @echo "Hello Geeks!"
`,
	matlab: `disp("Hello Geeks");`,
	objectivec: `#include <stdio.h>
#include <objpak.h>
int
main (int argc, char **argv)
{
  id set =[Set new];
  argv++;
  while (--argc)
  [set add: [String str:*argv++]];
  [set
   do
  :{
    :each | printf ("hello, %s!\n",[each str]);
   }
  ];
  return 0;
  }
`,
	ocaml: `print_string "Hello Geeks!\n";;`,
	php: `<?php
  echo "Hello World!";
?>
`,
	python3: `
print (Hello Geeks!)
`,
	scala: `object HelloWorld extends App {
  println("Hello world!")
}
`,
	sql: `SELECT "Hello World";`,
	swift: `println("Hello, world!")`,
	typescript: `var exclamation: string = "Hello";
var noun: string = "World";
console.log(exclamation + noun);
`
};
