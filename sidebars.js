module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'Nc2 Labs',
      items: [
              {
                type: 'category',
                label: 'Migrate to Nutanix',
                items: ['Migrate/overview',
                        'Migrate/envdetails'],
              },
              {
                type: 'category',
                label: 'Setting up the Environment',
                items: ['SetEnv/overview',
                        'SetEnv/categoryandpolicy',
                        'SetEnv/policy',
                        'SetEnv/playbook',
                        'SetEnv/setuptakeaway'],
              },
              {
                type: 'category',
                label: 'Migrating Workloads',
                items: ['MigrateWLs/overview',
                        'MigrateWLs/setupmove',
                        'MigrateWLs/migratingvm',
                        'MigrateWLs/migrateplan',
                        'MigrateWLs/migratevm'],                        
              },
              {
                type: 'category',
                label: 'Advanced VM Migration',
                items: ['AdvMigrate/advancedmigrate',
                        'MigrateWLs/expadvplan',
                        'MigrateWLs/migratescale',
                        'MigrateWLs/migrateshares',
                        'MigrateWLs/migratesharemove',
                        'MigrateWLs/migratetakeaway'],
              },
              {
                type: 'category',
                label: 'Day 2 Management',
                items: ['Day2/overview'],
              },
              {
                type: 'category',
                label: 'Elastic Disaster Recovery',
                items: ['DR/overview'],
              },   
      ]
    },
  ]
};