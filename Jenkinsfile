pipeline {
  agent any
    
  tools {nodejs "NodeJs"}
    
  stages {    
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
    stage('Pushing to master') {
      steps {
        sh 'git push origin sandbox/test:master'
      }
    }
  }
}