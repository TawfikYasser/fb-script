/** 
 * The following JavaScript Code to delete/accept all friend requests in one second.
 * حذف او قبول | Accept or Delete
 */
document.querySelectorAll('[aria-label^="حذف"]');
var deletedList = [...document.querySelectorAll('[aria-label^="حذف"]')];
deletedList.forEach(card => card.click());
