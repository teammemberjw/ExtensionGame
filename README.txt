# ExtensionGame
This is an in-progress guide to reading and understanding this code.

NOTE:
If you choose to participate in this project, you shouldn't assume that these conventions are common in javascript developing -- they
are simply things I like to do. I don't claim to know all the best practices, so be warned! And if you think these techniques are bad, 
feel free to say so -- I am open to input.

---------------------------------------------------------------------------------------------
CLASSES:
---------------------------------------------------------------------------------------------
We aren't using actual classes, but we will use something that is mostly the same thing.
Unlike in java where we would define a class and then create instances of the class with a constructor, in this project we will have
functions that return object literals.  Here is an example:

/*
 MAN OBJECT
 RESPONSIBILITIES: tells you his name in upper case
*/

function makeMan(){

  /*private variables*/

  var name;

  /*private methods*/

  var makeUpper = function(word){
    return name.toUpperCase();
  }

  /* in the object literal below we define public methods */

  return {
    tellName: function(){
      alert(makeUpper(name));
    }

    setName: function(mansName){
      name = mansName;
    }
  }
}

These class-defining-and-instanciating functions will always be prepended with "make".

We can do something similar to subclassing by creating another function like so:

/*
*  AGED-MAN OBJECT - SUBCLASS OF MAN
*  RESPONSIBILITIES: Tells age
*/

function makeAgedMan(){
  var base = makeMan(); // starts by creating a man object

  /*Private Variables*/
  var age;

  /*Extending functionality of Man*/

  base.tellAge = function(){
    alert(age);
  }
  base.setAge = function(ageNumber){
    age = ageNumber;
  }

  return base;
}

Now this will happen:

var middleAgedMan = makeAgedMan();
middleAgedMan.setName("Tom");
middleAgedMan.setAge(46);
middleAgedMan.tellName(); // "TOM"
middleAgedMan.tellAge(); // "46

var testMan = makeMan();
var testMan.setAge(46); // ERROR

----------------------------------------------------------------------------------------------
