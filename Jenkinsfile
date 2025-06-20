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
                    // Create Docker image name with tag based on build number
                    env.DOCKER_IMAGE_NAME = "${DOCKER_USERNAME}/node-app-pipeline:${env.BUILD_NUMBER}"
                }
                echo "Pipeline started for image: ${env.DOCKER_IMAGE_NAME}"
            }
        }

        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
                sh 'ls -la' // Just to confirm structure
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                // Build from root, sending the node-ci-github-actions folder as context
                sh "docker build -t ${env.DOCKER_IMAGE_NAME} -f Dockerfile node-ci-github-actions"
            }
        }

        stage('Show Docker Images') {
            steps {
                echo "Listing Docker images..."
                sh "docker images | grep ${DOCKER_USERNAME}"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
        success {
            echo "✅ Pipeline was successful! Docker image: ${env.DOCKER_IMAGE_NAME}"
        }
        failure {
            echo "❌ Pipeline failed. Please check the logs above."
        }
    }
}
