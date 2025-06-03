module.exports = {
  apps: [
    {
      name: 'seoprojet',
      script: 'npm run start',
      args: 'start -p 3800',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}; 