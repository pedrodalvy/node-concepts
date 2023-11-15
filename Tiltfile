local_resource(
    'node-concepts-compile',
    cmd='npm run build',
    deps=[
        './src',
        './package.json',
        './package-lock.json'
    ],
    labels=['node-concepts']
)

docker_build(
    'node-concepts',
    '.',
    only=[
        'node_modules',
        'src',
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'tsconfig.build.json',
        'nest-cli.json',
    ],
    live_update=[
        sync('./dist', '/dist'),
    ]
)

k8s_yaml('kubernetes.yaml')

k8s_resource(
    'node-concepts',
    port_forwards='3000:3000',
    labels=['node-concepts'],
)
