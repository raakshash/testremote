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
        sh "echo test yet to be written"
      }
    }
    stage('git push'){
      steps{
        withEnv(["TMP_MERGE_BRANCH=tmp-merge-${env.BUILD_NUMBER}"]){
              sh '''
              git branch -d $TMP_MERGE_BRANCH || true
              git branch $TMP_MERGE_BRANCH
              git checkout $TMP_MERGE_BRANCH
              git log --max-count=5 --graph --decorate --oneline --abbrev-commit origin/master $TMP_MERGE_BRANCH
              git branch -f master $TMP_MERGE_BRANCH
              git checkout master
              git branch -d $TMP_MERGE_BRANCH
              git symbolic-ref HEAD || true
              git rev-parse refs/heads/master || true
              git rev-parse HEAD || true
              git status
              git push origin master
              '''
          }
      }
    }      
  }
}