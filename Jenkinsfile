// Jenkinsfile
pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                script {
                    // Project එක තියෙන sub-directory එක define කරනවා
                    // ඔබේ repo structure එක අනුව මේක වෙනස් කරන්න
                    env.PROJECT_DIR = "node-ci-github-actions"
                }
                echo "Project directory set to: ${env.PROJECT_DIR}"
                echo "Build number is: ${env.BUILD_NUMBER}"
            }
        }

        stage('Build Docker Image') {
            steps {
                // අපි කලින් Freestyle job එකේ කරපු දේමයි
                dir(env.PROJECT_DIR) {
                    echo "Entered directory: $(pwd)"
                    echo "Building Docker image..."
                    // ඔබේ Docker Hub username එක මෙතනට දාන්න
                    sh 'docker build -t miilanz247/node-app-jenkins:${BUILD_NUMBER} .'
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
            echo 'Pipeline finished. Cleaning up...'
            // මෙතන workspace cleanup වගේ දේවල් දාන්න පුළුවන්
        }
        success {
            echo 'Pipeline was successful! Hooray!'
        }
        failure {
            echo 'Pipeline failed. Oh no!'
        }
    }
}
