const UserController = require('./controllers/UserController')
const CategoryController = require('./controllers/CategoryController')

module.exports = (app) => {
    // user section
    // ============
    // create user
    app.post('/user',
        UserController.create
    )

    // update user
    app.put('/user/:userId', 
        UserController.put
    )

    // delete user
    app.delete('/user/:userId', 
        UserController.remove
    )

    // view user
    app.get('/users', 
        UserController.index
    )

    // view user by Id
    app.get('/user/:userId', 
        UserController.show
    )




    // category section
    // ============
    // create category
    app.post('/category',
        CategoryController.create
    )

    // update category
    app.put('/category/:categoryId', 
        CategoryController.put
    )

    // delete category
    app.delete('/category/:categoryId', 
        CategoryController.remove
    )

    // view category
    app.get('/categories', 
        CategoryController.index
    )

    // view category by Id
    app.get('/category/:categoryId', 
        CategoryController.show
    )
}