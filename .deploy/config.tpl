name: songbird
service: <FILL IN>
org: <FILL IN>
projectDirectory: app

qa:
  taskRole: <FILL IN>
  executionRole: <FILL IN>
  deployment:
    command: ["npm", "start"]
    cpu: 1
    memory: 128
    port: 3001
    desiredCount: 1
    version: latest
  loadBalancer:
    targetGroupArn: <FILL IN>
