export default {
  widgets: [
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
                  buildHookId: '60edc748e2a3461de3b0004b',
                  title: 'Sanity Studio',
                  name: 'single-source-site-sample-studio',
                  apiId: '90cd3b71-3c42-4858-84e6-fc5632eb716c'
                },
                {
                  buildHookId: '60edc7488303d615ad4ca07c',
                  title: 'Blog Website',
                  name: 'single-source-site-sample',
                  apiId: '70c4f03d-4b8f-4d54-8a9c-ac5475ca2c70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fhiguera/single-source-site-sample',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://single-source-site-sample.netlify.app', category: 'apps'}
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
