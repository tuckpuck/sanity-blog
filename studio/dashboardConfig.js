export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1ce07d37258dd43a2d1d9d',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-zd8xqnuc',
                  apiId: '5c3de742-dcdf-4a51-ac8b-13cb06d8b4d7'
                },
                {
                  buildHookId: '5d1ce07d89374b0bd5f3c196',
                  title: 'Blog Website',
                  name: 'sanity-blog-web',
                  apiId: '75273014-ec5c-4f5d-9d2e-97446e9efd67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuckpuck/sanity-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-blog-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
