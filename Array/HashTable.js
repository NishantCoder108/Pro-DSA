/**
 * Hash Table is data structure like array,stack etc.
 * we can make own hash table such as queue or stack and
 * implement effectively and in easy way. but
 * We can use Hash table in Object of Javascript.
 */
let hash = {
  key: "value",
  2: "Branch",
  "3":"Genius"
};
hash["name"] = "Nishant";
hash[1] = "Best";

hash.skill = "javascript";
console.log(hash); /*{
    '1': 'Best',
    '2': 'Branch',
    '3': 'Genius',
    key: 'value',
    name: 'Nishant',
    skill: 'javascript'
  }
  */
let count = 0;
  for(const key in hash){
    count++;
    if(key === "name")console.log("I am Here,",key)
    console.log(key)//find key
    console.log(hash[key])//find value
  }

  console.log(2 in hash ,"count is",count)//true count is 6