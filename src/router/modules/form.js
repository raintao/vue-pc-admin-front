import Layout from 'src/views/components/layout'

function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/form/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'form')
    }
}

let routes = {
    name: 'form',
    path: '/form',
    redirect: '/form/baseForm',
    component: Layout,
    meta: {
        title: '表单',
        icon: 'vue'
    },
    children: [
        // 常规表单
        {
            name: 'baseForm',
            path: 'baseForm',
            meta: {
                title: '常规表单',
                icon: 'vue'
            }
        }
    ]
}

routes.children.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default [routes]
