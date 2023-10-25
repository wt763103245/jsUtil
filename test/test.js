/*
 * @Author: 萌新王
 * @Date: 2023-07-24 11:12:13
 * @LastEditors: 萌新王
 * @LastEditTime: 2023-10-25 16:43:36
 * @FilePath: \OneDrive\util\js\test\test.js
 * @Email: 763103245@qq.com
 * @Qq: 763103245
 */
let str = "example.com.file.txt";  
let lastDotIndex = str.lastIndexOf('.');  
let newStr = str.substring(0, lastDotIndex);  
console.log(newStr);  // 输出 "example.com.file"

let newStr2 = str.substring(lastDotIndex + 1, str.length);  
console.log(newStr2);  // 输出 "txt"
