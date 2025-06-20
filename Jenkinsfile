// Jenkinsfile

pipeline {
    agent any 

    environment {
                
      //  DOCKERHUB_CREDENTIALS_ID = 'your-dockerhub-credentials-id'
        DOCKER_IMAGE_NAME = "milanz247/node-app-jenkins"
    }

    stages {
        stage('Initialize') {
            steps {
                script {                    
                    def shortCommit = env.GIT_COMMIT.take(7)
                    env.IMAGE_TAG = shortCommit
                    echo "Image tag will be: ${env.IMAGE_TAG}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${env.DOCKER_IMAGE_NAME}:${env.IMAGE_TAG}"
                sh "docker build -t ${env.DOCKER_IMAGE_NAME}:${env.IMAGE_TAG} ."
            }
        }

        stage('List Docker Images') {
            steps {
                echo "Listing local Docker images..."
                sh 'docker images'
            }
        }

        
        // stage('Push Docker Image') {
        //     steps {
        //         echo "Pushing image to Docker Hub..."
        //         // Docker Hub login සහ push commands මෙතනට එනවා
        //     }
        // }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
