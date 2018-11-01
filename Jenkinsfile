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
         bat 'npm start &'
      }
    }      
    stage('Pushing to master') {
      steps {
        bat 'git push origin sandbox/test:master'
      }
    }
  }
}