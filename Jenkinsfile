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
        bat '"C:\\Program Files\\Git\\bin\\git.exe" checkout master'
        bat '"C:\\Program Files\\Git\\bin\\git.exe" pull --rebase origin sandbox/test'
        bat '"C:\\Program Files\\Git\\bin\\git.exe" push'
      }
    }
  }
}