//!Strings
//Strings are sequence of characters used to repsresent text in js
//Strings are immutable(original string cannot be modified after creation)

//!Ways of creating a string
//*1)Single Quotes('')
let tranier = 'pavan';
console.log(tranier)//pavan
console.log(typeof tranier)//string
//*2)Double Quotes(" ")
let subject = "Core Java";
console.log(subject)//Core Java
console.log(typeof subject)//String

//*3)Template Literals(``)
let durationInDays = `90`
console.log(durationInDays)//90
console.log(typeof durationInDays)//string

//*Intresting facts about ``(Backticks)
//ES6
//supports interpolation ${}
let user = "monty"
let title = "model"
let age = 25
console.log(`My name is ${title} ${user} and my age is ${age + 5} years old`)
//multi-line string
console.log(`
  good 
  evening
  ...`
)
//!Accesing the charaters of a string
//To achive  we use the concept of indexing
//Insex values are start from 0
let vechicle = "Bus"
console.log(vechicle[0])//B
console.log(vechicle[1])//U
console.log(vechicle[100])//undefine
console.log(vechicle[-1])//undefine

//!Strings are immutable?
let greet = "Hii"
console.log(greet)//Hi
greet[1] = "o"
console.log(greet)//Hi

//!Length
let school = "NBCHS"
console.log(school.length)//5
console.log(school[school.length - 1])//S
console.log(school[school.length - 2])//H


//!Methods

//!1)toUpperCase
let str1 = "mkSaesJH"
console.log(str1.toUpperCase())

//!2)toLowerCase
let str2 = "mkSaesJH"
console.log(str1.toUpperCase())

//!3)trim()
let str3 = " Java Script        "
console.log(str3.trim())
console.log(str3.length)
//!4)at(index)
let str4 = "hello"
console.log(str4.at(0))//h
console.log(str4.at(4))//o
console.log(str4.at(100))//undefine
console.log(str4.at(-1))//o


//!5)slice(startIndex,endIndex)
// extract a portion of a string and return a new string
// startIndex is included where endIndex is excluded
// negative index is supported
// if startIndex is greater than endIndex it returns ""
// if only startIndex is specified it starts extracting from that index till the last character
let str5 = "Classes starts at 06.30"
console.log(str5.slice(3)) //sses starts at 06.30
console.log(str5.slice(7, 10)) // st
console.log(str5.slice(10, 11)) //a
console.log(str5.slice(11, 11)) //""
console.log(str5.slice(-6, -2)) // 06.
console.log(str5.slice(4, -6)) //ses starts at
console.log(str5.slice(-6, 4)) //""
console.log(str5.slice(10, 2)) //""

//!6)substring(startIndex,endIndex)
// extract a portion of a string and return a new string
// startIndex is included where endIndex is excluded
// negative index will be converted to zero
// if startIndex is greater than endIndex it returns swap their indexes
// if only startIndex is specified it starts extracting from that index till the last character
let str6 = "Classes starts at 06.30"
console.log(str6.substring(3)) //sses starts at 06.30
console.log(str6.substring(7, 10)) // st
console.log(str6.substring(10, 11)) //a
console.log(str6.substring(11, 11)) //""
console.log(str6.substring(-6, -2)) //""
console.log(str6.substring(4, -6)) //Clas
console.log(str6.substring(-6, 4)) //Clas
console.log(str6.substring(10, 2)) //asses st

//!7)includes(searchString,startIndex)
//checks weather searchString is present in the given original string or not
//if present returns true else returns false
//Negative startIndex will be converted to zero
let str7 = "DASARA HOLIDAYS STARTS FROM"
console.log(str7.includes("A"))//true
console.log(str7.includes("Z"))//false
console.log(str7.includes("DA", 0))//true
console.log(str7.includes("DA", 4))//true
console.log(str7.includes("DA", 15))//false
console.log(str7.includes("DA", -100))//true
console.log(str7.includes("DA", 12))//false

//!8)indexof(searchString,startIndex)
//it will return the index of the first accurence of the given string
//if present returs index else return -1
//if searchString is not present it returns -1
//Negitave startIndex will be converted to zero
let str8 = "DASARA HOLIDAYS STARTS FROM"
console.log(str8.indexOf("A"))//1
console.log(str8.indexOf("Z"))//-1
console.log(str8.indexOf("DA", 0))//0
console.log(str8.indexOf("DA", 4))//11
console.log(str8.indexOf("DA", 15))//-1
console.log(str8.indexOf("DA", -100))//0
console.log(str8.indexOf("DA", 12))//-1

//!9)replace(oldString.newString)
//replace - replaces only the first accurence of the given string
//replaceAll -replaces all the accurence of the given string
let srt9 = "I LOVE YOU I LOVE YOU"
console.log(srt9.replace("YOU", "MYSELF"))//I LOVE MYSELF I LOVE YOU
console.log(srt9.replaceAll("YOU", "MYSELF"))//I LOVE MYSELF I LOVE MYSELF

//!10)split(separator)
// convert string to array based on the separator provided
let str10 = "TRISHA VIJAY"
console.log(str10.split(" ")) //["TRISHA","VIJAY"]

let iplTeams = "SRH-DC-RCB-CSK MI"
console.log(iplTeams.split("-")) //['SRH', 'DC', 'RCB', 'CSK MI']

//!11)startsWith(searchString,startIndex)
// checks weather the given searchString starts with the same characters of the given original string
//if startIndex is negative it is treated as zero
let str11 = "Hope you had a proper sleep"
console.log(str11.startsWith("H")) //true
console.log(str11.startsWith("r")) //false
console.log(str11.startsWith("Ho", 0)) //true
console.log(str11.startsWith("Ho", 1)) //false
console.log(str11.startsWith("Ho", -100)) //true
console.log(str11.startsWith("you", 5)) //true

//!12)endsWith(searchString,length)
// checks weather the given searchString ends with the same characters of the given original string
//if length is negative it is treated as zero
let str12 = "Here completes string concept"
console.log(str12.endsWith("ept")) //true
console.log(str12.endsWith("ppt")) //false
console.log(str12.endsWith("ept", 28)) //false
console.log(str12.endsWith("con", 25)) //true
console.log(str12.endsWith("con", -100)) //false



