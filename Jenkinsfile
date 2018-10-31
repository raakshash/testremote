pipeline {
  agent any
    
  tools {nodejs "node"}
    
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