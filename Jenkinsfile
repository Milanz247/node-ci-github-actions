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

       stage('Build Docker Image') {
                steps {
                    dir(env.PROJECT_DIR) {
                        // අපි සම්පූර්ණ shell command එකම `sh` step එකට දෙනවා.
                        // string interpolation වලට single quotes පාවිච්චි කරනවා.
                        sh 'echo "===> Entered directory: $(pwd)"'
                        
                        echo "Building Docker image for tag: ${env.BUILD_NUMBER}"
                        
                        // Docker build command එක.
                        // මෙතන ${env.BUILD_NUMBER} කියන Groovy variable එක interpolate වෙන්න ඕන නිසා,
                        // අපි double quotes පාවිච්චි කරනවා.
                        sh "docker build -t miilanz247/node-app-jenkins:${env.BUILD_NUMBER} ."
                    }
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
