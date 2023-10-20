const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

  const input=prompt('Enter an Item Name')
  const found = items.find(item => item.name === name);
  const found = items.find(item => item.name === name);
  if(found){
    console.log('we found it');
    console.log(found);
  }
  else {
    console.log(`we could not find an item with the name ${name}`);
  }