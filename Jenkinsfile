pipeline {
         agent any
         stages {
                 stage('Build') {
                 steps {
                     echo 'Hi, Starting to build the Tests.'
                 }
                 }
                 stage('Test') {
                 steps {
                    input('Do you want to proceed?')
                 }
                 }
                 stage('QA') {
                 parallel { 
                            stage('QA start ') {
                           steps {
                                echo "Start the deploy ."
                           } 
                           }
                            stage('Deploying now') {
                            agent {
                                    docker {
                                            image ‘blueimp/nightwatch’
                                           }
                                    }
                            
                              steps {
                                echo "Docker Created"
                              }
                           }
                           }
                           }
                stage('Report'){
                    steps{
                        allure includeProperties: false, jdk: '', results: [[path: 'target/allure-results']]
                        }
                    }
                }
            }