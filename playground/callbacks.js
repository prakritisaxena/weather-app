const getUser = (id, callback) => {
    const user = {
        id,
        name: 'Vikram',
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(20, (user) => {
    console.log(user);
});
