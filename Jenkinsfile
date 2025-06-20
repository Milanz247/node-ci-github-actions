// Jenkinsfile

pipeline {
    // 1. නියෝජිතයා (Agent)
    // Pipeline එක දුවන්න ඕන කොහෙද කියලා කියනවා.
    // agent any කියන්නේ ඕනෑම available Jenkins agent කෙනෙක් මත දුවවන්න කියන එක.
    agent any

    // 2. පරිසර විචල්‍යයන් (Environment Variables)
    // Pipeline එක පුරාම පාවිච්චි කරන්න පුළුවන් variables මෙතන define කරනවා.
    environment {
        DOCKER_IMAGE_NAME = "miilanz247/node-app-pipeline" // ඔබේ DockerHub username එක මෙතනට දාන්න
        PROJECT_DIR       = "node-ci-github-actions"
    }

    // 3. අදියර (Stages)
    // Pipeline එකේ ප්‍රධාන අදියර ටික.
    stages {

        // Stage 1: Preparation (සූදානම් වීම)
        stage('Preparation') {
            steps {
                script {
                    // අපි Jenkins ගේ build number එක version එක විදිහට ගන්නවා
                    env.DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
                }
                echo "Pipeline started for build number: ${env.DOCKER_IMAGE_TAG}"
                echo "Image will be named: ${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG}"
            }
        }

        // Stage 2: Build Docker Image
        stage('Build Docker Image') {
            steps {
                echo "--> Building the Docker image..."
                // අපි කලින් Freestyle job එකේ කරපු දේමයි
                // project directory එක ඇතුළට ගිහින් docker build කරනවා
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

    // 4. පසු-ක්‍රියා (Post Actions)
    // Pipeline එකේ ප්‍රතිඵලය (success, failure) අනුව දුවන දේවල්
    post {
        always {
            echo "Pipeline finished. Cleaning up workspace..."
            // Jenkins workspace එක clean කරනවා
            cleanWs()
        }
        success {
            echo "Hooray! The pipeline was successful."
        }
        failure {
            echo "Oops! The pipeline failed."
            // මෙතනට email, Slack notification යවන steps දාන්න පුළුවන්
        }
    }
}
