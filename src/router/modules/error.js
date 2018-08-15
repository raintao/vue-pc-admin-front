
function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/error/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'error')
    }
}

let routes = [
    {
        name: 'error404',
        path: '/404',
        meta: {
            title: '404'
        }
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default routes
