// Jenkinsfile

pipeline {
   
    agent any

   
    environment {
        DOCKER_IMAGE_NAME = "miilanz247/node-app-pipeline"
        PROJECT_DIR       = "node-ci-github-actions"
    }

    stages {

        stage('Preparation') {
            steps {
                script {
                    env.DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
                }
                echo "Pipeline started for build number: ${env.DOCKER_IMAGE_TAG}"
                echo "Image will be named: ${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG}"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "--> Building the Docker image..."
                sh """
                    cd ${env.PROJECT_DIR}
                    docker build -t ${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG} .
                """
            }
        }

        // Stage 3: Show Docker Images
        stage('List Docker Images') {
            steps {
                echo "--> Listing Docker images to verify the build..."
                sh "docker images | grep ${env.DOCKER_IMAGE_NAME}"
            }
        }
    }

    
    post {
        always {
            echo "Pipeline finished. Cleaning up workspace..."
            cleanWs()
        }
        success {
            echo "Hooray! The pipeline was successful."
        }
        failure {
            echo "Oops! The pipeline failed."
        }
    }
}
