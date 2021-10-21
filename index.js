Leetcode 21 Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Ex1) Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//pair program update w/ algo club drove by Shelby along with Rebecca and Martin
var mergeTwoLists = function(l1, l2) {

    //base case
      if(!l1 || !l2) return l2 ? l2 : l1
     
      if(l1.val <= l2.val) {
 
    //add recursion call
      l1.next = mergeTwoLists(l1.next, l2)
        return l1
      } else {
        l2.next = mergeTwoLists(l1, l2.next)        
        return l2
    }

};

//do it recursion, what's base case
