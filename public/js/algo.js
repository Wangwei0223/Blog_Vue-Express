// 第一题 顺序二维数组找最小
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function Find(target, array) {
    var row = arr.length - 1;
    for (let i = row, j = 0; i >= 0 && j < array[i].length;) {
        if (target == array[i][j]) {
            return true;
        } else if (target > array[i][j]) {
            j++;
            continue;
        } else if (target < array[i][j]) {
            i--;
            continue;
        }
    }
    return false;
}
// 第二题 替换空格
function replaceSpace(str) {
    return str.replace(/ /g, '%20');
}

console.log(Find(0, arr));

console.log(replaceSpace('Hello World!'));
// 从尾到头打印链表
function printListFromTailToHead(head) {
    if (!head) {
        return 0;
    } else {
        var arr = new Array();
        var cur = head;
        while (cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
        return arr.reverse();
    }
}

console.log([1, 2, 3, 4].slice(1, 4)); //左闭右开
//第四题 重构二叉树
function reConstructBinaryTree(pre, vin) {
    if (pre.length == 0 || vin.length == 0) return null;
    var index = vin.indexOf(pre[0]);
    var left = vin.slice(0, index);
    var right = vin.slice(index + 1);
    return {
        val: pre[0],
        left: reConstructBinaryTree(pre.slice(1, index + 1), left),
        right: reConstructBinaryTree(pre.slice(index + 1), right)
    }
}

var pre = [1, 2, 4, 7, 3, 5, 6, 8];
var vin = [4, 7, 2, 1, 5, 3, 8, 6];
console.log(JSON.stringify(reConstructBinaryTree(pre, vin)));

//第五题 实现队列
var result = [];
function push(node) {
    result.push(node);
}

function pop() {
    return result.shift();
}

// 第六题 旋转数组的最小值
function minInRotatedArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    if (arr[0] >= arr[arr.length - 1]) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return arr[i];
            }
        }
        return arr[arr.length - 1];
    } // 旋转了
    else {
        return arr[0];
    }
}

console.log('min number:' + minInRotatedArray([3, 4, 5, 1, 2]));

// 第七题 fib
// 1 1 2 3 5 8 13 
function fib(n) {
    var result = [];
    if (n <= 0) {
        return 0;
    }
    else if (n <= 2) {
        return 1;
    }
    else {
        result[1] = 1;
        result[2] = 2;
        for (let i = 3; i <= n; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }
        return result[n - 1];
    }
}

console.log(fib(10));

// 第八题 跳台阶
// 跳1个台阶有一种方法，跳2个台阶可以有两种跳法，而跳3个台阶则就是跳一个台阶和跳2个台阶方法总和
function jumpFloor(number) {
    if (number === 1) {
        return 1;
    }
    if (number === 2) {
        return 2;
    }
    var n1 = 1;
    var n2 = 1;
    var result = 0;
    for (let i = 3; i <= number; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}

// 第9题 变态跳台阶 f(n)=1+f(1)+f(2)+…+f(n-1)
function jumpFloorII(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    if (number === 2) return 2;
    var tmp = 0;
    while (number > 1) {
        tmp += jumpFloorII(number - 1);
        number--;
    }
    return tmp + 1;
}

// 第十题 矩形覆盖
function rectCover(number) {
    if (number === 1) return 1;
    if (number === 2) return 2;
    var n1 = 1;
    var n2 = 2;
    var result = 0;
    for (let i = 3; i <= number; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}

// 第十一题 二进制1个数
function NumberOf1(n) {
    var count = 0;
    while (n != 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
}

// 第十二题 数值的整数次方
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方

function Power(base, exponent) {
    if (exponent === 0) return 1;
    var result = 1, flag = false;
    if (exponent < 0) {
        exponent = Math.abs(exponent);
        flag = true;
    }

    while (exponent > 0) {
        result *= base;
        exponent--;
    }
    if (flag) result = 1 / result;
    return result;
}

// 第十三题 调整数组顺序
// 调整数组顺序

function reOrderArray(array) {
    var arr1 = [], arr2 = [];
    array.map(function (val, index) {
        val % 2 == 0 ? arr2.push(val) : arr1.push(val);
    });
    return arr1.concat(arr2);
}

// 第十五题 反转链表
function ReverseList(phead){
    if(phead==null||phead.next==null) return phead;
    var prev = null;
    var next = null;
    while(phead!=null){
        next = phead.next;
        phead.next = prev;
        prev = phead;
        phead = next;
    }
    return prev;
}

//第十六题 合并两个排序的链表
// 归并排序




