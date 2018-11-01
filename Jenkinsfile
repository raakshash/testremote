pipeline {
  agent any
    
  tools {nodejs "NodeJs"}
    
  stages {    
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         echo 'testing need to be configured'
      }
    }      
    stage('Pushing to master') {
      steps {
        bat 'git push origin sandbox/test:master'
      }
    }
  }
}