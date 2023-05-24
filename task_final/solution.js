function sendRequest(name, phone, address, goods, sum) {
    
    // Объявляем сам объект data и прописываем ему свойства, согласно заданию.
    let data = {client: `${name} ${phone}`,
                order: {
                    address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`,
                    sum: sum
                }, 
                goods: []};
    
    // Проходимся по массиву goods, тк нам нужно изменить в нем данные 
    for (let i = 0; i < goods.length; i++) {
        
        // Добавляем в свойство goods объекта data другой объект со свойствами title и count 
        data.goods.push({title: goods[i].title, count: goods[i].count});
    };
    
    // Задаем в объекте data свойство data (так нужно по заданию)
    let jsonData = JSON.stringify({data: data});
    return jsonData;
};
