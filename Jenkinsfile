pipeline {
  agent any
    
  tools {nodejs "Node"}
    
  stages {
              
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Run api Tests') {
      steps {
        withCredentials([string(credentialsId: 'AIRPORT_GAP_TOKEN', variable: 'AIRPORT_GAP_TOKEN')]) {
          sh 'npm test'
        }
      }
    }      
  }
}