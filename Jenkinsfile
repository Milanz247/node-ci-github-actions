// Jenkinsfile
pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                script {
                    // අපි මේ variable එක තවදුරටත් define කරන්නේ නෑ, 
                    // මොකද අපි workspace එකේ structure එක දන්නේ නෑ.
                    // env.PROJECT_DIR = "node-ci-github-actions"
                }
                echo "Pipeline started for build number: ${env.BUILD_NUMBER}"
            }
        }

        // ==========================================================
        // අලුතෙන් එකතු කළ DEBUG STAGE එක
        // ==========================================================
        stage('Debug Workspace') {
            steps {
                echo "--- DEBUGGING WORKSPACE ---"
                sh 'echo "Current directory is: $(pwd)"'
                sh 'echo "Listing files and directories:"'
                sh 'ls -la'
                echo "--- END OF DEBUGGING ---"
            }
        }

        stage('Build Docker Image') {
            steps {
                // අපි dir() step එක අයින් කරලා, කෙලින්ම build කරනවා.
                // මොකද අපේ උපකල්පනය Dockerfile එක root එකේම තියෙනවා කියන එක.
                echo "Building Docker image..."
                sh "docker build -t miilanz247/node-app-jenkins:${env.BUILD_NUMBER} ."
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
        // post block එක නොවෙනස්ව තබන්න
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
