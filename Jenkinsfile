// Jenkinsfile
pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                script {
                    env.PROJECT_DIR = "node-ci-github-actions"
                }
                echo "Project directory set to: ${env.PROJECT_DIR}"
                echo "Build number is: ${env.BUILD_NUMBER}"
            }
        }

        // ==========================================================
        // මෙන්න නිවැරදි කරන ලද, එකම එක 'Build Docker Image' stage එක
        // ==========================================================
        stage('Build Docker Image') {
            steps {
                dir(env.PROJECT_DIR) {
                    // shell command එක 'sh' step එකකින් run කරනවා
                    sh 'echo "===> Entered directory: $(pwd)"'
                    
                    // Groovy variable එකක් පාවිච්චි කරන නිසා double quotes
                    echo "Building Docker image for tag: ${env.BUILD_NUMBER}"
                    
                    // Groovy variable එකක් command එකට interpolate කරන නිසා double quotes
                    sh "docker build -t miilanz247/node-app-jenkins:${env.BUILD_NUMBER} ."
                }
            }
        }

        stage('List Docker Images') {
            steps {
                echo "Listing available Docker images..."
                sh 'docker images'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline was successful! Hooray!'
        }
        failure {
            echo 'Pipeline failed. Oh no!'
        }
    }
}
