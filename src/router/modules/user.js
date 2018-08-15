function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/user/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'user')
    }
}

let routes = [
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登录'
        }
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default routes
