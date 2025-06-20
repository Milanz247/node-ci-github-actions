// Jenkinsfile
pipeline {
    agent any

    environment {
        
        DOCKER_USERNAME = 'miilanz247' 
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    // Global variable එකක් හදනවා image name එකට
                    env.DOCKER_IMAGE_NAME = "${DOCKER_USERNAME}/node-app-pipeline:${env.BUILD_NUMBER}"
                }
                echo "Pipeline started for image: ${env.DOCKER_IMAGE_NAME}"
            }
        }

        stage('Checkout Code') {
            steps {
                // Git repo එක checkout කරනවා
                checkout scm
                // Project sub-directory එකට මාරු වෙනවා
                dir('node-ci-github-actions') {
                    echo "Code checked out. Now in directory $(pwd)"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Project sub-directory එක ඇතුලේ commands run කරනවා
                dir('node-ci-github-actions') {
                    echo "Building Docker image..."
                    // Docker build command එක
                    sh "docker build -t ${env.DOCKER_IMAGE_NAME} ."
                }
            }
        }

        stage('Show Images') {
            steps {
                echo "Listing Docker images to confirm..."
                sh "docker images"
            }
        }
    }
    
    post {
        // Pipeline එක ඉවර වුණාම මොකද වෙන්න ඕන
        always {
            echo "Pipeline finished."
        }
        success {
            echo "Pipeline was successful! Ready for the next step."
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
