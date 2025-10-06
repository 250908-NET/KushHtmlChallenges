let myList = [];

function addItem(item) 
{
    myList.push(item);
}

function printList()
{
    alert(myList.join(", "));
}