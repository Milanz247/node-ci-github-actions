// Jenkinsfile (Updated for pushing to Docker Hub)

pipeline {
    agent any

    environment {
        
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials' 
        DOCKER_IMAGE_NAME = "milanz247/node-app-jenkins"
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    def shortCommit = env.GIT_COMMIT.take(7)
                    env.IMAGE_TAG = shortCommit
                    
                    env.LATEST_TAG = "latest" 
                    echo "Image tag will be: ${env.IMAGE_TAG}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image with tags: ${env.IMAGE_TAG} and ${env.LATEST_TAG}"
                
                sh "docker build -t ${env.DOCKER_IMAGE_NAME}:${env.IMAGE_TAG} -t ${env.DOCKER_IMAGE_NAME}:${env.LATEST_TAG} ."
            }
        }

        
        stage('Push Docker Image') {
            steps {
                echo "Pushing image to Docker Hub..."
               
                withCredentials([usernamePassword(credentialsId: env.DOCKERHUB_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    
                    sh "echo ${env.DOCKER_PASSWORD} | docker login -u ${env.DOCKER_USERNAME} --password-stdin"
                    
                    sh "docker push ${env.DOCKER_IMAGE_NAME}:${env.IMAGE_TAG}"

                    sh "docker push ${env.DOCKER_IMAGE_NAME}:${env.LATEST_TAG}"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Logging out from Docker Hub.'           
            sh 'docker logout'
            cleanWs()
        }
    }
}
