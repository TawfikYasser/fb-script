/**
 * 
 * The following JavaScript Code to delete/accept all friend requests in one second.
 * 
 */

const type = "حذف"; // type => حذف او قبول | Accept or Delete
document.querySelectorAll(`[aria-label^=${type}]`)
var deletedList = [...document.querySelectorAll(`[aria-label^=${type}]`)];
deletedList.forEach(card => card.click());